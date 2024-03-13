import React from "react";

// Import CSS
import './UserInput.css';

// Import components
import InputField from "./InputField";

const UserInput = ({ sendInput, storeMessages, setGeneratedAnswer, baseOrderID, messages, setBaseOrderID }) => {
    return (
        <div className={"UserInput"}>
            <InputField
                sendInput={sendInput}
                storeMessages={storeMessages}
                setGeneratedAnswer={setGeneratedAnswer}
                setBaseOrderID={setBaseOrderID}
                baseOrderID={baseOrderID}
                messages={messages}
            />
        </div>
    );
}

export default UserInput;
