import React from "react";

// Import CSS
import './UserInput.css';

// Import components
import InputField from "./InputField";

const UserInput = ({ sendInput }) => {
    return (
        <div className={"UserInput"}>
            <InputField sendInput={sendInput} />
        </div>
    );
}

export default UserInput;
