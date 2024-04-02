import subprocess

if __name__ == "__main__":
    # Execute test scripts one by one
    subprocess.run(['python', 'Login/test_login.py'])
    subprocess.run(['python', 'Chat/test_chat.py'])