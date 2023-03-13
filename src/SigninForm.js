import React, { useState } from "react";
import { validateUser } from "./mockDatabase";

const SigninForm = () => {
    const initialState = {
        username: '',
        password: ''
    };

    const [username, setUsername] = useState(initialState.username);
    const [password, setPassword] = useState(initialState.password);

    const handleSignin = (event) => {
        event.preventDefault();
        const response = validateUser({username: username, password: password});
        console.log(response.message);
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
                    <button type="submit">Sign In</button>
                </form>
            </div>
    )
}

export default SigninForm;