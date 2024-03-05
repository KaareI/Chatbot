import React, {useState} from "react";

// Import CSS
import './Chat.css';
import './SavedChats.css'

const SavedChats = (props) => {

    const [error, setError] = useState('');
    const createNewChat = () =>{
        fetch("/generateChat", {
            method: "POST",
            credentials: 'same-origin',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error generating new chat');
                } else {
                    console.log("New conversation generated");
                    // Rerender chat
                    props.inSettings(false)
                }
            })
            .catch(error => {
                console.error(error)
                setError('User not logged in?');
                setTimeout(() => setError(''), 1500);
            });
    }

    return (
        <div className={"SavedChats"}>
            <div className={"SavedConversations"}>
                <h2>Saved Conversations</h2>
                <button className={`Button SavedConversation NewChat ${error ? 'shake' : ''}`} onClick={createNewChat}>New Chat</button>
                <button className={"Button SavedConversation"}>December 31, 2024 - 11:59 PM</button>
                <button className={"Button SavedConversation"}>June 30, 2024 - 11:00 AM</button>
                <button className={"Button SavedConversation"}>September 12, 2024 - 2:00 PM</button>
            </div>
        </div>
    );
}

export default SavedChats;
