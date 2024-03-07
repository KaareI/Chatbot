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

    /* Store messages */
    const [storedMessages, setStoredMessages] = useState([]);
    const handleStoredMessages = (message, userMessage) => {
        setStoredMessages(prevMessages => {
            const newMessage = {
                uniqueId: generateUniqueID(),
                orderId: prevMessages.length + 1,
                userMessage: userMessage,
                message: message,
            };
            return [...prevMessages, newMessage];
        });
    };
    /*    console.log("storedMessages: ", storedMessages)
        console.log("storedMessages type: ", typeof (storedMessages))*/

    /* Option to save conversation */
    const [saveUserMessages, setSaveUserMessages] = useState(true);

    /* Current conversation messages */
    const [messages, setMessages] = useState([]);

    /* Create new message */
    const handleSendMessage = (message, userMessage) => {
        setMessages(prevMessages => {
            /*            console.log("Messages length in ChatWindow component: ", prevMessages.length);*/
            const newMessage = {
                uniqueId: generateUniqueID(),
                orderId: prevMessages.length + 1,
                userMessage: userMessage,
                message: message,
            };
/*            console.log("Message in ChatWindow component: ", message);
            console.log("Message type in ChatWindow component: ", typeof(message));
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
            body: JSON.stringify({storedMessages}),
            credentials: 'same-origin',
        })

            /* Handle response from server */
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error saving messages');
                } else {
                    /* SUCCESSFUL SAVE OF MESSAGES */
                    console.log("Messages saved...")
                }
            })
            /* Handle errors that occur during the fetch request */
            .catch(error => {
                console.error(error)
            });
    };

    // This useEffect will be triggered whenever the storedMessages state changes
    useEffect(() => {
        if (saveUserMessages && storedMessages.length !== 0) {
            // Messages array is not empty and saveUserMessages is true
            saveMessages();
        }
        /*        console.log("Messages: ", messages)
                console.log("Messages type: ", typeof (messages))*/
    }, [storedMessages]);

//TEMPO
    // FOR DESIGNING BOT MESSAGES
/*        useEffect(() => {
            handleSendMessage("Do trading conditions differ on my live and demo account?", true)
            handleSendMessage(AccountInformation[0].message, false)
        }, []);*/
//TEMPO

    /* Logic handles the rendering of settings */
    const [inSettings, setInSettings] = useState(false);
    const handleSettings = () => {
        // Invert the previous state
        setInSettings(
            prevState => !prevState);
    };

    /* Creation of a new chat */
    const handleNewChat = () => {
        /* Empty current chat messages and stored messages for saving */
        setMessages([]);
        setStoredMessages([]);
        /* Save user messages */
        setSaveUserMessages(true)
        /* User is not in settings anymore so rerender chat */
        setInSettings(false);
    }

    useEffect(() => {
/*        console.log("Messages in chat: ", messages);
        console.log("Stored messages for saving: ", storedMessages);
        console.log("Saving user messages: ", saveUserMessages);
        console.log("Rendering settings: ", inSettings);*/
    }, [inSettings]);

    return (
        <div className="ChatWindow">
            <Navigation
                inSettings={inSettings}
                onSettingsToggle={handleSettings}
            />
            {/* Rendering based on if user is in settings or not */}
            {inSettings ? (
                <SavedChats
                    newChat={handleNewChat}
                    loadConversation={handleSendMessage}
                    setInSettings={setInSettings}
                    setSaveUserMessages={setSaveUserMessages}
                    setMessages={setMessages}
                    setStoredMessages={setStoredMessages}
                />
            ) : (
                <>
                    <Chat messages={messages}/>
                    <UserInput
                        sendInput={handleSendMessage}
                        storeMessages={handleStoredMessages}
                    />
                </>
            )}
        </div>
    );
}

export default ChatWindow;
