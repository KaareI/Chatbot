import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
# Import test functions from separate files
from test_unique_order_ids import unique_order_ids
from test_unique_chat_ids import unique_chat_ids
from test_undefined_null_fields import undefined_null_fields
from test_delete_test_user_data import delete_test_user_data

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def database_tests(delete_test_data=False):

    # Get the current time
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    # Execute test cases
    logging.info(f'\n\nDatabase test {current_time}')
    # Check that there are not any duplicate order ids in each chat
    unique_order_ids()
    # Each ChatID must be unique to a single user, ensuring no duplicates exist.
    unique_chat_ids()
    # There can not be undefined or null fields
    undefined_null_fields()
    # Delete test user's data that is saved to database during testing
    if delete_test_data:
        delete_test_user_data()
    logging.info("\n")