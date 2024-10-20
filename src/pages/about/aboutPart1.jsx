import React from 'react';
import './about.css';
import StockWelcomeImage from "../../assests/images/seaBackground.jpeg"; // Import any styles specific to the AboutPart1 page
import profilePic from "../../assests/images/RoyImg2.png"

export default function AboutPart1() {
    return (

        <div className="about-container">
            <img className="login-img" src={StockWelcomeImage} alt=""/>
            <div className="about-container-information">

                <img className="profile-img" src={profilePic} alt=""/>
                <p className="about-container-hello">Hey my name is Roy Barak!
                    Welcome to My Stock!
                </p>


                <p className="about-container-roy-p">Im a 27-year-old computer science student.
                    Over the past year, I decided to deepen my knowledge in web development, and as part of that
                    journey, I created this site – MyStock. Throughout the development process, I aimed to do as
                    much as
                    possible on my own, avoiding external libraries—not for convenience, but to ensure I fully
                    learned
                    and understood all aspects of web development. Along the way, I took several courses on Udemy,
                    including a course in JavaScript, HTML, another in design with CSS, and an additional course in
                    React. I delved into each of these topics, and the result is here before you. I am a curious
                    person
                    who loves to learn and is always looking for new challenges.</p>


            </div>


        </div>

    )
        ;
};

