import React from "react";
import './Navigation.css';

// Import components
import Button from "./Button";
import Img from "./Img";
import Branding from "./Branding";

// Import PNG
import BackButton from '../assets/Back.png'

const Navigation = () => {
    return (
        <div className="Navigation">
            <Button>
                <Img src={BackButton} alt="Back Button" style={{ width: '40px', height: '24px' }} />
            </Button>
            <Branding></Branding>
        </div>
    );
}

export default Navigation;
