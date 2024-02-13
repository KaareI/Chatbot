import React from "react";

// Import CSS
import './Branding.css'

// Import assets
import Logo from '../assets/Tickmill_logo.png'

const Branding = () => {
    return (
        <div className={"Branding"}>
            <img src={Logo} alt="Tickmill Logo" style={
                {width: '24px', height: '32px', marginRight: '8px'}
            }/>
            <h1>TickBot</h1>
        </div>
    );
}

export default Branding;
