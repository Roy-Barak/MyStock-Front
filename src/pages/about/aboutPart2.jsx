import React from "react";
import "./aboutPart2.css";

export default function AboutPart2() {
    return (
        <div className="about-container-part2">
            <div className="about-container-information2">
                <h2 className="about-title">Project Overview</h2>
                <p className="about-section">
                    This project was developed independently to create a full-stack web application providing real-time
                    stock market data. It integrates React on the frontend and Flask for the backend, connected to
                    MongoDB for managing user data. The Yahoo Finance API is used for retrieving stock information. Most
                    of the styling was implemented from scratch using CSS.
                </p>

                <h3 className="about-subtitle">Frontend</h3>
                <p className="about-section">
                    The React frontend is highly responsive, displaying real-time stock data and allowing users to
                    interact with their portfolios. The component-based structure makes the application modular and
                    maintainable, ensuring seamless updates as new stock data is retrieved. I created the majority of
                    the styles manually using pure CSS to achieve a custom design and responsive layout.
                </p>

                <h3 className="about-subtitle">Backend</h3>
                <p className="about-section">
                    The backend, built with Flask, handles API requests and user authentication using token-based (JWT)
                    authentication. MongoDB stores user portfolios, stock preferences, and transaction history.
                </p>

                <h4 className="about-sub-subtitle">Key Features</h4>
                <ul className="about-list">
                    <li>RESTful API endpoints to serve the frontend and manage user interactions.</li>
                    <li>Deployed on Vercel</li>
                    <li>Integration with Yahoo API for real-time stock data.</li>
                    <li>JWT-based authentication to secure user sessions.</li>
                    <li>MongoDB integration for efficient data storage and retrieval.</li>
                    <li>Robust error handling to ensure smooth user experience even during API failures.</li>
                    <li>Custom CSS for styling and responsive design, implemented without external libraries.</li>
                </ul>
            </div>
        </div>
    );
}
