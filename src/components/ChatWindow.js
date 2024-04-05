import React, { useState, useEffect } from 'react';

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

    const [renderQuestion, setRenderQuestion] = useState(0);

    /* Current additional questions */
    const [questions, setQuestions] = useState();

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
            const newMessage = {
                orderId: prevMessages.length + 1,
                userMessage: userMessage,
                message: message,
            };
            return [...prevMessages, newMessage];
        });
    };

    /* Save last message to database */
    const saveMessages = () => {
        /* Make a request to server with messages */
        fetch("/saveMessages", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ storedMessages }),
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
    }, [storedMessages]);

    //TEMPO
    // FOR DESIGNING BOT MESSAGES
    /*                 useEffect(() => {
                        handleSendMessage("Do trading conditions differ on my live and demo account?", true)
                        handleSendMessage(BotResponse[0].message, false)
                    }, []); */
    //TEMPO

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
                    <Chat
                        messages={messages}
                        generatedAnswer={generatedAnswer}
                        questions={questions}
                        setRenderQuestion={setRenderQuestion}
                    />
                    <UserInput
                        setQuestions={setQuestions}
                        questions={questions}
                        sendInput={handleSendMessage}
                        storeMessages={handleStoredMessages}
                        setGeneratedAnswer={setGeneratedAnswer}
                        setRenderQuestion={setRenderQuestion}
                        renderQuestion={renderQuestion}
                    />
                </>
            )}
        </div>
    );
}

export default ChatWindow;
