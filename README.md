# Chatbot for FAQ

Welcome to the Chatbot for FAQ project! This README will guide you through setup and provide project details. Please note that this is a prototype.

## Installation

**Prerequisites:**

*   [Docker](https://www.docker.com/products/docker-desktop/)
*   [Git](https://git-scm.com/downloads)

**Steps:**

1. Open Docker Desktop
2. Open your terminal as administrator.
3. Navigate to the desired installation directory.
4. Clone the repository:

```bash
git clone https://github.com/KaareI/Chatbot && cd chatbot
```

5. Build and launch the application. This process typically takes around 9 minutes, but it may vary depending on your computer's specifications and internet connection speed:

```bash
docker-compose build --no-cache && docker-compose up
```

6. Access chatbot in your browser at http://localhost:3000.

"Experiencing difficulty accessing your React application at localhost:3000? Here are some troubleshooting steps:

* Try loading on incognito tab.
* Restart the Docker container.
* Check if another application is using port 3000.
* Ensure network configuration allows connections to port 3000.
* Temporarily disable firewall or antivirus software.
* Consider restarting your computer if issues persist.

## Project Details

**Functionality:**

* Analyzes user input and compares it to existing FAQ questions using [Cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity)
* Provides top 3 matches for questions.
* Stores conversations for 30 days and then automatically deletes them.
* Automated end-to-end tests with Pyhton Selenium, that cover key parts of application

**Data Source:**

* FAQ page of https://www.tickmill.eu/about/faq (last updated on Tuesday, April 9, 2024, at 13:20 GMT+3).

**Credentials:**

* **Default User:**
    * Username: kasutaja
    * Password: kasutaja
* **Test User (for testing purposes / end-to-end tests):**
    * Username: test
    * Password: test
    
**NOTE:** Please be aware that, for production, it's essential to remove all '#' characters from the .gitignore file, within the '#production' section.

## Technology Stack

* **Frontend:** React.js
* **Backend:**
    * Python (Flask): Implements the question-answering logic.
    * Node.js (Express.js): Handles data retrieval, conversation saving, and deletion of old data.
* **Database:** MySQL
* **Design:** Figma [Design file](https://www.figma.com/file/86kEi2PsP4jGAdUXrKCzvI/Chatbot?type=design&node-id=0%3A1&mode=design&t=birgjFIdqRU8hxLh-1)

## Screenshots

![Login screen](/src/assets/Login_screen.png)
![Chat example](/src/assets/Chat_example.png)
![Saved chats](/src/assets/Saved_chats.png)

## Docker optimization issues

If Docker Desktop is consuming excessive system resources, follow these steps to optimize its performance:

1. Close Docker Desktop.
2. Open a new terminal with administrator privileges.
3. If you're on Windows and using the Linux subsystem:

```bash
wsl --shutdown
```

4. Press 'Windows' + 'r' and run:

```bash
%UserProfile%\
```

5. Create file named, if not exsists already:

```bash
.wslconfig
```

6. Add and save the following contents to the file:

```bash
[wsl2]
processors=2
memory=2GB  # Change to your desired memory limit
swap=1GB
kernelCommandLine="sysctl.vm.swappiness=10"
```

7. Launch Docker Desktop again and start the 'chatbot' container.

## References

* Cosine similarity calculation in Python: https://github.com/canonicalmg/FAQ-Chat-Bot
* Loading animation: https://css-loaders.com/dots-bars/
