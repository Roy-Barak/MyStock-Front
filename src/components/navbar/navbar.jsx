import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './navbar.css';
import Lottie from "lottie-react";
import coinAnimation from "../../assests/animation/coinAnimation.json"
import {FaBars} from "react-icons/fa"

export default function Navbar({user, handleUser}) {
    const [userDropDown, setUserDropDown] = useState(false);
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName")
    const [menuOpen, setMenuOpen] = useState(false);

    function handleUserDropDown(state) {
        setUserDropDown(state);
    }

    function toggleMenu() {
        setMenuOpen(prevState => !prevState)
    }

    function handleLogOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        handleUser(null);
        navigate('/loginAndRegister');
    }

    useEffect(() => {
        handleLinkClick()
    }, [navigate]);

    function handleLinkClick() {
        if (menuOpen) {
            toggleMenu();
        }
    }

    return (
        <nav className={`navbar ${menuOpen ? 'responsive_nav' : ''}`}>

            <button className=" nav-close-btn nav-btn" onClick={toggleMenu}>
                <FaBars/>
            </button>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            {!menuOpen && <div className="navbar-mystock-text">
                <p>
                    -Your personal stock portfolio management tool-
                </p>
            </div>}
            <div className="login">
                {!menuOpen && <div className="navbar-coin-animation">
                    <Lottie animationData={coinAnimation}/>
                </div>}
                {user ? (
                    <div
                        className={`dropDown ${userDropDown ? 'active' : ''}`}
                        onClick={() => handleUserDropDown(!userDropDown)} // Toggle dropdown on click
                        style={!menuOpen && {marginRight: '4rem'}}

                    >
                        {userName}
                        {userDropDown && (
                            <div className="dropdown-content"

                                 onMouseLeave={() => handleUserDropDown(false)}>
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
                    <Link
                        className="login-register-button"
                        to="/loginAndRegister"
                        style={menuOpen ? {} : {marginRight: '4rem'}}
                    >
                        Login / Register
                    </Link>
                )}
            </div>

        </nav>

    );
}
