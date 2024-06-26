import logging
import mysql.connector
import db
from load_sql_statements import load_sql_query

# Configure logging
logging.basicConfig(filename="test_results.log", level=logging.INFO)


def undefined_null_fields(delete_test_data=False):
    newline = "\n\n"
    if delete_test_data:
        newline = ""
    connection = db.create_connection()
    if connection:
        try:
            # Get the SQL statement
            sql_statement = load_sql_query('UNDEFINED_NULL_FIELDS.sql')

            # Execute the SQL statement
            cursor = connection.cursor()
            cursor.execute(sql_statement)

            # Fetch the results
            results = cursor.fetchall()

            # Log row IDs (assuming the first column is the row ID)
            if results:
                logging.error(
                    "   Rows with faulty data (NULL or empty string):" + newline
                )
                for row in results:
                    row_id = row[0]
                    logging.error(f"  Row ID: {row_id}")
            else:
                logging.info("   No rows with faulty data found." + newline)

        except mysql.connector.Error as err:
            logging.error("   Error executing SQL statement: %s", err + newline)
        finally:
            # Close the connection regardless of success or failure
            connection.close()
    else:
        logging.error("   Failed to connect to database." + newline)
