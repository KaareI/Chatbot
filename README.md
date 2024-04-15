# Chatbot for FAQ

Welcome to the Chatbot for FAQ project! This README will guide you through setup and provide project details.

## Installation

**Prerequisites:**

*   [Docker](https://www.docker.com/products/docker-desktop/)
*   [Git](https://git-scm.com/downloads)

**Steps:**

1.  Open your terminal as administrator.
2.  Navigate to the desired installation directory.
3.  Clone the repository:

```bash
git clone https://github.com/KaareI/Chatbot
```

4. Build the application:

```bash
docker-compose build --no-cache
```

5. Launch the application in detached mode:

```bash
docker-compose up -d
```

6. Access chatbot in your browser at http://localhost:3000.

## Project Details

**Functionality:**

* Analyzes user input and compares it to existing FAQ questions using [Cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity)
* Provides top 3 matches for questions.
* Stores conversations for 30 days and then automatically deletes them.
* Automated end-to-end tests with Pyhton Selenium, that cover key parts of application (currently not working)

**Data Source:**

* FAQ page of https://www.tickmill.eu/about/faq (last updated on Tuesday, April 9, 2024, at 13:20 GMT+3).

**Credentials:**

* **Default User:**
    * Username: kasutaja
    * Password: kasutaja
* **Test User (for testing purposes / end-to-end tests):**
    * Username: test
    * Password: test

## Technology Stack

* **Frontend:** React
* **Backend:**
    * Python (Flask): Implements the question-answering logic.
    * Node.js (Express.js): Handles data retrieval, conversation saving, and deletion of old data.
* **Database:** MySQL

## Screenshots

![Login screen](/src/assets/Login_screen.png)
![Chat example](/src/assets/Chat_example.png)
![Saved chats](/src/assets/Saved_chats.png)

## References

* Cosine similarity calculation in Python: https://github.com/canonicalmg/FAQ-Chat-Bot
* Loading animation: https://css-loaders.com/dots-bars/
