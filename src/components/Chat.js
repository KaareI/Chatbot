// Import CSS
import './Chat.css';
import './ResponseContainer.css';

// Import components
import Greeting from "./Greeting";
import Client from "./Client";

const Chat = ({messages}) => {

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
