import React from 'react';
import "./welcome.css"
import WelcomeImg from "../../../assests/images/homePageBackgroundImg.webp"

const welcome = () => {
    return (
        <div className="welcome-contanier ">
            <img className="login-img about-container-img" src={WelcomeImg} alt="Stock Market"/>
            <div className="welcome-contanier-information">

                {/*<img className="profile-img" src={profilePic} alt="Roy Barak Profile"/>*/}
                <p className="welcome-contanier-p">
                    Welcome to My Stock! Your go-to platform for real-time stock market insights and portfolio
                    management.
                </p>

                {/* Scroll Arrow to indicate more content below */}

            </div>
        </div>
    );
};
export default welcome;