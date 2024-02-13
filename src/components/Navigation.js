import React from "react";

// Import CSS
import './Navigation.css';
import './Button.css';

// Import components
import Branding from "./Branding";

// Import PNG
import BackButton from '../assets/Back.png'

const Navigation = () => {
    return (
        <div className="Navigation">
            <button className={"Button"}>
                <img src={BackButton} alt="Back Button" style={
                    {width: '40px', height: '24px'}
                }/>
            </button>
            <Branding></Branding>
        </div>
    );
}

export default Navigation;
