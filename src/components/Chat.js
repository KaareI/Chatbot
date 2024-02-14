import React from "react";

// Import CSS
import './Chat.css';
import './ResponseContainer.css';

// Import components
import Greeting from "./Greeting";
import Client from "./Client";
import Branding from "./Branding";

const Chat = () => {
    return (
        <div className={"Chat"}>
            <div className={"ResponseContainer"}>
                <Greeting></Greeting>
            </div>
            <div className={"ResponseContainer"}>
                <Client></Client>
            </div>
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>We do offer Cash CFDs that allow you to trade with a continuous price that
                    isn’t subject to an expiration date. The Cash CFD price is derived from the underlying futures
                    contracts.</p>
            </div>
            <div className={"ResponseContainer"}>
                <p className={"Addressor"}>You</p>
                <p className={"Response Client"}>Thanks</p>
            </div>
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>We do offer Cash CFDs that allow you to trade with a continuous price that
                    isn’t subject to an expiration date. The Cash CFD price is derived from the underlying futures
                    contracts.</p>
            </div>
        </div>
    );
}

export default Chat;
