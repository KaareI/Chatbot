import os
# Function to load SQL queries from files
def load_sql_query(file_name):
    # Construct the file path
    file_path = os.path.join(os.path.dirname(__file__), 'queries', file_name)
    
    # Read the contents of the file
    with open(file_path, 'r') as file:
        sql_query = file.read()
    
    return sql_query