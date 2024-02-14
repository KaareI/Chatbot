import React from "react";

// Import CSS
import './Branding.css';

// Import assets
import Logo from '../assets/Tickmill_logo.png';

const Branding = (props) => {
    const {imgWidth, imgHeight, imgMarginRight, sizeSmall} = props;

    // Determine which branding class to apply based on the sizeSmall prop
    const h1ClassName = sizeSmall ? "BrandingSmall" : "BrandingBig";

    return (
        <div className="Branding">
            <img
                src={Logo}
                alt="Tickmill Logo"
                style={{width: imgWidth, height: imgHeight, marginRight: imgMarginRight}}
            />
            <h1 className={h1ClassName}>TickBot</h1>
        </div>
    );
}

export default Branding;
