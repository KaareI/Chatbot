import React from "react";
import './Branding.css'

import Logo from '../assets/Tickmill_logo.png'
import Img from "./Img";

const Branding = () => {
    return (
        <div className={"Branding"}>
            <Img src={Logo} alt="Tickmill Logo" style={{ width: '32px', height: '40px', margin: 'auto 8px auto 0' }}/>
            <h1>TickBot</h1>
        </div>
    );
}

export default Branding;
