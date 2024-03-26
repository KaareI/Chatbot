import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
# Import test functions from separate files
from test_questions import questions

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

# Get the current time
current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

# Execute test cases
logging.info(f'\n\nChat test {current_time}')
# Ask every question in FAQ
questions()
# saving to database