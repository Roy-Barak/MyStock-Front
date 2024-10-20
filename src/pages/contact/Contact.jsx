import './contact.css'
import React from "react";
import seaBackground from "../../assests/images/temp.jpeg"
import profilePic from "../../assests/images/royFishing.png";
import {SocialIcon} from "react-social-icons";

export default function Contact() {
    return (
        <div className="contact-container">
            <img className="login-img" src={seaBackground} alt=""/>
            <div className="contact-container-information">

                <img className="profile-img-about" src={profilePic} alt=""/>

                <h2 className="contact-container-title">Let's Be In Touch!</h2>
                <p className="contact-container-phone">
                    052-6845808
                </p>
                <div className="contact-icons">
                    <SocialIcon
                        className="linkdin-icon"
                        url="https://www.linkedin.com/in/roy-barak-a90085213"
                        target="_blank"  // Opens in a new tab
                        rel="noopener noreferrer" // Security best practice when opening new tabs
                    />
                    <SocialIcon
                        className="gmail-icon"
                        url="mailto:roybarak19@gmail.com"
                        target="_blank"  // Opens in a new tab
                        rel="noopener noreferrer" // Security best practice when opening new tabs
                    />
                    <SocialIcon
                        url="https://speakiteasy.co.il/" // Replace with your WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </div>
                <p className="contact-container-email">
                    Roybarak19@gmail.com
                </p>


            </div>
        </div>


    )
}