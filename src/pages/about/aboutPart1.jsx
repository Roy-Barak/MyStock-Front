import React from 'react';
import './about.css';
import StockWelcomeImage from "../../assests/images/seaBackground.jpeg";
import profilePic from "../../assests/images/royProfile.png";

export default function AboutPart1() {
    return (
        <div className="about-container">
            <img className="login-img about-container-img" src={StockWelcomeImage} alt=""/>
            <div className="about-container-information">

                <img className="profile-img" src={profilePic} alt="Roy Barak Profile"/>
                <p className="about-container-hello">My name is Roy Barak Welcome to My Stock!</p>

                <p className="about-container-roy-p">
                    I'm a 27-year-old computer science student. Over the past year, I decided to deepen my knowledge in
                    web development, and as part of that journey, I created this site – MyStock. Throughout the
                    development process, I aimed to do as much as possible on my own, avoiding external libraries—not
                    for convenience, but to ensure I fully learned and understood all aspects of web development. Along
                    the way, I took several courses on Udemy, including courses in JavaScript, HTML, CSS design, and
                    React. I am a curious person who loves to learn and is always looking for new challenges.
                </p>

                {/* Scroll Arrow to indicate more content below */}
                <div className="scroll-down-indicator">
                    <span>More Information Below</span>
                    <div className="arrow-down"></div>
                </div>
            </div>
        </div>
    );
}
