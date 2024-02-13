import React from "react";

// Import CSS
import './ChatWindow.css'

// Import components
import Navigation from "./Navigation";
import Chat from "./Chat";
import UserInput from "./UserInput";

const ChatWindow = () => {
    return (
        <div className={"ChatWindow"}>
            <Navigation></Navigation>
            <Chat></Chat>
            <UserInput></UserInput>
        </div>
    )
}

export default ChatWindow;
