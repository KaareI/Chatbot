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

            # Check for duplicate chat IDs and collect unique users
            chat_id_users = {}  # Use a dictionary to store unique users per chat ID
            for chat_id, user_id in results:
                if chat_id not in chat_id_users:
                    chat_id_users[chat_id] = set()  # Use a set to ensure uniqueness
                chat_id_users[chat_id].add(user_id)

            # Log duplicate chat IDs and their unique users
            found_duplicates = False
            for i, (chat_id, users) in enumerate(chat_id_users.items()):
                if len(users) > 1:
                    if not found_duplicates:  # Log the general message only once
                        logging.error("Duplicate chat IDs found:")
                        found_duplicates = True
                        newline = "\n" if i != len(chat_id_users) - 1 else ""  # Add newline for the last element
                    logging.error(f"  Duplicate chat ID: {chat_id}, Users IDs: {list(users)}{newline}")

            # Log if no duplicates were found
            if not found_duplicates:
                logging.info("No duplicate chat IDs found.")

        except mysql.connector.Error as err:
            logging.error("Error executing SQL statement: %s", err)
        finally:
            # Close the connection regardless of success or failure
            connection.close()
    else:
        logging.error("Failed to connect to database.")