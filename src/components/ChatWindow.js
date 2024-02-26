import React, { useState, useEffect } from 'react';

// Import CSS
import './ChatWindow.css'

// Import components
import Navigation from "./Navigation";
import Chat from "./Chat";
import UserInput from "./UserInput";
import { AccountInformation, DepositsAndWithdrawals, ProductInterventionMeasures, TradingConditions } from './misc/BotAnswers';

const ChatWindow = () => {

    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message, userMessage) => {
        setMessages(prevMessages => {
/*            console.log("Messages length in ChatWindow function: ", prevMessages.length);*/
            const newMessage = {
                id: prevMessages.length + 1,
                userId: 1,
                userMessage:userMessage,
                message: message,
            };
/*            console.log("Message in ChatWindow function: ", message);*/
            return [...prevMessages, newMessage];
        });
    };

//TEMPO
    useEffect(() => {
        handleSendMessage("Do trading conditions differ on my live and demo account?", true)
        handleSendMessage(TradingConditions[28].message, false)
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
