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
                        setSaveUserMessages,
                        newChat,
                        setMessages,
                        setStoredMessages,
                        setPreviousChat,
                        setBaseOrderID
                    }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [errorButtonId, setErrorButtonId] = useState(null);
    const [loading, setLoading] = useState(true);

    const resolveMessage = (message) => {

        // Split the message string to extract the module name and index
        const [moduleName, index] = message.split('[');

        // If the message format is incorrect
        if (!moduleName || !index) return "Invalid bot message";

        // Extract the index value by removing ']' and converting to a number
        const messageIndex = parseInt(index.slice(0, -1), 10);

        // Dynamically access the module by name
        const module = modules[moduleName];

        // Return the message from the module if the index is valid
        return module[messageIndex] ? module[messageIndex].message : "Invalid bot message";
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
                setErrorButtonId('newChatButton');
                setTimeout(() => {
                    setError('');
                    setErrorButtonId(null);
                }, 1500);
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
                    /*                    console.log("Chats data:", Data);*/
                    setTimeout(() => {
                        setData(Data);
                        // Remove loading div for user
                        setLoading(false);
                    }, 500);

                })
                .catch(error => {
                    console.error('Error:', error);
                    setError('Error retrieving user chats');
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
                /*                console.log('Previous chat', results);*/
                // Resolve bot messages
                const resolvedMessages = results.map(result => ({
                    ...result,
                    // If message is not bot message, then resolve the message
                    message: result.userMessage === 0 || result.userMessage === false
                        ? resolveMessage(result.message)
                        : result.message
                }));

                /* Set previous conversation messages for rendering */
                setMessages(resolvedMessages);
                /* Empty current stored messages for saving */
                setStoredMessages([]);
                // Save user messages after chat is rendered
                setSaveUserMessages(true);
                // Set the state of previousChat to true for stored messages orderId handling
                setPreviousChat(true)
                // Set the starting order id for the first message being sent
                setBaseOrderID(resolvedMessages.length + 1)
                // Switch user view
                setInSettings(false)
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Error loading previous chat data');
                setErrorButtonId(chatID); // Set the button ID causing the error
                setTimeout(() => {
                    setError('');
                    setErrorButtonId(null);
                }, 1500);
            });
    }

    return (
        <div className={"SavedChats"}>
            <div className={"SavedConversations"}>
                <h2>Saved Conversations</h2>
                <button
                    id="newChatButton" // Assign an ID for the new chat button
                    className={`Button SavedConversation NewChat ${errorButtonId === 'newChatButton' ? 'shake' : ''}`}
                    onClick={createNewChat}
                >
                    New Chat
                </button>
                {error && <h3 className={"BigError SavedConversation"}>{error}</h3>}
                {!error && loading && <h3 className={"SavedConversation"}>Loading chats...</h3>}
                {data.map(chat => (
                    <button
                        key={chat.chatId}
                        className={`Button SavedConversation ${errorButtonId === chat.chatId ? 'shake' : ''}`}
                        onClick={() => loadChat(chat.chatId)}
                    >
                        <strong>{chat.time}</strong> - <i>"{chat.message}..."</i>
                    </button>
                ))}
            </div>
        </div>
    );
}
export default SavedChats;
