import React, { useState } from "react";
import hashPassword from "./scripts/hashPassword";
import checkUserExists from "./requests/checkUserExists";
import postUser from "./requests/postUser";

const SignupForm = () => {
    const initialState = {
        username: '',
        password: ''
    };

    const [username, setUsername] = useState(initialState.username);
    const [password, setPassword] = useState(initialState.password);

    const handleSignup = async (event) => {
        event.preventDefault();
        const response = await checkUserExists(username);
        console.log(response);
        if (response.success && response.user) {
            console.log('User already exists.')
        } else if (response.success && !response.user) {
            const postResponse = await postUser({
                username: username,
                email: 'example@gmail.com',
                password: hashPassword(password)});
            console.log(postResponse);
        } else {
            console.log(response.message);
        }
        // Check if the username already exists - return error if it does
        // Otherwise, make a post request to the API
        // Return a success or error message depending on the response
        // addUser({username: username, password: hashPassword(password)});
        // console.log(users);
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