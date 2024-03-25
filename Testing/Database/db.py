import mysql.connector
import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

def create_connection():
    try:
        database = os.environ.get('DB_DATABASE')
        host = os.environ.get('DB_HOST')
        user = os.environ.get('DB_USER')
        password = os.environ.get('DB_PASSWORD')

        connection = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database,
        )
        print('Connected to MySQL database ID:', connection.connection_id)
        return connection
    except mysql.connector.Error as err:
        print("Error connecting to database:", err)
        return None