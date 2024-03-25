import logging
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
# Import login
from login import login_user

#Import questions
import sys
import os
backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'backend'))
sys.path.append(backend_dir)
from corpus import CORPUS

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def questions():
    driver = webdriver.Chrome()
    driver.get('http://localhost:3000/')

    errorList=[]

    try:
        if login_user(driver):
            # Handle login successful
            for question in CORPUS:
                user_input = WebDriverWait(driver, 5).until(
                    EC.presence_of_element_located((By.ID, 'userInput'))
                )
                user_input.clear()
                user_input.send_keys(question['Question'])
                user_input.send_keys(Keys.RETURN)  # Press Enter key
                
                # Check if <em> element with the same question exists
                try:
                    WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.XPATH, f'//em[contains(text(), "{question["Question"]}")]'))
                    )
                except:
                    errorList.append({'id': question['id'], 'Question': question['Question']})
                    
                # Wait 10s until trying sending another question
                try:
                    WebDriverWait(driver, 10).until(
                        EC.element_to_be_clickable((By.ID, 'userInput'))
                    )
                except:
                    # If userInput is disabled, move to the next question
                    logging.error("User input is not found")
                    driver.quit()

            if not errorList:
                logging.info("All questions work")
            else:
                error_messages = "\n".join([f"Question ID: {item['id']}, Question: {item['Question']}" for item in errorList])
                logging.error("QUESTIONS WERE NOT FOUND IN THE UI WITHIN 10s OR WERE NOT FOUND AT ALL\n")
                logging.error("Asking these questions failed:\n" + error_messages)

        else:
            # Handle unsuccessful login
            logging.error('Asking questions failed due to unsuccessful login')

    except Exception as e:
        # Log test failure
        logging.error(f'Asking questions failed: {str(e)}')

    finally:
        driver.quit()

