import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate(); // For navigation after logout

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // Assume doctorData and reviewFormData are part of your application state
        localStorage.removeItem("doctorData");
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
        setIsLoggedIn(false);
        navigate('/'); // Redirect to homepage after logout
    };

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) {
            setIsLoggedIn(true);
            setUsername(storedEmail.split('@')[0]); // Extract username from email
        }
    }, []);

    return (
        <nav>
            {/* Your nav code remains the same */}
            <div className="nav__logo">
                <Link to="/">
                    StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
                </Link>
                <span>.</span>
            </div>
            <div className="nav__icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={click ? 'nav__links active' : 'nav__links'}>
                <li className="link">
                    <Link to="/">Home</Link>
                </li>
                {/* other links if any */}
                {isLoggedIn ? (
                <>
                    <li className="link">
                        Welcome, {username} {/* Display username */}
                    </li>
                    <li className="link">
                        <button className="btn2" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </>
            ) : (
                    <>
                        <li className="link">
                            <Link to="/signup">
                                <button className="btn1">Sign Up</button>
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/login">
                                <button className="btn1">Login</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
