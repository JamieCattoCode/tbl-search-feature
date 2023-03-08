import React, { useState } from "react";
import hashPassword from "./scripts/hashPassword";
import users from "./mockDatabase";

const SignupForm = () => {
    const initialState = {
        username: '',
        password: ''
    };

    const [username, setUsername] = useState(initialState.username);
    const [password, setPassword] = useState(initialState.password);

    const handleSignup = (event) => {
        event.preventDefault();
        users.push({username: username, password: hashPassword(password)});
        console.log(users);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className="signup-form">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <label htmlFor="username">Username</label>
                <div>
                    <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <label htmlFor="password">Password</label>
                <div>
                    <input type="text" id="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default SignupForm;