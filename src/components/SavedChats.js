import React, {useState, useEffect} from 'react';

// Import CSS
import './SavedChats.css'

const SavedChats = (props) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const createNewChat = () => {
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

    useEffect(() => {
        const retrieveChats = () => {
            fetch("/userChats", {
                method: "GET",
                credentials: 'same-origin',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error retrieving chats');
                    }
                    return response.json();
                })
                .then(Data => {
                    console.log("Chats data:", Data.results);
                    setData(Data.results); // Update the data state with the fetched data
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        retrieveChats(); // Call the fetch function when the component is rendered
    }, []);

    return (
        <div className={"SavedChats"}>
            <div className={"SavedConversations"}>
                <h2>Saved Conversations</h2>
                <button className={`Button SavedConversation NewChat ${error ? 'shake' : ''}`}
                        onClick={createNewChat}>New Chat
                </button>
                {data.map(chat => (
                    <button key={chat.Message_chat_id} className={"Button SavedConversation"} value={chat.Message_chat_id}>
                        {chat.Message_time}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default SavedChats;
