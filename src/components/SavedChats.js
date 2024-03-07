import React, {useState, useEffect} from 'react';

// Import CSS
import './SavedChats.css'
import {
    AccountInformation,
    DepositsAndWithdrawals,
    ProductInterventionMeasures,
    TradingConditions
} from './misc/BotAnswers';

const SavedChats = ({
                        setInSettings,
                        loadConversation,
                        setSaveUserMessages,
                        newChat,
                        setMessages,
                        setStoredMessages
                    }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const resolveMessage = (message) => {
        // Split the message string to extract the module name and index
        const [moduleName, index] = message.split('[');
        if (!moduleName || !index) return message; // If the message format is incorrect, return as is

        // Extract the index value by removing ']' and converting to a number
        const messageIndex = parseInt(index.slice(0, -1), 10);

        // Dynamically access the module by name
        const module = modules[moduleName];
        if (!module || !Array.isArray(module)) return message; // If the module doesn't exist or not an array, return as is

        // Return the message from the module if the index is valid, otherwise return the original message
        return module[messageIndex] ? module[messageIndex].message : message;
    };

// Define a mapping of module names to the actual modules
    const modules = {
        AccountInformation,
        DepositsAndWithdrawals,
        ProductInterventionMeasures,
        TradingConditions
    };

    const createNewChat = () => {
        fetch("/generateChat", {
            method: "POST",
            credentials: 'same-origin',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error generating new chat');
                } else {
                    console.log("New conversation generated...");
                    // Rerender chat
                    newChat();
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
                    /*
                                                            console.log("Chats data:", Data);
                    */
                    setData(Data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        retrieveChats(); // Call the fetch function when the component is rendered
    }, []);

    const loadChat = (chatID) => {
        console.log("Loading previous chat...")
        setSaveUserMessages(false);
        /*        console.log("Chat id: ", chatID)*/
        fetch(`/previousChat?chatId=${chatID}`, {
            method: 'GET',
            credentials: 'same-origin',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error loading previous chat data');
                }
                return response.json();
            })
            .then(results => {
/*                console.log('Previous chat', results);
                console.log('Previous chat data type: ', typeof (results));*/

                // Resolve messages before setting them
                const resolvedMessages = results.map(result => ({
                    ...result,
                    message: result.userMessage === 0 || result.userMessage === false
                        ? resolveMessage(result.message)
                        : result.message
                }));
                setMessages(resolvedMessages);

                /* Empty current stored messages for saving */
                setStoredMessages([]);
                // Save user messages after chat is rendered
                setSaveUserMessages(true);
                // Switch user view
                setInSettings(false)
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Error loading previous chat data');
                setTimeout(() => setError(''), 1500);
            });
    }

    return (
        <div className={"SavedChats"}>
            <div className={"SavedConversations"}>
                <h2>Saved Conversations</h2>
                <button className={`Button SavedConversation NewChat ${error ? 'shake' : ''}`}
                        onClick={createNewChat}>New Chat
                </button>
                {data.map(chat => (
                    <button
                        key={chat.chatId}
                        className={`Button SavedConversation ${error ? 'shake' : ''}`}
                        onClick={() => loadChat(chat.chatId)}
                    >
                        {chat.time}
                    </button>
                ))}

            </div>
        </div>
    );
}
export default SavedChats;
