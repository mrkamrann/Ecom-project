import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"
import "./Footer.scss";
const Footer = () => {
    return <footer className="footer">
    <div className="footer-content">
        <div className="col">
            <div className="title">About</div>
            <div className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
        </div>
        <div className="col">
        <div className="title">Contact</div>
         
         <div className="c-item">
            <FaLocationArrow/>
            <div className="text">Kalyaram Rd, Punamadda, Koltaruguram, Alpannama, Kerela, 560058</div>
         </div>
        
         <div className="c-item">
            <FaMobileAlt/>
            <div className="text">Phone : 0442 364 0935</div>
         </div>
        
         <div className="c-item">
            <FaEnvelope/>
            <div className="text">Email : store@mydevstore.com</div>
         </div>

        </div>

        <div className="col">
        <div className="title">Categories</div>
        <span className="text">Headphones</span>
        <span className="text">Smart Watches</span>
        <span className="text">Bluetooth Speakers</span>
        <span className="text">Wireless Earbuds</span>
        <span className="text">Home Theatre</span>
        <span className="text">Projectors</span>
        </div>

        <div className="col">
        <div className="title">Pages</div> 
        <span className="text">Home</span>
        <span className="text">About</span>
        <span className="text">Privacy Policies</span>
        <span className="text">Returns</span>
        <span className="text">Terms & Conditions</span>
        <span className="text">Contact Us  </span>
        </div>
    </div>
    <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                MYDEVSTORE 2001 CREATED BY MY DEV. PREMIUM E-COMMERCE SOLUTIONS.
            </div>
           <img src= {Payment}/>
        </div>
    </div>

    </footer>;
};

export default Footer;
