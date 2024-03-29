import logging
from datetime import datetime
# Import test functions from separate files
from test_questions import questions
from test_new_chat import new_chat
from test_previous_chat import previous_chat
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
""" questions() """
""" database_tests() """
# Handle new chat creation after sending a message
new_chat()
database_tests()
# Send message, load previous chat and send another message
# no extra conversation added
previous_chat()
database_tests(delete_test_data=True)
# load two chats in a row