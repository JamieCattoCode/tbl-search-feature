import React, { useState } from "react";
import hashPassword from "./scripts/hashPassword";

const PasswordHasher = () => {
    const [password, setPassword] = useState('');

    const handleSetPassword = (event) => {
        const hashedPassword = hashPassword(event.target.value);
        setPassword(hashedPassword);
    }

    return (
        <div className="password-hasher">
            <input 
            type="text"
            onChange={handleSetPassword} />
            <div>Hashed: {password}</div>
        </div>
    )
};

export default PasswordHasher;