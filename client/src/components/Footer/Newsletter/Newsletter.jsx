import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">NewsLetter</span>
                <span className="big-text">Signup for latest updates and offers</span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text" >Will be used in accordance to our privacy policy</span>
                <span className = "social-icons">
                    <div className="icon"><FaFacebook size={14} /> </div>
                    <div className="icon"><FaTwitter size={14} /> </div>
                    <div className="icon"><FaInstagram size={14} /> </div>
                    <div className="icon"><FaLinkedinIn size={14} /> </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
