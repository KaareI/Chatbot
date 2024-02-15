import React from "react";

// Import CSS
import './Login.css';
import UserBig from "../assets/UserBig.png";
import User from "../assets/User.png";
import Lock from "../assets/Lock.png";

const Login = () => {
    return (
        <div className={"LoginContainer"}>
            <img src={UserBig} alt="User Logo"
                 style={{width: '88px', height: '88px', margin: "0 auto 32px auto"}}
            />
            <div className={"FieldContainer"}>
                <img src={User} alt="User Logo"
                     style={{width: '24px', height: '24px', marginLeft: "16px"}}
                />
                <input type="text" id="loginUser" placeholder="Username" required/>
            </div>
            <div className={"FieldContainer"}>
                <img src={Lock} alt="Lock"
                     style={{width: '28px', height: '24px', marginLeft: "16px"}}
                />
                <input type="password" id="loginPassword" placeholder="Password" required/>
            </div>
            <button className={"Button LoginButton"}>
                <p>Login</p>
            </button>
        </div>
    );
}

export default Login;
