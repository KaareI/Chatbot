import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)


def invalid_username_login():

    driver = webdriver.Chrome()
    driver.get('http://localhost:3000/')
    logging.info("Invalid username login test:")

    try:
        # Credentials
        username = "invalid_username"
        password = "test"

        # IDs
        username_input_id = "loginUser"
        password_input_id = "loginPassword"
        login_button_id = "loginButton"

        # Enter invalid username
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
                + login_button_id
                + "\n\n"
            )
            return
            driver.quit()

        # User feedback for wrong credentials
        input_fields = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'shake'))
        )

        # Validate unsuccessful login
        # Iterate through the browser logs and look for the error message
        browser_log = driver.get_log('browser')
        error_found = False
        for entry in browser_log:
            if 'message' in entry and 'Unauthorized' in entry['message']:
                error_found = True
                break

        if input_fields and error_found:
            # Log test success
            logging.info('  SUCCESS\n\n')
        else:
            logging.error('    Invalid username login failed:\n' + "Input fields had visual error feedback: " + str(input_fields.is_displayed()) + "\nUnauthorized found in browser console: " + str(error_found) + "\n\n")

    except Exception as e:
        # Log test failure
        logging.error(f'    Invalid username login test failed: {str(e)}' + "\n\n")

    finally:
        driver.quit()
