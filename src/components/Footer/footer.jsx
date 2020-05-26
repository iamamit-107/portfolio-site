import React from "react";
import { a } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="icon col-lg-12 text-center">
                        <a
                            href="https://github.com/iamamit-107"
                            className="social-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fa fa-github-square"
                                aria-hidden="true"
                            ></i>
                        </a>

                        <a
                            href="https://web.facebook.com/afaisalamit/"
                            className="social-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fa fa-facebook-square"
                                aria-hidden="true"
                            ></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/afamit/"
                            className="social-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fa fa-linkedin-square"
                                aria-hidden="true"
                            ></i>
                        </a>

                        <a
                            href="https://medium.com/@afamit"
                            target="_blank"
                            className="social-icon"
                            rel="noopener noreferrer"
                        >
                            <i className="fa fa-medium" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="col-lg-12 text-center">
                        <h4>COPYRIGHT©2020 AMIT ALL RIGHTS RESERVED</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
