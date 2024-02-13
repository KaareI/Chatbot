import React from "react";

// Import CSS
import './UserInput.css';

// Import components
import InputField from "./InputField";

const UserInput = () => {
    return (
        <div className={"UserInput"}>
            <InputField></InputField>
        </div>
    );
}

export default UserInput;
