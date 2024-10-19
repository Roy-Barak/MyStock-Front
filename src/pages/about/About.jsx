import React from 'react';
import './about.css';
import StockWelcomeImage from "../../assests/images/StockWelcome.png"; // Import any styles specific to the About page

const About = () => {
    return (
        <div className="about-container">
            <h1 className="h1-about">About Us</h1>
            <img className="about-img" src={StockWelcomeImage} alt="Stock Market"/>
            <img className="about-logo" src="logo512.png" alt=""/>
            <p className="about-first-p">
                Welcome to our website! We are dedicated to providing the best services for our users.
                Our mission is to make learning and knowledge-sharing accessible to everyone.
            </p>
        </div>
    );
};

export default About;