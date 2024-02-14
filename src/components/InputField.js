import React from "react";

// Import CSS
import './InputField.css';
import './Button.css';

// Import assets
import SendButton from "../assets/Send.png";

const InputField = () => {
    return (
        <div className={"InputField"}>

            <input
                type="text"
                placeholder="Ask a question..."
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

            <button className={"Button"} style={{margin: "auto"}}>
                <img src={SendButton} alt="Back Button"
                     style={{width: '24px', height: '16px', margin: "auto"}}
                />
            </button>

        </div>
    );
}

export default InputField;
