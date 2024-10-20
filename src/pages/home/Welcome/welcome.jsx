import React from 'react';
import "./welcome.css"
import WelcomeImg from "../../../assests/images/homePageBackgroundImg.webp"

const welcome = () => {
    return (
        <div className="FirstContainer">
            <img className="welcomeImg" src={WelcomeImg} alt="Stock Market"/>
        </div>
    );
};
export default welcome;