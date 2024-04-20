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

global test_successful
test_successful = False

def unhelpful_answer():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")
    logging.info("Unhelpful response test:")

    try:
        if login_user(driver):
            # Handle login successful

            # IDs
            user_input_id = "userInput"
            no_button_id = "No"
            suggested_questions = "ShowAddtionalAnswers"
            rephrase_question_xpath = "//p[@class='Response Bot' and contains(text(), 'Try to rephrase question')]"
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

            # Click try all three additional questions
            def check_additional_question(index):
                # Click "No" button for question "Did this answer help you?"
                try:
                    no_button = WebDriverWait(driver, 5).until(
                        EC.presence_of_element_located((By.ID, no_button_id))
                    )
                except:
                    logging.error(
                        "   Failed to find no button by HTML ID: " + no_button_id + "\n"
                    )
                    return
                    driver.quit()
                no_button.click()

                # Find additonal questions
                try:
                    additional_questions = WebDriverWait(driver, 5).until(
                        EC.presence_of_all_elements_located(
                            (By.CLASS_NAME, suggested_questions)
                        )
                    )
                except:
                    # Can not find bot response
                    logging.error(
                        "   Failed to find bot response of additional questions by HTML CLASS: "
                        + suggested_questions
                        + "\n"
                    )
                    return
                    driver.quit()

                # Get the question that is going to be clicked
                try:
                    clicked_question = (
                        additional_questions[index].text.strip().replace('"', "")
                    )
                except:
                    logging.error(
                        "   Error extracting question from "
                        + str(index)
                        + " additional question\n"
                    )

                # Click the additonal question
                try:
                    additional_questions[index].click()
                except:
                    logging.error(
                        "   Error clicking on the "
                        + str(index)
                        + " additional question\n"
                    )

                if index == 3:
                    try:
                        WebDriverWait(driver, 10).until(
                            EC.presence_of_all_elements_located(
                                (By.XPATH, rephrase_question_xpath)
                            )
                        )

                    except:
                        logging.error(
                            "   Rephrase question or contact support message not found in Chat by XPATH="
                            + rephrase_question_xpath
                            + "\n"
                        )
                        return
                        driver.quit()

                    # All additional questions work
                    global test_successful
                    test_successful = True
                    return

                # Find the clicked question in chat
                try:
                    WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located(
                            (
                                By.XPATH,
                                f'//em[contains(text(), "{clicked_question}")]',
                            )
                        )
                    )
                except:
                    # Clicked question is not found in chat
                    logging.error(
                        "   Failed to find clicked question: " + clicked_question + "\n"
                    )
                    return
                    driver.quit()

            for i in range(1, 4):  # Loop three times, starting with index 1
                check_additional_question(index=i)

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
        logging.error(f"   Unhelpful response test failed: {str(e)}\n")

    finally:
        driver.quit()
