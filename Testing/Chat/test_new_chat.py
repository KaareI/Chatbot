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
    os.path.join(os.path.dirname(__file__), "..", "..", "backend")
)
sys.path.append(backend_dir)
from corpus import CORPUS

# Configure logging
logging.basicConfig(filename="test_results.log", level=logging.INFO)


def new_chat():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")
    logging.info("\n\nNew chat test:")

    try:
        if login_user(driver):
            # Handle login successful
            test_successful = False

            # IDs
            settings_button_id = "Settings"
            new_button_id = "newChatButton"
            user_input_id = "userInput"
            response_containers_xpath = (
                '//div[@class="Chat"]/div[@class="ResponseContainer"]'
            )
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

            # Click settings button
            try:
                settings_button = WebDriverWait(driver, 5).until(
                    EC.presence_of_element_located((By.ID, settings_button_id))
                )
            except:
                logging.error(
                    "   Failed to find settings button by HTML ID: "
                    + settings_button_id
                    + "\n"
                )
                return
                driver.quit()
            settings_button.click()

            # Click new chat button
            try:
                new_chat_button = WebDriverWait(driver, 5).until(
                    EC.presence_of_element_located((By.ID, new_button_id))
                )
            except:
                logging.error(
                    "   Failed to find new chat button by HTML ID: "
                    + new_button_id
                    + "\n"
                )
                return
                driver.quit()
            new_chat_button.click()

            # Check if exactly one ResponseContainer div exists within Chat
            # One ResponseContainer in chat is bot greeting
            try:
                response_containers = WebDriverWait(driver, 10).until(
                    EC.presence_of_all_elements_located(
                        (By.XPATH, response_containers_xpath)
                    )
                )
            except:
                logging.error(
                    "   ResponseContainer not found in Chat by XPATH="
                    + response_containers_xpath
                    + "\n"
                )
                return
                driver.quit()

            if len(response_containers) == 1:
                test_successful = True
            else:
                logging.error(
                    "   Expected only one ResponseContainer in Chat, found: "
                    + str(len(response_containers))
                    + "\nXPATH="
                    + response_containers_xpath
                    + "\n"
                )

            # Successful test
            if test_successful:
                logging.info("Handling new chat works")

        else:
            # Handle unsuccessful login
            logging.error('" Test failed due to invalid login"')

    except Exception as e:
        # Log test failure
        logging.error(f"Creating new chat failed: {str(e)}")

    finally:
        driver.quit()
