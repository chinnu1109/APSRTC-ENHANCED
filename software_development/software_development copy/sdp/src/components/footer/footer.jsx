import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Column 1: Footer Links */}
            <div className="footer-column1">
                <div className="footer-links">
                    <a href="/faq">FAQs</a>
                    <span> | </span>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <span> | </span>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                    <span> | </span>
                    <a href="/contact-us">Contact Us</a>
                    <span> | </span>
                    <a href="/about-us">About Us</a>
                </div>
                <div className="footer-version">
                    <span>Version v4.9.0 | Copyright © 2011 apsrtconline.in, All rights reserved.</span>
                </div>
            </div>

            {/* Column 2: Social Media */}
            <div className="footer-social">
                <span>Follow us on:</span>
                <a href="https://www.facebook.com/yourfacebookpage">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com/yourtwitterhandle">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>

            {/* Column 3: Feedback */}
            <div className="footer-feedback">
                <Link to="/feedback"> <a>Add your Feedback here!!!</a> </Link>
            </div>
        </footer>
    );
};

export default Footer;
