import logging
import mysql.connector
import db
import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def unique_order_ids():
    connection = db.create_connection()
    if connection:
        try:
            # Get the SQL statement from environment variables
            sql_statement = os.environ.get('UNIQUE_ORDER_IDS')

            # Execute the SQL statement
            cursor = connection.cursor()
            cursor.execute(sql_statement)

            # Fetch the results
            results = cursor.fetchall()

            # Check for duplicate order IDs within each chat ID
            error_list = []
            chat_id_orders = {}
            for row in results:
                chat_id, order_id = row
                if chat_id not in chat_id_orders:
                    chat_id_orders[chat_id] = set()
                if order_id in chat_id_orders[chat_id]:
                    error_list.append((chat_id, order_id))  # Add duplicate to error list
                else:
                    chat_id_orders[chat_id].add(order_id)

            # Log or print the error list
            if error_list:
                logging.error("   Duplicate order IDs found:")
                for i, (chat_id, order_id) in enumerate(error_list):
                    newline = "\n" if i == len(error_list) - 1 else ""  # Add newline only for last element
                    logging.error(f"   Chat ID: {chat_id}, Order ID: {order_id}{newline}")
            else:
                logging.info("   No duplicate order IDs found.")

        except mysql.connector.Error as err:
            logging.error("   Error executing SQL statement: %s", err)
        finally:
            # Close the connection regardless of success or failure
            connection.close()
    else:
        logging.error("   Failed to connect to database.")