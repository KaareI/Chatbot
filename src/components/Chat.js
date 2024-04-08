import React, { useRef, useEffect } from 'react';

// Import CSS
import './Chat.css';
import './ResponseContainer.css';

// Import components
import Greeting from "./Greeting";
import Client from "./Client";

const Chat = ({ messages, generatedAnswer, questions, setRenderQuestion }) => {
    const lastMessageRef = useRef(null);

    const smoothScroll = () => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        // Scroll to the last message when messages change
        smoothScroll()
    }, [messages]);

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

    const handleConformation = (event) => {
        // Get the clicked button element
        const clickedButton = event.target;
        // Change its background color to blue
        clickedButton.style.backgroundColor = "#1277FD";
        // Get the parent element that contains both buttons
        const parentElement = clickedButton.parentElement.parentElement;
        // Disable "Yes" or "No" buttons
        const disableButtons = parentElement.querySelectorAll('.Conformation');
        for (let i = 0; i < disableButtons.length; i++) {
            disableButtons[i].setAttribute("disabled", true);
            disableButtons[i].style.pointerEvents = "none";
        }
        // Replace the appropriate class based on the clicked button
        if (clickedButton.textContent === 'Yes') {
            const additionalAnswers = parentElement.querySelectorAll('.ConversationEnding');
            for (let i = 0; i < additionalAnswers.length; i++) {
                additionalAnswers[i].classList.remove("ConversationEnding");
                additionalAnswers[i].classList.add("ShowConversationEnding");
            }
        } else if (clickedButton.textContent === 'No') {
            const additionalAnswers = parentElement.querySelectorAll('.AddtionalAnswers');
            for (let i = 0; i < additionalAnswers.length; i++) {
                additionalAnswers[i].classList.remove("AddtionalAnswers");
                additionalAnswers[i].classList.add("ShowAddtionalAnswers");
            }
        }
        smoothScroll()
    }

    /* Exclude these ids from having additional questions like "Did this answer help you?"  */
    const excludedIds = [5000, 9997, 9998, 9999];

    return (
        <div className={"Chat"}>
            <div className={"ResponseContainer"}>
                <Greeting />
            </div>
            {messages.map((message, index) => (
                <div key={index} className={"ResponseContainer"} ref={index === messages.length - 1 ? lastMessageRef : null}>
                    {message.userMessage === true || message.userMessage === 1 ? (
                        <Client message={message.message} />
                    ) : (
                        <>
                            {message.message}
                            {/* Condtional rendering of addtional questions when:
                            1) It is last message of messages array
                            2) questions is not empty or false
                            3) question.id is does not include excludedIds
                             */}  
                            {index === messages.length - 1 && questions && questions.slice(0, 3).every(question => !excludedIds.includes(parseInt(question.id, 10))) && (
                                <>
                                    <div className={"Response Bot MarginTop"}>
                                        <i>Did this answer help you?</i>
                                    </div>
                                    <div className={"Bot Flex"}>
                                        <button
                                            id="Yes"
                                            className={"Button Conformation"}
                                            onClick={(event) => {
                                                handleConformation(event);
                                            }}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            id="No"
                                            className={"Button Conformation"}
                                            onClick={(event) => {
                                                handleConformation(event);
                                            }}
                                        >
                                            No
                                        </button>
                                    </div>
                                    <div className={"Response Bot MarginTop AddtionalAnswers"}>
                                        You may find your answer in following:
                                    </div>
                                    <button
                                        className={"Response Bot Button AddtionalAnswers"}
                                        onClick={() => setRenderQuestion(1)}
                                    >
                                        <i>"{questions[1].question}"</i>
                                    </button>
                                    <button
                                        className={"Response Bot Button AddtionalAnswers"}
                                        onClick={() => setRenderQuestion(2)}
                                    >
                                        <i>"{questions[2].question}"</i>
                                    </button>
                                    <button
                                        className={"Response Bot Button AddtionalAnswers"}
                                        onClick={() => setRenderQuestion(3)}
                                    >
                                        <i>"None of these help me"</i>
                                    </button>
                                    <div className={"Response Bot MarginTop ConversationEnding"}>
                                        Fantastic! If you have any more questions feel free to ask.
                                    </div>
                                </>
                            )}
                        </>
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
