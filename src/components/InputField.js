import React, {useState} from "react";

// Import CSS
import './InputField.css';
import './Button.css';

// Import assets
import SendButton from "../assets/Send.png";
import {TradingConditions} from "./misc/BotAnswers";

const InputField = ({sendInput}) => {
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    /* Send user message when "ENTER" is pressed */
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleButtonClick();
        }
    };

    //TEMPO
    const TempoFunction = () => {
        sendInput(TradingConditions[19].message, false)
    }
    //TEMPO

    /* Disable send button and input field
    * Send the user message
    * Empty the input value */
    const handleButtonClick = () => {
        setIsDisabled(true);
        /*        console.log(inputValue)*/
        sendInput(inputValue, true);
        setInputValue('')
        TempoFunction();
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
