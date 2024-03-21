import logging
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def blank_fields_login():
    driver = webdriver.Chrome()
    driver.get('http://localhost:3000/')

    try:
        # Leave username field blank
        # Leave password field blank

        # Click login button
        login_button = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'LoginButton'))
        )
        login_button.click()

        # Click login button
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
            logging.info({'Blank Fields Login'})
        else:
            logging.error({'Blank Fields Login'})

    except Exception as e:
        # Log test failure
        logging.error(f'Blank Fields Login test failed: {str(e)}')

    finally:
        driver.quit()
