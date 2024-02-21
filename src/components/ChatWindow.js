import React, { useState, useEffect } from 'react';

// Import CSS
import './ChatWindow.css'

// Import components
import Navigation from "./Navigation";
import Chat from "./Chat";
import UserInput from "./UserInput";
import AccountInformation from "./misc/BotAnswers";

const ChatWindow = () => {

    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages(prevMessages => {
/*            console.log("Messages length in ChatWindow function: ", prevMessages.length);*/
            const newMessage = {
                id: prevMessages.length + 1,
                userId: 1, // You can assign a user ID here
                message: message,
            };
/*            console.log("Message in ChatWindow function: ", message);*/
            return [...prevMessages, newMessage];
        });
    };

//TEMPO
    useEffect(() => {
        handleSendMessage("Are trading conditions the same on my demo and live account?")
        handleSendMessage(AccountInformation[12].message)
    }, []);
//TEMPO


    return (
        <div className={"ChatWindow"}>
            <Navigation></Navigation>
            <Chat messages={messages}></Chat>
            <UserInput sendInput={handleSendMessage}></UserInput>
        </div>
    )
}

export default ChatWindow;
