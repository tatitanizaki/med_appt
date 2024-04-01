import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import { API_URL } from '../../config'; // Make sure the API_URL is correct

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use navigate to redirect after successful login

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
    
          const data = await response.json();

          if (data.authtoken) {
            // Store the token and email in sessionStorage
            sessionStorage.setItem("auth-token", data.authtoken);
            sessionStorage.setItem("email", email);
            
            // Redirect to the home page
            navigate('/'); // Assuming you have a route set up for '/'
          } else {
            // Handle errors, such as displaying a message to the user
            alert(data.error || "An error occurred during login.");
          }
        } catch (error) {
          console.error('An unexpected error occurred:', error);
          alert('An error occurred during login.');
        }
      };  

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="emailHelp"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
