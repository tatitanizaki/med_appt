import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    // Hook for navigation
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);

    // Check login status on component mount
    useEffect(() => {
        const token = sessionStorage.getItem('auth-token');
        const name = sessionStorage.getItem('userName'); // Assuming you store the user name in sessionStorage
        if (token) {
            setIsLoggedIn(true);
            setUserName(name);
        }
    }, []);

    // Function to handle logout
    const handleLogout = () => {
        sessionStorage.clear(); // Clears the sessionStorage including the auth-token
        setIsLoggedIn(false); // Update state to reflect logged-out status
        navigate('/login'); // Redirect to the login page
    };

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">StayHealthy <i className="fa fa-user-md" style={{color:'#2190FF'}}></i></Link>
            </div>
            <div className="nav__icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            
            <ul className={click ? 'nav__links active' : 'nav__links'}>
                <li className="link"><Link to="/">Home</Link></li>
                <li className="link"><Link to="/search/doctors">Appointments</Link></li>
                <li className="link"><Link to="/healthblog">Health Blog</Link></li>
                <li className="link"><Link to="/reviews">Reviews</Link></li>
                
                {isLoggedIn ? (
                    <>
                        <li className="link" style={{ marginRight: '10px' }}>{userName}</li>
                        <li className="link"><button onClick={handleLogout} className="btn btn-primary">Logout</button></li>
                    </>
                ) : (
                    <>
                        <li className="link"><Link to="/signup">Sign Up</Link></li>
                        <li className="link"><Link to="/login">Login</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;