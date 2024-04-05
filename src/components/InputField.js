import React, { useState, useEffect } from "react";

// Import CSS
import './InputField.css';
import './Button.css';

// Import assets
import SendButton from "../assets/Send.png";
import { BotResponse } from "./misc/BotAnswers";

const InputField = ({ sendInput, storeMessages, setGeneratedAnswer, setQuestions, questions, renderQuestion, setRenderQuestion }) => {
    const [inputValue, setInputValue] = useState('');
    const [inputSet, setInputSet] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    /* Send user message when "ENTER" is pressed */
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend();
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
                    return { id: '9999' }
                }
                return response.json();
            })
            /* Handle errors that occur during the fetch request */
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });
    };

    const getBotResponse = (userQuestion) => {
        /* Add loading animation till answer is generated */
        setGeneratedAnswer(false);
        return new Promise((resolve, reject) => {
            askQuestion(userQuestion)
                .then(object => {
                    console.log(object);
                    // Send similar questions to Chat
                    setQuestions(object)
                    // Get the answer id
                    const answerID = parseInt(object[0].id);
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

    const handleSend = () => {
        // User can not type
        setIsDisabled(true);
        // Send user input value
        sendInput(inputValue, true);
        // Set input value to empty
        setInputValue('')
        // Get bot response
        getBotResponse(inputValue)
            .then(answerID => {
                // Store messages for saving
                storeMessages(inputValue, true);
                storeMessages(answerID, false);
            })
            .catch(error => {
                // Handle error here
            });
    };

    useEffect(() => {
        switch (renderQuestion) {
            case 1:
                setInputValue(questions[1].question)
                setInputSet(true);
                break;
            case 2:
                setInputValue(questions[2].question)
                setInputSet(true);
                break;
            case 3:
                setInputValue("None of these help me")
                setInputSet(true);
                break;
            default:
        }
        if (renderQuestion !== 0 && inputSet){
            setRenderQuestion(0)
            setInputSet(false); 
            handleSend()
        }
    }, [renderQuestion, inputValue]);

    return (
        <div className={"InputField"}>

            <input
                type="text"
                placeholder="Ask a question..."
                id="userInput"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyPress}
                className={isDisabled ? 'Disabled' : ''}
                disabled={isDisabled}
            />

            <button
                className={`Button ${inputValue.trim() === '' ? 'Disabled' : ''}`}
                style={{ margin: "auto" }}
                onClick={handleSend}
                disabled={inputValue.trim() === ''}
            >
                <img src={SendButton} alt="Send Button"
                    style={{ width: '24px', height: '16px', margin: "auto" }}
                />
            </button>

        </div>
    );
}

export default InputField;