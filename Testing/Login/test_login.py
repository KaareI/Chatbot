import logging
from datetime import datetime

# Import test functions from separate files
from test_valid_login import valid_login
from test_invalid_username_login import invalid_username_login
from test_invalid_password_login import invalid_password_login
from test_blank_fields_login import blank_fields_login

# Configure logging
logging.basicConfig(filename="test_results.log", level=logging.INFO)

# Get the current time
current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# Execute test cases
logging.info(f" LOGIN TESTS: {current_time}\n")
valid_login()
invalid_username_login()
invalid_password_login()
blank_fields_login()
