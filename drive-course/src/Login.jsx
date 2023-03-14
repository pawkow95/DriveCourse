import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (

        <div className="auth-form-container">
            <h2>Login</h2>
            <form className = "login-form" onSubmit={handleSubmit} >
                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="Email" id="email" name="email" />

                <label htmlFor="email">Password</label>
                <input value={pass} type="password" placeholder="Password" id="password" name="password" />

                <button type="submit">Log in</button>

                <button className="link-btn" onClick={() => props.onFormSwitch('register')} >Don't have account ? Register here</button>
            </form>
        </div>
    )
}