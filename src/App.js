import React, {useState} from "react";

// Import CSS
import './App.css';

// Import components
import ChatWindow from "./components/ChatWindow";
import Login from "./components/Login";

function App() {
    // State to manage login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Handler function to set login status
    const handleLoginSuccess = (data) => {
        setIsLoggedIn(true); // Set login status to true
    };

    return (
        <div className={"App"}>
            {/* Conditional rendering based on login status */}
            {isLoggedIn ? <ChatWindow/> : <Login onLoginSuccess={handleLoginSuccess}/>}
        </div>
    );
}

export default App;
