import React from 'react';
import "./welcome.css"
import WelcomeImg from "../../../assests/images/homePageBackgroundImg.webp"

const welcome = () => {
    return (
        <div className="FirstContainer">
            <img className="welcomeImg" src={WelcomeImg} alt="Stock Market"/>

            {/*<div className="welcomeText">*/}
            {/*    /!*<h2 className="welcomeText-title">Welcome To MY Stocks!</h2>*!/*/}
            {/*    <p>*/}
            {/*        Your personal stock portfolio management tool*/}
            {/*    </p>*/}
            {/*    /!*<p>*!/*/}
            {/*    /!*    . With My Stocks,*!/*/}
            {/*    /!*    you can easily track and manage your stock investments in one convenient place. Whether*!/*/}
            {/*    /!*    you're a seasoned investor or just getting started, My Stocks has everything you need*!/*/}
            {/*    /!*    to stay informed and make informed decisions about your portfolio.*!/*/}
            {/*    /!*</p>*!/*/}
            {/*</div>*/}
        </div>
    );
};
export default welcome;