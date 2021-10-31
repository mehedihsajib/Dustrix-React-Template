import React from 'react';
import { FaSearch, FaTh } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-2.png';
import MobileMenu from '../MobileMenu';

function MainMenu2() {
    return (
        <header className="header-wrap header-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="logo">
                            <Link to="/home-2">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="menu-wrapper">
                            <div className="main-menu">
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="/">home 1</Link>
                                            </li>
                                            <li>
                                                <Link to="/home-2">home 2</Link>
                                            </li>
                                            <li>
                                                <Link to="/home-3">home 3</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Pages</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="/team">team</Link>
                                            </li>
                                            <li>
                                                <Link to="/faq">faq</Link>
                                            </li>
                                            <li>
                                                <Link to="/projects">projects</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">News</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-right">
                            <Link to="/contact" className="theme-btn theme-2">
                                Make Appointment
                            </Link>
                            <Link to="/" className="serach-btn circle-btn">
                                <FaSearch />
                            </Link>
                            <Link to="/" className="offcanvas-btn circle-btn">
                                <FaTh />
                            </Link>
                        </div>
                        <div className="mobile-menu-wrap align-items-center justify-content-center">
                            <div className="mobile-nav-wrap">
                                <div id="hamburger">
                                    <i className="fal fa-bars" />
                                </div>

                                <div className="mobile-nav">
                                    <MobileMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainMenu2;
