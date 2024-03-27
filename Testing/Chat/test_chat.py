import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
# Import test functions from separate files
from test_questions import questions
from test_new_chat import new_chat
import sys
import os
database_tests = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'Database'))
sys.path.append(database_tests)
from test_database import database_tests

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

# Get the current time
current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

# Execute test cases
logging.info(f'\n\nChat test {current_time}')
# Ask every question in FAQ
questions()
database_tests()
# Handle new chat creation after sending a message
new_chat()
database_tests(delete_test_data=True)
# Send message, load previous chat and send another message
# loading previous chat between chat check do database tests and type adn do database tests
# load two chats in a row