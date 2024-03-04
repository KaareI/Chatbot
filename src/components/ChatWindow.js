import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

// Import CSS
import './ChatWindow.css'

// Import components
import Navigation from "./Navigation";
import Chat from "./Chat";
import UserInput from "./UserInput";
import SavedChats from "./SavedChats";
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
            /*            console.log("Messages length in ChatWindow component: ", prevMessages.length);*/
            const newMessage = {
                uniqueId: generateUniqueID(),
                orderId: prevMessages.length + 1,
                userId: null,
                chatId: 1,
                userMessage: userMessage,
                message: message,
            };
            /*            console.log("Message in ChatWindow component: ", message);
                        console.log("Message is user message?: ", userMessage);*/
            return [...prevMessages, newMessage];
        });
    };

    /* Generate unique id */
    const generateUniqueID = () => {
        const uuid = uuidv4();
        /*    console.log(uuid);*/
        return uuid;
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
                console.error(error)
            });
    };

    useEffect(() => {
        // Messages array is empty
        if (messages.length !== 0) {
            /*            console.log("Messages", messages);*/
            saveMessages()
        }
    }, [messages]); // This useEffect will be triggered whenever the messages state changes

//TEMPO
    /*    useEffect(() => {
            handleSendMessage("Do trading conditions differ on my live and demo account?", true)
            handleSendMessage(AccountInformation[0].message, false)
        }, []);*/
//TEMPO

    /* Logic handles the rendering of settings */
    const [inSettings, setInSettings] = useState(false);
    const handleInSettings = (data) => {
        setInSettings(data);
    };

    return (
        <div className={"ChatWindow"}>
            <Navigation inSettings={handleInSettings}></Navigation>
            {/* Rendering based on if user is in settings or not */}
            {inSettings ? <SavedChats/> : (
                <>
                    <Chat messages={messages}></Chat>
                    <UserInput sendInput={handleSendMessage}></UserInput>
                </>
            )}
        </div>
    )
}

export default ChatWindow;
