import logging
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def login_user(driver):

    try:
        username = "test"
        password = "test"

        # Enter valid username
        username_input = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'loginUser'))
        )
        username_input.send_keys(username)

        # Enter valid password
        password_input = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'loginPassword'))
        )
        password_input.send_keys(password)

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
            return True

    except Exception as e:
        logging.error(f'Unsuccessful login with username: {username}\n and password: {password}.\n\n Error: {str(e)}')
        return False