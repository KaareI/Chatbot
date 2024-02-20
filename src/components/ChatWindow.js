import React, {useState} from "react";

// Import CSS
import './ChatWindow.css'

// Import components
import Navigation from "./Navigation";
import Chat from "./Chat";
import UserInput from "./UserInput";

const ChatWindow = () => {

    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
/*        console.log("Message in ChatWindow function: ", message)*/
        const newMessage = {
            id: messages.length + 1,
            userId: 1, // You can assign a user ID here
            message: message
        };
        setMessages([...messages, newMessage]);
    };
/*    console.log("Messages in ChatWindow: ", messages)*/

    return (
        <div className={"ChatWindow"}>
            <Navigation></Navigation>
            <Chat messages={messages}></Chat>
            <UserInput sendInput={handleSendMessage}></UserInput>
        </div>
    )
}

export default ChatWindow;
