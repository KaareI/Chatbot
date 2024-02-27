import React, {useState, useEffect} from 'react';

// Import CSS
import './ChatWindow.css'

// Import components
import Navigation from "./Navigation";
import Chat from "./Chat";
import UserInput from "./UserInput";
import {
    AccountInformation,
    DepositsAndWithdrawals,
    ProductInterventionMeasures,
    TradingConditions
} from './misc/BotAnswers';

const ChatWindow = () => {

    const [messages, setMessages] = useState([]);

    /* Create new message */
    const handleSendMessage = (message, userMessage) => {
        setMessages(prevMessages => {
            /*            console.log("Messages length in ChatWindow function: ", prevMessages.length);*/
            const newMessage = {
                orderId: prevMessages.length + 1,
                userId: null,
                chatId: 1,
                userMessage: userMessage,
                message: message,
            };
            /*            console.log("Message in ChatWindow function: ", message);*/
            return [...prevMessages, newMessage];
        });
    };

    /* Save last message to database */
    const saveMessages = () => {
        /*        console.log("Messages before saving:", messages)*/
        /* Make a request to server with messages */
        fetch("/saveMessages", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({messages}),
            credentials: 'same-origin',
        })

            /* Handle response from server */
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error saving messages');
                } else {
                    /* SUCCESSFUL SAVE OF MESSAGES */
                    console.log("Messages saved")
                }
            })
            /* Handle errors that occur during the fetch request */
            .catch(error => {
                console.log("error: ", error)
            });
    };

//TEMPO
    useEffect(() => {
        /*        console.log("Messages", messages);*/
        saveMessages()
    }, [messages]); // This useEffect will be triggered whenever the messages state changes
//TEMPO

//TEMPO
    useEffect(() => {
        handleSendMessage("Do trading conditions differ on my live and demo account?", true)
        handleSendMessage(AccountInformation[0].message, false)
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
