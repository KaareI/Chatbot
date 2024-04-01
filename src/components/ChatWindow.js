import React, {useState, useEffect} from 'react';

// Import CSS
import './ChatWindow.css'

// Import components
import Navigation from "./Navigation";
import Chat from "./Chat";
import UserInput from "./UserInput";
import SavedChats from "./SavedChats";
import {
    BotResponse
} from './misc/BotAnswers';

const ChatWindow = () => {

    /* Current conversation messages */
    const [messages, setMessages] = useState([]);

    /* State of bot generating answer */
    const [generatedAnswer, setGeneratedAnswer] = useState(false);

    const [previousChat, setPreviousChat] = useState(false);

    /* Store messages */
    const [storedMessages, setStoredMessages] = useState([]);
    const handleStoredMessages = (message, userMessage) => {
        setStoredMessages(prevMessages => {
            /* Order id of a message in chat AKA position */
            let newOrderId;
            newOrderId = prevMessages.length + messages.length + 1;

            /* If user is loading previous chat */
/*            if (previousChat) {
                newOrderId = prevMessages.length + messages.length + 1;
            } else {
                newOrderId = prevMessages.length + 1;
            }*/

            const newMessage = {
                orderId: newOrderId,
                userMessage: userMessage,
                message: message,
            };

            return [...prevMessages, newMessage];
        });
    };

    /* Option to save conversation */
    const [saveUserMessages, setSaveUserMessages] = useState(true);

    /* Create new message */
    const handleSendMessage = (message, userMessage) => {
        setMessages(prevMessages => {
            /*            console.log("Messages length in ChatWindow component: ", prevMessages.length);*/
            const newMessage = {
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

    /* Save last message to database */
    const saveMessages = () => {
        console.log("Messages before saving:", messages)
        console.log("Stored messages before saving: ", storedMessages);

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
                    setStoredMessages([]);
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
    /*    // FOR DESIGNING BOT MESSAGES
                useEffect(() => {
                    handleSendMessage("Do trading conditions differ on my live and demo account?", true)
                    handleSendMessage(BotResponse[2].message, false)
                }, []);*/
//TEMPO

    /* TradingConditions[11].message */
    /* TradingConditions[16].message */

    /* Logic handles the rendering of settings */
    const [inSettings, setInSettings] = useState(false);
    const handleSettings = () => {
        // Invert the previous state
        setInSettings(prevState => !prevState);
    };

    /* Creation of a new chat */
    const handleNewChat = () => {
        /* Empty current chat messages and stored messages for saving */
        setMessages([]);
        setStoredMessages([]);
        /* Save user messages */
        setSaveUserMessages(true)
        // Set the state of previousChat to false for stored messages orderId handling
        setPreviousChat(false)
        /* User is not in settings anymore so rerender chat */
        setInSettings(false);
    }

/*    useEffect(() => {
         console.log("Messages in chat: ", messages);
                console.log("Stored messages for saving: ", storedMessages);
                console.log("Saving user messages: ", saveUserMessages);
                console.log("Rendering settings: ", inSettings);
                console.log("Rendering previous chat: ", previousChat);
        console.log("");
    }, [inSettings]);*/

    return (
        <div className="ChatWindow" id="ChatWindowID">
            <Navigation
                inSettings={inSettings}
                onSettingsToggle={handleSettings}
            />
            {/* Rendering based on if user is in settings or not */}
            {inSettings ? (
                <>
                    <SavedChats
                        newChat={handleNewChat}
                        setInSettings={setInSettings}
                        setSaveUserMessages={setSaveUserMessages}
                        setMessages={setMessages}
                        setStoredMessages={setStoredMessages}
                        setPreviousChat={setPreviousChat}
                        setGeneratedAnswer={setGeneratedAnswer}
                    />
                    <p className={"Disclaimer UserInput"}><strong>Disclaimer:</strong> Your conversations are saved for
                        30 days for quality assurance. After this period,
                        they are permanently deleted.</p>
                </>
            ) : (
                <>
                    <Chat messages={messages}
                          generatedAnswer={generatedAnswer}
                    />
                    <UserInput
                        sendInput={handleSendMessage}
                        storeMessages={handleStoredMessages}
                        setGeneratedAnswer={setGeneratedAnswer}
                    />
                </>
            )}
        </div>
    );
}

export default ChatWindow;
