import React from "react";

// Import CSS
import './ResponseContainer.css';
import './Greeting.css'

// Import components
import Branding from "./Branding";

const Greeting = () => {
    return (
        <>
            <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
            <p className={"Response Bot"}>👋 Hi there! I'm an AI assistant ready to tackle your questions about:</p>
            <div className={"Response Bot"}>
                <ul>
                    <li>Account information</li>
                    <li>Deposits and withdrawals</li>
                    <li>Product Intervention Measures</li>
                    <li>Trading conditions</li>
                </ul>
            </div>
        </>
    );
}

export default Greeting;
