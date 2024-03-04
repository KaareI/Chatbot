import React from "react";

// Import CSS
import './Chat.css';
import './SavedChats.css'

const SavedChats = () => {
    return (
        <div className={"SavedChats"}>
            <div className={"SavedConversations"}>
                <h2>Saved Conversations</h2>
                <button className={"Button SavedConversation NewChat"}>New Chat</button>
                <button className={"Button SavedConversation"}>December 31, 2024 - 11:59 PM</button>
                <button className={"Button SavedConversation"}>June 30, 2024 - 11:00 AM</button>
                <button className={"Button SavedConversation"}>September 12, 2024 - 2:00 PM</button>
            </div>
        </div>
    );
}

export default SavedChats;
