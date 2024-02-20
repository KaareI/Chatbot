import React, {useState} from "react";

// Import CSS
import './InputField.css';
import './Button.css';

// Import assets
import SendButton from "../assets/Send.png";

const InputField = ({sendInput}) => {
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        setIsDisabled(true);
        /*        console.log(inputValue)*/
        sendInput(inputValue);
        setInputValue('')
    };

    return (
        <div className={"InputField"}>

            <input
                type="text"
                placeholder="Ask a question..."
                value={inputValue}
                onChange={handleInputChange}
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
