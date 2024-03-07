import React from "react";

// Import CSS
import './UserInput.css';

// Import components
import InputField from "./InputField";

const UserInput = ({ sendInput, storeMessages }) => {
    return (
        <div className={"UserInput"}>
            <InputField
                sendInput={sendInput}
                storeMessages={storeMessages}
            />
        </div>
    );
}

export default UserInput;
