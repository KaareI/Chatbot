import React, { useRef, useEffect } from 'react';

// Import CSS
import './Chat.css';
import './ResponseContainer.css';

// Import components
import Greeting from "./Greeting";
import Client from "./Client";

const Chat = ({messages, generatedAnswer}) => {
    const lastMessageRef = useRef(null);

    useEffect(() => {
        // Scroll to the last message when messages change
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    if (messages === undefined || messages.length === 0) {
        // Return the chat interface with just the greeting
        return (
            <div className={"Chat"}>
                <div className={"ResponseContainer"}>
                    <Greeting/>
                </div>
            </div>
        );
    }

    return (
        <div className={"Chat"}>
            <div className={"ResponseContainer"}>
                <Greeting />
            </div>
            {messages.map((message, index) => (
                <div key={index} className={"ResponseContainer"} ref={index === messages.length - 1 ? lastMessageRef : null}>
                    {message.userMessage === true || message.userMessage === 1 ? (
                        <Client message={message.message}/>
                    ) : (
                        message.message
                    )}
                </div>
            ))}
            {!generatedAnswer && (
                <div className={"ResponseContainer"}>
                    <div className={"Response Bot"} style={{ overflowX: "hidden" }}>
                        <div className={"loader"}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
