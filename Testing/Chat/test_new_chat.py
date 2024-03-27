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

def new_chat():
    driver = webdriver.Chrome()
    driver.get('http://localhost:3000/')

    try:
        if login_user(driver):
            # Handle login successful

            # Get the first question from CORPUS
            first_question = CORPUS[0]

            user_input = WebDriverWait(driver, 5).until(
                EC.presence_of_element_located((By.ID, 'userInput'))
            )
            user_input.clear()
            user_input.send_keys(first_question['Question'])
            user_input.send_keys(Keys.RETURN)  # Press Enter key
                
            # Check if <em> element with the same question exists
            try:

                test_successful = False

                # Find the same question in chat
                WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, f'//em[contains(text(), "{first_question['Question']}")]'))
                )

                try:
                    # Click settings button
                    settings_button = WebDriverWait(driver, 5).until(
                        EC.presence_of_element_located((By.ID, 'Settings'))
                    )
                    settings_button.click()

                    try:
                        # Click chat button
                        new_chat_button = WebDriverWait(driver, 5).until(
                            EC.presence_of_element_located((By.ID, 'newChatButton'))
                        )
                        new_chat_button.click()

                        try:
                            # Check if exactly one responsecontainer div exists within chat div
                            response_containers = WebDriverWait(driver, 10).until(
                                EC.presence_of_all_elements_located((By.XPATH, '//div[@class="Chat"]/div[@class="ResponseContainer"]'))
                            )

                            if len(response_containers) == 1:
                                test_successful = True
                            else:
                                logging.error("Error: Expected exactly one ResponseContainer, found %d", len(response_containers) + "\n")

                        except:
                            logging.error("Creating new chat failed due to div with class Chat has more than one div with class ResponseContainer\nOnly one ResponseContainer should be present AKA Greeting\n")

                    except:
                        # New chat button not present in chat
                        logging.error("Creating new chat failed due to new chat button not being present\n")
                        driver.quit()

                except:
                    # Settings button not present
                    logging.error("Creating new chat failed due to settings button not being present\n")
                    driver.quit()

            except:
                # Question not present in chat
                logging.error("Creating new chat failed due to question not being present in chat\n")
                driver.quit()

            if test_successful:
                logging.info("Handling new chat works")

        else:
            # Handle unsuccessful login
            logging.error('Handling new chat failed due to unsuccessful login')

    except Exception as e:
        # Log test failure
        logging.error(f'Creating new chat failed: {str(e)}')

    finally:
        driver.quit()