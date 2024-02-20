import React, { useState } from "react";

// Import CSS
import './Chat.css';
import './ResponseContainer.css';

// Import components
import Greeting from "./Greeting";
import Client from "./Client";
import Branding from "./Branding";
import BotAnswers from "./misc/BotAnswers";

const Chat = (/*{messages}*/) => {

    const messages = [
        { id: 1, message: "Does Tickmill offer Cash or Future CFDs?" },
        { id: 2, message: (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <p className={"Response Bot"}>We do offer Cash CFDs that allow you to trade with a continuous price that
                        isn’t subject to an expiration date. The Cash CFD price is derived from the underlying futures
                        contracts.</p>
                </div>
            ) },
        { id: 3, message: "Thanks" },
        { id: 4, message: (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <p className={"Response Bot"}>You are welcome!</p>
                </div>
            ) },
    ];

/*    console.log("Messages in Chat: ", messages)*/
    if (messages === undefined) {
        // Return the chat interface with just the greeting
        return (
            <div className={"Chat"}>
                <div className={"ResponseContainer"}>
                    <Greeting />
                </div>
            </div>
        );
    }

    return (
        <div className={"Chat"}>
            <div className={"ResponseContainer"}>
                <Greeting></Greeting>
            </div>
            {messages.map((message) => (
                <div key={message.id} className={"ResponseContainer"}>
                    {message.id % 2 === 1 ? (
                        <Client message={message.message} />
                    ) : (
                        message.message
                    )}
                </div>
            ))}
        </div>
    );
};

export default Chat;
