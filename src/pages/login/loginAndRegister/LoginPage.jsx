// src/components/LoginPage.js
import React, {useState} from 'react';
import './LoginPage.css';
import StockWelcomeImage from "../../../assests/images/StockWelcome.png";
import {useNavigate} from "react-router-dom";
import loginLoading from "../../../assests/animation/walletLoading.json"
import Lottie from "lottie-react";

export default function LoginPage({handleSwitch, handleUser}) {
    const [userInput, setUserInput] = useState({
        "email": '',
        "password": ''
    });
    const [noExitingUser, setNoExitingUser] = useState(false);
    const [scaleMessage, setScaleMessage] = useState(false);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    function handleUserInput(identifier, value) {
        setUserInput((prevValues) => ({
            ...prevValues, [identifier]: value
        }));

    }

    async function handleLogIn(userInput) {
        setLoading(true);
        // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        // // Wait for 3 seconds
        // await delay(3000); // Wait for 3 seconds
        try {
            const response = await fetch("http://127.0.0.1:5000/user-login", {
                method: 'POST',
                body: JSON.stringify(userInput),
                headers: {'Content-Type': 'application/json'},
            });

            if (response.ok) {
                const resData = await response.json();
                setNoExitingUser(false);
                const userName = resData.name
                localStorage.setItem('token', resData.token)
                localStorage.setItem('userName', userName)
                handleUser(userName)
                navigate('/dashboard');
                console.log(resData);
            } else {
                const errorData = await response.json();
                console.log(errorData);
                setNoExitingUser(true);
            }
        } catch (error) {
            console.error("Error during login:", error);
            setNoExitingUser(true); // Optionally set this to true if there's an error
        } finally {
            setLoading(false)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!emailNotValid) {
            handleLogIn(userInput).then()
        } else {
            setScaleMessage(true)
            setTimeout(() => setScaleMessage(false), 1000);

        }
    }

    const emailNotValid = userInput.email &&
        (!userInput.email.includes('@') ||
            !(userInput.email.endsWith(".com") || userInput.email.endsWith('.co.il')));

    return (
        <form onSubmit={handleSubmit}>
            <div className="img-div">
                <img className="login-img" src={StockWelcomeImage} alt=""/>
                <div id="login">
                    {loading ? (
                        <div className="login-loading">
                            <Lottie animationData={loginLoading} loop={true}/>
                        </div>
                    ) : (
                        <>
                            <h1>Login</h1>
                            <p>
                                <label>Email</label>
                                <input
                                    className={emailNotValid ? "input-argument-not-valid" : ""}
                                    type="email"
                                    required
                                    onBlur={(event) => handleUserInput('email', event.target.value)}
                                />
                            </p>
                            {emailNotValid && (
                                <div className={`field-not-valid ${scaleMessage ? 'blink' : ''}`}>
                                    <p>Email not valid</p>
                                </div>
                            )}
                            <p>
                                <label>Password</label>
                                <input
                                    type="password"
                                    onBlur={(event) => handleUserInput('password', event.target.value)}
                                />
                            </p>
                            {noExitingUser && (
                                <div className="field-not-valid">
                                    <p>Incorrect email or password. Please try again</p>
                                </div>
                            )}
                            <p id="actions">
                                <button type="button" className='LoginOrRegister' onClick={handleSwitch}>
                                    Create New User
                                </button>
                                <button className='LoginOrRegister'>Login</button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}



