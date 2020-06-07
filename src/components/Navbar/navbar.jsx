import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

import cv from "../../img/Ahmed_Faisal_Amit.pdf";
const Navbar = () => {
    return (
        <div className="fixed-top" style={{ backgroundColor: "#fca311" }}>
            <div className="container">
                <nav className="navbar navbar-expand-lg  navbar-light">
                    <Link className="navbar-brand" to="/">
                        I'M AMIT
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutMe">
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/articles">
                                    Articles
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contactme">
                                    Contact Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="btn btn-down"
                                    // href="https://drive.google.com/uc?id=1UNlkhkUdikVF_YQfWUXExYJjMCyqgK0K&export=download"
                                    href={cv}
                                    download
                                >
                                    Download CV
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
