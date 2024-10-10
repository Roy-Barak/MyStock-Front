import {Link} from "react-router-dom";
import React from "react";
import "./footer.css"

export default function Footer(){

    return(
        <nav className="footer-nav">
            <ul className="footer-links">
                <Link to="/">Terms</Link>
                <Link to="/">Service</Link>
                <Link to="/">Contact</Link>
            </ul>
            <div className="credit-symbol">©RoyBarak</div>

        </nav>
    )
}