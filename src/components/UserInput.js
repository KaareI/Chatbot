import React from "react";

// Import CSS
import './UserInput.css';

// Import components
import InputField from "./InputField";
const UserInput = ({ sendInput, storeMessages, setGeneratedAnswer, setQuestions}) => {
    return (
        <div className={"UserInput"}>
            <InputField
                setQuestions={setQuestions}
                sendInput={sendInput}
                storeMessages={storeMessages}
                setGeneratedAnswer={setGeneratedAnswer}
            />
        </div>
    );
}

export default UserInput;
