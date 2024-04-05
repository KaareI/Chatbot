import React from "react";

// Import CSS
import './UserInput.css';

// Import components
import InputField from "./InputField";
const UserInput = ({ sendInput, storeMessages, setGeneratedAnswer, setQuestions, questions, renderQuestion, setRenderQuestion}) => {
    return (
        <div className={"UserInput"}>
            <InputField
                setQuestions={setQuestions}
                sendInput={sendInput}
                storeMessages={storeMessages}
                setGeneratedAnswer={setGeneratedAnswer}
                setRenderQuestion={setRenderQuestion}
                renderQuestion={renderQuestion}
                questions={questions}
            />
        </div>
    );
}

export default UserInput;
