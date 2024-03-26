import logging
import time
import db
import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def undefined_null_fields():
    connection = db.create_connection()
    if connection:
        try:
            # Get the SQL statement from environment variables
            sql_statement = os.environ.get('UNDEFINED_NULL_FIELDS')

            # Execute the SQL statement
            cursor = connection.cursor()
            cursor.execute(sql_statement)

            # Fetch the results
            results = cursor.fetchall()

            # Log row IDs (assuming the first column is the row ID)
            if results:
                logging.error("Rows with faulty data (NULL or empty string):")
                for row in results:
                    row_id = row[0]
                    logging.error(f"  Row ID: {row_id}")
            else:
                logging.info("No rows with faulty data found.")  # Log as info

        except mysql.connector.Error as err:
            logging.error("Error executing SQL statement: %s", err)
        finally:
            # Close the connection regardless of success or failure
            connection.close()
    else:
        logging.error("Failed to connect to database.")