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


def previous_chat():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")
    logging.info("\n\nPrevious chat test:")

    try:
        if login_user(driver):
            # Handle login successful
            test_successful = False

            # IDs
            settings_button_id = "Settings"
            saved_chats_id = "forTests"
            user_input_id = "userInput"
            response_containers_xpath = (
                '//div[@class="Chat"]/div[@class="ResponseContainer"]'
            )
            # Get the asked question from CORPUS
            asked_question = CORPUS[0]

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

            # Get user's saved chats
            try:
                saved_chats = WebDriverWait(driver, 10).until(
                    EC.presence_of_all_elements_located((By.ID, saved_chats_id))
                )
            except:
                logging.error(
                    "   Failed to find user's saved conversations by HTML ID: "
                    + saved_chats_id
                    + "\n"
                )
                return
                driver.quit()

            # Click the first saved chat in array
            if saved_chats:
                saved_chats[0].click()

                # Check if more than one ResponseContainer div exists within Chat
                # ResponseContainer represents user or bot message
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

                if len(response_containers) > 1:
                    try:
                        user_input = WebDriverWait(driver, 5).until(
                            EC.presence_of_element_located((By.ID, user_input_id))
                        )
                        user_input.clear()
                        user_input.send_keys(asked_question["Question"])
                        user_input.send_keys(Keys.RETURN)  # Press Enter key

                    # Can not find user input
                    except:
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

                    # Inserted question is not found in chat
                    except:
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

                    # Get user's saved chats
                    try:
                        updated_chats = WebDriverWait(driver, 10).until(
                            EC.presence_of_all_elements_located((By.ID, saved_chats_id))
                        )
                    except:
                        logging.error(
                            "   Failed to find user's saved conversations by HTML ID: "
                            + saved_chats_id
                            + "\n"
                        )
                        return
                        driver.quit()

                    # To ensure that loaded chat is being updated, not new one created
                    if len(saved_chats) == len(updated_chats):
                        test_successful = True
                    else:
                        logging.error(
                            "   A new chat has been added instead of updating the existing loaded chat\nUser chats before loading: "
                            + str(len(saved_chats))
                            + "\nAfter loading: "
                            + str(len(updated_chats))
                            + "\n"
                        )

                # Loading previous chat does not work (empty chat with only default bot greeting)
                else:
                    logging.error(
                        "   Expected more than one ResponseContainer in Chat, found: "
                        + str(len(response_containers))
                        + "\nXPATH="
                        + response_containers_xpath
                        + "\n"
                    )

            # No saved conversations found for user
            else:
                logging.error(
                    "   Failed to find user's saved conversations by HTML ID: "
                    + saved_chats_id
                    + "\n"
                )

        # Failed login
        else:
            logging.error(" Test failed due to invalid login")

        # Successful test
        if test_successful:
            logging.info("  Loading previous chat works")

    except Exception as e:
        logging.error(f"    An error occurred: {str(e)}")
    finally:
        driver.quit()
