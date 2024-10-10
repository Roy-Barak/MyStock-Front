import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export default function Navbar({ user, handleUser }) {
    const [userDropDown, setUserDropDown] = useState(false);
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName")
    function handleUserDropDown(state) {
        setUserDropDown(state);
    }

    function handleLogOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        handleUser(null);
        navigate('/loginAndRegister');
    }

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="login">
                {user ? (
                    <div
                        className={`dropDown ${userDropDown ? 'active' : ''}`}
                        onClick={() => handleUserDropDown(!userDropDown)} // Toggle dropdown on click

                    >
                        {userName}
                        {userDropDown && (
                            <div className="dropdown-content"

                                 onMouseLeave={()=>handleUserDropDown(false)}>
                                <ul>
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li>
                                        <button className="dropDown-button" onClick={handleLogOut}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link className="login-register-button" to="/loginAndRegister">Login / Register</Link>
                )}
            </div>
        </nav>
    );
}
