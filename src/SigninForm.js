import React, { useState } from "react";

const SigninForm = () => {
    const initialState = {
        username: '',
        password: ''
    };

    const [username, setUsername] = useState(initialState.username);
    const [password, setPassword] = useState(initialState.password);

    const handleSignin = (event) => {
        // Check if user is in the database model
        // Check if the hashed passwords match
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className="signin-form">
                <h1>Sign In</h1>
                <form onSubmit={handleSignin}>
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
}