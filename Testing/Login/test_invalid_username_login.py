import logging
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)


def invalid_username_login():

    driver = webdriver.Chrome()
    driver.get('http://localhost:3000/')

    try:
        username = "invalid_username"
        password = "test"

        # Enter valid username
        username_input = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'loginUser'))
        )
        username_input.send_keys(username)

        # Enter invalid password
        password_input = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'loginPassword'))
        )
        password_input.send_keys(password)

        # Click login button
        login_button = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'LoginButton'))
        )
        login_button.click()

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
            
        time.sleep(1)

        if input_fields and error_found:
            # Log test success
            logging.info({'Invalid Username Login'})
        else:
            logging.error({'Invalid Username Login'})

    except Exception as e:
        # Log test failure
        logging.error(f'Invalid Username Login test failed: {str(e)}')

    finally:
        driver.quit()
