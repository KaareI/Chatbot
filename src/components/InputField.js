import React, {useState} from "react";

// Import CSS
import './InputField.css';
import './Button.css';

// Import assets
import SendButton from "../assets/Send.png";
import {BotResponse} from "./misc/BotAnswers";

const InputField = ({sendInput, storeMessages, setGeneratedAnswer}) => {
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    /* Send user message when "ENTER" is pressed */
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleButtonClick();
        }
    };

    const askQuestion = (question) => {
        /* Make a request to server with question */
        return fetch("/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ question }),
        })
            /* Handle response from server */
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error interpreting question');
                }
                return response.json();
            })
            /* Handle errors that occur during the fetch request */
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });
    };

    const botResponse = (userQuestion) => {
        /* Add loading animation till answer is generated */
        setGeneratedAnswer(false);
        return new Promise((resolve, reject) => {
            askQuestion(userQuestion)
                .then(object => {
                    console.log(object);
                    const answerID = parseInt(object.id);
                    let answer;
                    for (const response of BotResponse) {
                        if (response.id === answerID) {
                            answer = response;
                            break;
                        }
                    }
                    setTimeout(() => {
                        sendInput(answer.message, false)
                        // User can now type
                        setIsDisabled(false);
                        // Stop loading animation for user
                        setGeneratedAnswer(true)
                        resolve(answerID); // Resolve the promise with answerID
                    }, 1000);
                })
                .catch(error => {
                    reject(error); // Reject the promise if there's an error
                });
        });
    };



    const handleButtonClick = () => {
        // User can not type
        setIsDisabled(true);
        // Send user input value
        sendInput(inputValue, true);
        // Set input value to empty
        setInputValue('')
        // Get bot response
        botResponse(inputValue)
            .then(answerID => {
                // Store messages for saving
                storeMessages(inputValue, true);
                storeMessages(answerID, false);
            })
            .catch(error => {
                // Handle error here
            });
    };

    return (
        <div className={"InputField"}>

            <input
                type="text"
                placeholder="Ask a question..."
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyPress}
                className={isDisabled ? 'Disabled' : ''}
                disabled={isDisabled}
                style={{
                    width: "90%",
                    height: "100%",
                    padding: "16px",
                    fontSize: "14px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#ECECEC",
                    outline: "none",
                }}
            />

            <button
                className={`Button ${inputValue.trim() === '' ? 'Disabled' : ''}`}
                style={{margin: "auto"}}
                onClick={handleButtonClick}
                disabled={inputValue.trim() === ''}
            >
                <img src={SendButton} alt="Send Button"
                     style={{width: '24px', height: '16px', margin: "auto"}}
                />
            </button>

        </div>
    );
}

export default InputField;
