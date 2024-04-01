import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def blank_fields_login():
    driver = webdriver.Chrome()
    driver.get('http://localhost:3000/')
    logging.info("Blank fields login test:")


    try:
        # Leave username field blank
        # Leave password field blank

        # IDs
        login_button_id = "loginButto"

        # Click login button
        try:
            login_button = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.ID, login_button_id))
            )
            login_button.click()
        except:
            logging.error(
                "   Failed to find login button by HTML ID: " + login_button_id + "\n\n\n"
            )
            return

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
            logging.info('  SUCCESS\n\n\n')
        else:
            logging.error('    Blank fields login failed:\n' + "Input fields had visual error feedback: " + str(input_fields.is_displayed()) + "\nUnauthorized found in browser console: " + str(error_found) + "\n\n\n")

    except Exception as e:
        # Log test failure
        logging.error(f'    Blank fields login test failed: {str(e)}' + "\n\n\n")

    finally:
        driver.quit()
