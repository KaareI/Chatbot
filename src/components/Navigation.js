import React from "react";
import './Navigation.css';
import './Button.css';
import Branding from "./Branding";
import BackButton from '../assets/Back.png'

const Navigation = () => {
    const handleLogout = () => {
        fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

            /* Handle response from server */
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
    };

    return (
        <div className="Navigation">
            <button className={"Button"} onClick={handleLogout}>
                <img src={BackButton} alt="Back Button" style={{ width: '32px', height: '16px' }} />
            </button>
            <Branding imgWidth="24px" imgHeight="32px" imgMarginRight="8px" />
        </div>
    );
}

export default Navigation;
