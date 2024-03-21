import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def valid_login():
    driver = webdriver.Chrome()
    driver.get('http://localhost:3000/')

    try:
        # Enter valid username
        username_input = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'loginUser'))
        )
        username_input.send_keys('test')

        # Enter valid password
        password_input = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'loginPassword'))
        )
        password_input.send_keys('test')

        # Click login button
        login_button = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'LoginButton'))
        )
        login_button.click()

        # Validate successful login
        successful_login = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'ChatWindow'))
        )
        
        if successful_login:
            # Log test success
            logging.info({'Valid Login'})
        else:
            logging.error({'Valid Login'})

    except Exception as e:
        # Log test failure
        logging.error(f'Valid Login test failed: {str(e)}')

    finally:
        driver.quit()
