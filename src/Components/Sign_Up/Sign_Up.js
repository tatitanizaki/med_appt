import React, { useState } from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            // Successful registration logic
        } else {
            // Handle errors. If json.errors is an array, map over it to get messages.
            const errorMessages = json.errors 
                ? json.errors.map(err => err.msg).join(", ") // Join all error messages into one string
                : json.error 
                    ? json.error.toString() // Convert a single error message to string if it's not one already
                    : "An unknown error occurred"; // Fallback error message
            setShowerr(errorMessages);
        }
        
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        {/* Name field */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="form-control" 
                                placeholder="Enter your name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Email field */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="form-control" 
                                placeholder="Enter your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Phone field */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                className="form-control" 
                                placeholder="Enter your phone" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        {/* Password field */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="form-control" 
                                placeholder="Enter your password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {showerr && <div className="err" style={{ color: 'red' }}>{showerr.msg || showerr}</div>}

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up;
