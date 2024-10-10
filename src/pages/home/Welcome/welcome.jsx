import React from 'react';
import "./welcome.css"
import StockWelcomeImage from '../../../assests/images/StockWelcome.png'; // Import the image

const welcome = () => {
    return (
        <div className="FirstContainer">
            <img id="FirstImg" src={StockWelcomeImage} alt="Stock Market Image" />
            <div className="WelcomeText">
                <h1>My Stocks</h1>
                <p>
                    Welcome to My Stocks, your personal stock portfolio management tool. With My Stocks,
                    you can easily track and manage your stock investments in one convenient place. Whether
                    you're a seasoned investor or just getting started, My Stocks has everything you need
                    to stay informed and make informed decisions about your portfolio.
                </p>
            </div>
        </div>
    );
};
export default welcome;