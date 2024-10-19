import React from "react";
import './dashBoardAttribute.css'

export default function DashBoardAttribute({title, value, value2, userData}) {
    const valueStyle = (title === "P&L Daily" || title === "Portfolio Performance")
        ? {color: parseInt(value) >= 0 ? "#28a745" : '#dc3545'}
        : {};
    console.log(value)
    console.log(userData.balance)
    return (
        <div className="dash-board-attribute">
            {(value === "NAN?" || userData.balance === -1 || userData.balance === "NaN$") ? (
                <div className="dash-board-attribute-loading">
                    <p className="loading-text">Loading...</p> {/* You can customize the loading message */}
                </div>
            ) : (
                <div className="dash-board-attribute-contact">
                    <p className="dash-board-attribute-value" style={valueStyle}>{value} {value2}</p>
                    <p className="dash-board-attribute-title">{title}</p>
                </div>
            )}
        </div>
    );
}