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
                    {width: '32px', height: '16px'}
                }/>
            </button>
            <Branding imgWidth="24px" imgHeight="32px" imgMarginRight="8px"/>
        </div>
    );
}

export default Navigation;
