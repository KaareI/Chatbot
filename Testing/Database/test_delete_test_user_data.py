import logging
import mysql.connector
import db
from load_sql_statements import load_sql_query

# Configure logging
logging.basicConfig(filename='test_results.log', level=logging.INFO)

def delete_test_user_data():
    connection = db.create_connection()
    if connection:
        try:
            # Get the SQL statement
            sql_statement = load_sql_query('DELETE_TEST_USER_DATA.sql')

            # Execute the SQL statement
            cursor = connection.cursor()
            cursor.execute(sql_statement)

            # Commit the changes to the database
            connection.commit()

            # Log success message
            logging.info("   Test user's data deleted successfully.\n\n\n")

        except mysql.connector.Error as err:
            logging.error("   Error deleteing test user's data: %s", err + "\n\n\n")
        finally:
            # Close the connection regardless of success or failure
            connection.close()
    else:
        logging.error("   Failed to connect to database.\n\n\n")