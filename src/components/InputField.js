import React, {useState} from "react";

// Import CSS
import './InputField.css';
import './Button.css';

// Import assets
import SendButton from "../assets/Send.png";
import {AccountInformation} from "./misc/BotAnswers";

const InputField = ({sendInput, storeMessages, setGeneratedAnswer}) => {
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    /* Send user message when "ENTER" is pressed */
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleButtonClick();
        }
    };

    //TEMPO
    const botResponse = () => {
        /* Add loading animation till answer is generated */
        setGeneratedAnswer(false)
        setTimeout(() => {
            sendInput(AccountInformation[0].message, false)
            // User can now type
            setIsDisabled(false);
            // Stop loading animation for user
            setGeneratedAnswer(true)
        }, 2000);

    }
    //TEMPO

    /* Disable send button and input field
    * Send the user message
    * Empty the input value */
    const handleButtonClick = () => {
        // User can not type
        setIsDisabled(true);
        /*        console.log(inputValue)*/
        // Send user input value
        sendInput(inputValue, true);
        // Set input value to empty
        setInputValue('')
        // Get bot response
        botResponse();
        // Store messages for saving
        storeMessages(inputValue, true);
        storeMessages('AccountInformation[0].message', false);
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
