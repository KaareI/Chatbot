import React from "react";

// Import CSS
import './Client.css';

const Client = ({ message }) => {
    return (
        <>
            <p className={"Addressor"}>You</p>
            <p className={"Response Client"}>{message}</p>
        </>
    );
}

export default Client;
