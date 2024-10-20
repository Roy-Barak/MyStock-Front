import React from "react";
import "./aboutPart2.css"

export default function AboutPart2() {

    return (
        <div className="about-container-part2">

            <div className="about-container-information2">
                {/*<img className="about-container-information2-img" src={royFishing}/>*/}
                <p className="about-container-develop-p">
                    This is an exercise project that I developed independently without any
                    external libraries.
                    The project features a frontend built with React, while the backend is powered by Flask.
                    For data retrieval, I utilized the Yahoo API to provide real-time stock information and insights.
                </p>
            </div>
        </div>
    )
}