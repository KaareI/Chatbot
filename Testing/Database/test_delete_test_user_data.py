import logging
import time
import db
import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def delete_test_user_data():
    connection = db.create_connection()
    if connection:
        try:
            # Get the SQL statement from environment variables
            sql_statement = os.environ.get('DELETE_TEST_USER_DATA')

            # Execute the SQL statement
            cursor = connection.cursor()
            cursor.execute(sql_statement)

            # Commit the changes to the database
            connection.commit()

            # Log success message
            logging.info("Test user's data deleted successfully.")

        except mysql.connector.Error as err:
            logging.error("Error deleteing test user's data: %s", err)
        finally:
            # Close the connection regardless of success or failure
            connection.close()
    else:
        logging.error("Failed to connect to database.")