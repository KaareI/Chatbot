import React, {useState} from "react";

// Import CSS
import './Login.css';
import UserBig from "../assets/UserBig.png";
import User from "../assets/User.png";
import Lock from "../assets/Lock.png";

const Login = (props) => {
    // State to store the username and password values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle login button click
    const handleLogin = () => {
        checkCredentials(username, password);
    };

    /* Send user message when "ENTER" is pressed */
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            checkCredentials("test", "test")
/*             handleLogin(); */
        }
    };


    // Function to send credentials to the server
    const checkCredentials = (username, password) => {
        /* Make a request to server with credentials */
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
            credentials: 'same-origin',
        })

            /* Handle response from server */
            .then(response => {
                if (!response.ok) {
                    throw new Error('Invalid credentials');
                }
                // Handle successful response
                return response.json();
            })

            /* SUCCESSFUL LOGIN */
            .then(data => {
                // Call the onLoginSuccess function received from props
                // This will trigger the state update in the parent component (App)
                // and render the ChatWindow component
                props.onLoginSuccess(data);
            })

            /* Handle errors that occur during the fetch request */
            .catch(error => {
                setError('Invalid credentials');
                setTimeout(() => setError(''), 1500);
            });
    };

    return (
        <div className={"LoginContainer"}>
            <img src={UserBig} alt="User Logo"
                 style={{width: '88px', height: '88px', margin: "0 auto 32px auto"}}
            />
            <div className={`FieldContainer ${error ? 'shake' : ''}`}>
                <img src={User} alt="User Logo"
                     style={{width: '24px', height: '24px', marginLeft: "16px"}}
                />
                <input type="text" id="loginUser" placeholder="Username" required onKeyDown={handleKeyPress}
                       value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className={`FieldContainer ${error ? 'shake' : ''}`}>
                <img src={Lock} alt="Lock"
                     style={{width: '28px', height: '24px', marginLeft: "16px"}}
                />
                <input type="password" id="loginPassword" placeholder="Password" required onKeyDown={handleKeyPress}
                       value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className={"Button LoginButton"} id="loginButton" onClick={handleLogin}>
                <p>Login</p>
            </button>
        </div>
    );
}

export default Login;
