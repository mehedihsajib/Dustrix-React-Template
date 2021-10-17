import React from 'react';
import { FaPlus } from 'react-icons/fa';

function OffsetMenu() {
    return (
        <div className="offset-menu">
            <span id="offset-menu-close-btn">
                <FaPlus />
            </span>
            <div className="offset-menu-wrapper text-white">
                <div className="offset-menu-header">
                    <div className="offset-menu-logo">
                        <a href="index.html">
                            <img src="assets/img/logo.png" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="offset-menu-section">
                    <h3>About Us</h3>
                    <p>
                        We must explain to you how all seds this mistakens idea off denouncing
                        pleasures and praising pain was born and I will give you a completed
                    </p>
                    <a href="contact.html" className="theme-btn mt-30">
                        Consultation
                    </a>
                </div>
                <div className="offset-menu-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li>
                            <span>
                                <i className="fal fa-map" />
                            </span>
                            Rock St 12, Newyork City, USA
                        </li>
                        <li>
                            <span>
                                <i className="fal fa-phone" />
                            </span>
                            (000) 000-000-0000
                        </li>
                        <li>
                            <span>
                                <i className="fal fa-envelope" />
                            </span>
                            info@modinatheme.com
                        </li>
                        <li>
                            <span>
                                <i className="fal fa-clock" />
                            </span>
                            Week Days: 09.00 to 18.00
                        </li>
                        <li>
                            <span>
                                <i className="fal fa-clock" />
                            </span>
                            Sunday: Closed
                        </li>
                    </ul>
                </div>
                <div className="offset-menu-footer">
                    <div className="offset-menu-social-icon">
                        <a href="/">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="/">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="/">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="/">
                            <i className="fab fa-dribbble" />
                        </a>
                        <a href="/">
                            <i className="fab fa-youtube" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OffsetMenu;
