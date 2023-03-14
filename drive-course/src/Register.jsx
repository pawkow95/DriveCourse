import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className = "register-form" onSubmit={handleSubmit} >
                <label htmlFor="name">Full name</label>
                <input value={name} placeholder="Full name" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="Email" id="email" name="email" />

                <label htmlFor="email">Password</label>
                <input value={pass} type="password" placeholder="Password" id="password" name="password" />

                <button type="submit">Register</button>

                <button className="link-btn" onClick={() => props.onFormSwitch('login')} >Already have account ? Login here</button>
            </form>
        </div>
    )
}