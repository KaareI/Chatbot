// Import CSS
import './Chat.css';
import './ResponseContainer.css';

// Import components
import Greeting from "./Greeting";
import Client from "./Client";

const Chat = ({messages}) => {

/*    console.log("Messages in Chat component: ", messages)
    console.log("Message 1 message in Chat component: ", messages[0].message)
    console.log("Message 1 Usermessage in Chat component: ", messages[0].userMessage)*/

    if (messages === undefined || messages.length === 0) {
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
            {messages.map((message, index) => (
                <div key={index} className={"ResponseContainer"}>
                    {message.userMessage === true || message.userMessage === 1 ? (
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
