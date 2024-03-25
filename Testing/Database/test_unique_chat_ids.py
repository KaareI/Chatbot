import logging
import time
import db
import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def unique_chat_ids():
    connection = db.create_connection()
    if connection:
        try:
            # Get the SQL statement from environment variables
            sql_statement = os.environ.get('UNIQUE_CHAT_IDS')
            # Execute the SQL statement
            cursor = connection.cursor()
            cursor.execute(sql_statement)
            # Fetch the results
            results = cursor.fetchall()

        except mysql.connector.Error as err:
            logging.error("Error executing SQL statement: %s", err)
        finally:
            # Close the connection regardless of success or failure
            connection.close()
    else:
        print("Failed to connect to database.")
