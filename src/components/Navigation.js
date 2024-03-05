import React from 'react';

// Import CSS
import './Navigation.css';
import './Button.css';

// Import components
import Branding from "./Branding";
import LogoutButton from '../assets/Logout.png'
import SettingsButton from '../assets/Settings.png'
import ChatButton from '../assets/Chat.png'

const Navigation = (props) => {
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
                <img src={LogoutButton} alt="Logout Button" style={{width: '24px', height: '24px'}}/>
            </button>
            <Branding imgWidth="24px" imgHeight="32px" imgMarginRight="8px"/>
            <button className={"Button"} onClick={props.onSettingsToggle}>
                {props.inSettings ? (
                    <img src={ChatButton} alt="Chat Button" style={{width: '24px', height: '24px'}}/>
                ) : (
                    <img src={SettingsButton} alt="Settings Button" style={{width: '24px', height: '24px'}}/>
                )}
            </button>
        </div>
    );
}

export default Navigation;
