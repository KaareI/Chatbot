import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Configure logging
logging.basicConfig(filename="test_results.log", level=logging.INFO)


def valid_login():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")
    logging.info("Valid login test:")

    try:
        # Credentials
        username = "test"
        password = "test"

        # IDs
        username_input_id = "loginUser"
        password_input_id = "loginPassword"
        login_button_id = "loginButton"
        chat_window_id = "ChatWindowID"

        # Enter valid username
        try:
            username_input = WebDriverWait(driver, 5).until(
                EC.presence_of_element_located((By.ID, username_input_id))
            )
            username_input.send_keys(username)
        except:
            logging.error(
                "   Failed to find username input field by HTML ID: "
                + username_input_id
                + "\n\n"
            )
            return
            driver.quit()

        # Enter valid password
        try:
            password_input = WebDriverWait(driver, 5).until(
                EC.presence_of_element_located((By.ID, password_input_id))
            )
            password_input.send_keys(password)
        except:
            logging.error(
                "   Failed to find password input field by HTML ID: "
                + password_input_id
                + "\n\n"
            )
            return
            driver.quit()

        # Click login button
        try:
            login_button = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.ID, login_button_id))
            )
            login_button.click()
        except:
            logging.error(
                "   Failed to find login button by HTML ID: " 
                + login_button_id + 
                "\n\n"
            )
            return
            driver.quit()

        # Validate successful login
        try:
            successful_login = WebDriverWait(driver, 5).until(
                EC.presence_of_element_located((By.ID, chat_window_id))
            )

            if successful_login:
                # Log test success
                logging.info("  SUCCESS\n\n")
            else:
                logging.error(
                    " Failed to find chat window after successful login by HTML ID: "
                    + chat_window_id
                    + "\n\n"
                )

        except:
            logging.error(
                " Failed to find chat window after successful login by HTML ID: "
                + chat_window_id
                + "\n\n"
            )

    except Exception as e:
        # Log test failure
        logging.error(f"    Valid Login test failed: {str(e)}" + "\n\n")

    finally:
        driver.quit()
