import StockWelcomeImage from "../../../assests/images/StockWelcome.png";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Lottie from "lottie-react";
import loginLoading from "../../../assests/animation/walletLoading.json";

export default function RegisterPage({handleSwitch, handleUser}) {
    const [userInput, setUserInput] = useState({
        "name": '',
        "email": '',
        "password": '',
        "confirmPassword": ''
    });
    //state for sending managing error message for the user while register
    const [isEditing, setIsEditing] = useState({
        'email': false,
        "password": false,
        "confirmPassword": false
    })
    const [scaleMessage, setScaleMessage] = useState(false);
    const [emailIsAlreadyUsed, setEmailIsAlreadyUsed] = useState(false);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    function handleUserInput(identifier, value) {
        if (identifier === "name") {
            value = toTitleCase(value);
        }
        setUserInput((prevValues) => ({
            ...prevValues, [identifier]: value
        }));

    }

    function toTitleCase(str) {
        return str
            .toLowerCase() // Convert the entire string to lowercase
            .split(' ') // Split the string into an array of words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the words back into a single string with spaces
    }

    function handleEdit(field) {
        setIsEditing(prevEdit => ({
            ...prevEdit, [field]: true
        }))
    }

    async function handleSignUp(userInput) {
        setLoading(true);
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        // Wait for 3 seconds
        await delay(3000); // Wait for 3 seconds
        try {
            const response = await fetch("https://mystock-backend.vercel.app/user-register", {
                method: 'POST',
                body: JSON.stringify({
                    "name": userInput.name,
                    "email": userInput.email,
                    "password": userInput.password
                }),
                headers: {'Content-Type': 'application/json'},
            });

            if (response.ok) {
                const resData = await response.json();
                const userName = resData.name
                localStorage.setItem('token', resData.token)
                localStorage.setItem('userName', userName)
                //for updating the navbar
                handleUser(userName)
                navigate('/dashboard')
                console.log(resData);
            } else {
                const errorData = await response.json();
                if (response.status === 402) {
                    setEmailIsAlreadyUsed(true);
                    console.log(errorData.message); // Email already registered
                } else {
                    console.log("An error occurred. Please try again.");
                }
            }

        } catch (error) {
            console.error("Error during login:", error);
        } finally {
            setLoading(false)
        }
    }

    function handleSubmit(event) {
        setEmailIsAlreadyUsed(false);
        event.preventDefault()
        if (!emailNotValid && !passwordsNoMatch) {
            handleSignUp(userInput).then()
        } else {
            setScaleMessage(true)
            setTimeout(() => setScaleMessage(false), 1000);

        }
    }

    //valid email check if include @ and end with .com or .co.il
    const emailNotValid = isEditing.email &&
        (!userInput.email.includes('@') ||
            !(userInput.email.endsWith(".com") || userInput.email.endsWith('.co.il')));

    const passwordsNoMatch = (isEditing.password && isEditing.confirmPassword)
        && !(userInput.password === userInput.confirmPassword)
    console.log(userInput)
    return (
        <form onSubmit={handleSubmit}>
            <div className="img-div">
                <img className="login-img" src={StockWelcomeImage} alt="Stock Market"/>
                <div id="login">
                    {loading ? (
                        <div className="login-loading">
                            <Lottie animationData={loginLoading} loop={true}/>
                        </div>
                    ) : (
                        <>
                            <h1>Register!</h1>
                            <p>
                                <label>Name</label>
                                <input type="text" required
                                       onBlur={(event) => handleUserInput('name', event.target.value)}/>
                            </p>
                            <p>
                                <label>Email address</label>
                                <input
                                    className={emailNotValid ? "input-argument-not-valid" : ""}
                                    type="email"
                                    required
                                    onBlur={(event) => {
                                        handleUserInput('email', event.target.value);
                                        handleEdit('email');
                                    }}
                                />
                            </p>
                            {emailNotValid &&
                                <div className={`field-not-valid ${scaleMessage ? 'blink' : ''}`}><p>Email not valid</p>
                                </div>}
                            <p>
                                <label>Password</label>
                                <input
                                    type="password"
                                    onBlur={(event) => {
                                        handleUserInput('password', event.target.value);
                                        handleEdit('password');
                                    }}
                                />
                            </p>
                            <p>
                                <label>Confirm password</label>
                                <input
                                    className={passwordsNoMatch ? "input-argument-not-valid" : ""}
                                    type="password"
                                    onBlur={(event) => {
                                        handleUserInput('confirmPassword', event.target.value);
                                        handleEdit('confirmPassword');
                                    }}
                                />
                            </p>
                            {passwordsNoMatch &&
                                <div className={`field-not-valid ${scaleMessage ? 'blink' : ''}`}><p>Passwords do not
                                    match</p></div>}
                            {emailIsAlreadyUsed &&
                                <div className="field-not-valid"><p>This email is already registered. Please use a
                                    different email or log in.</p></div>}

                            <p id="actions">
                                <button type="button" className='LoginOrRegister' onClick={handleSwitch}>
                                    Already have an account
                                </button>
                                <button className='LoginOrRegister'>Sign Up</button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}