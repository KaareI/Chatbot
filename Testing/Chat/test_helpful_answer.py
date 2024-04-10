import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

# Import login
from login import login_user

# Import questions
import sys
import os

backend_dir = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "..", "backend", "python")
)
sys.path.append(backend_dir)
from corpus import CORPUS

# Configure logging
logging.basicConfig(filename="test_results.log", level=logging.INFO)


def helpful_answer():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")
    logging.info("Helpful response test:")

    try:
        if login_user(driver):
            # Handle login successful
            test_successful = False

            # IDs
            user_input_id = "userInput"
            yes_button_id = "Yes"
            conversation_ending_sentence = "ShowConversationEnding"
            # Get the asked question from CORPUS
            asked_question = CORPUS[0]

            # Find user input & send the question
            try:
                user_input = WebDriverWait(driver, 5).until(
                    EC.presence_of_element_located((By.ID, user_input_id))
                )
                user_input.clear()
                user_input.send_keys(asked_question["Question"])
                user_input.send_keys(Keys.RETURN)  # Press Enter key
            except:
                # Can not find user input
                logging.error(
                    "   Failed to find user input field by HTML ID: "
                    + user_input_id
                    + "\n"
                )
                return
                driver.quit()

            # Find the inserted question in chat
            try:
                WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located(
                        (
                            By.XPATH,
                            f'//em[contains(text(), "{asked_question["Question"]}")]',
                        )
                    )
                )
            except:
                # Inserted question is not found in chat
                logging.error(
                    "   Failed to find inserted question: "
                    + asked_question["Question"]
                    + "\n"
                )
                return
                driver.quit()

            # Click "Yes" button for question "Did this answer help you?"
            try:
                yes_button = WebDriverWait(driver, 5).until(
                    EC.presence_of_element_located((By.ID, yes_button_id))
                )
            except:
                logging.error(
                    "   Failed to find yes button by HTML ID: " + yes_button_id + "\n"
                )
                return
                driver.quit()
            yes_button.click()

            # Find bot response of "Fantastic! If you have any more questions feel free to ask."
            try:
                sentence = WebDriverWait(driver, 5).until(
                    EC.presence_of_element_located(
                        (By.CLASS_NAME, conversation_ending_sentence)
                    )
                )
            except:
                # Can not find bot response
                logging.error(
                    "   Failed to find bot response of [Fantastic! If you have any more questions feel free to ask.] by HTML CLASS: "
                    + conversation_ending_sentence
                    + "\n"
                )
                return
                driver.quit()

            if sentence:
                test_successful = True
            else:
                logging.error("   Expected to find bot response in Chat \n")

            # Successful test
            if test_successful:
                logging.info("   SUCCESS\n")
            else:
                logging.error("   FAILURE\n")

        else:
            # Handle unsuccessful login
            logging.error("   Test failed due to invalid login\n")

    except Exception as e:
        # Log test failure
        logging.error(f"   Helpful response test failed: {str(e)}\n")

    finally:
        driver.quit()
