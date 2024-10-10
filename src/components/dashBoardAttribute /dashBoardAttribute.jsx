import React from "react";
import './dashBoardAttribute.css'

export default function DashBoardAttribute({title,value,value2}){
    const valueStyle = title === "P&L Daily"
        ? { color: parseInt(value) >= 0 ? "#28a745" : '#dc3545' }
        : {}; // Default to no style change if it's not P&L Daily
    return (
        <div className="dash-board-attribute">
            <p className="dash-board-attribute-value" style={valueStyle} >{value} {value2}</p>
            <p className="dash-board-attribute-title">{title}</p>


        </div>
    )
}