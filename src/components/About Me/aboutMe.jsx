import React from "react";
import Footer from "../Footer/footer";
import PageHeading from "../PageHeading/pageHeading";

import "./aboutme.scss";

import img from "../../img/pro2.jpg";
import ParticlesJs from "./particles";

const AboutMe = () => {
    return (
        <div className="aboutme">
            <PageHeading title="About me" />
            <div className="aaa">
                <div className="container">
                    <div className="row">
                        <ParticlesJs />
                        <div
                            className="col-lg-6 col-12 mt-5 justify-content-md-center justify-content-lg-start"
                            data-aos="fade-up"
                        >
                            <div className="text-center">
                                <div className="profile-pic">
                                    <img
                                        src={img}
                                        alt=""
                                        className="img-fluid pro-pic"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-12 mt-5"
                            data-aos="fade-down"
                        >
                            <div className="home-text">
                                <h1>Ahmed Faisal Amit</h1>
                                <h4>A Front End Develpoer</h4>
                                <p>
                                    I have Knowledge of efficiently coding
                                    websites and applications using modern HTML,
                                    CSS, and JavaScript, React, Node Js,
                                    MongoDB. Building state-of-the-art, easy to
                                    use, user-friendly websites and applications
                                    is truly a passion of mine. In addition to
                                    my knowledge base, I actively seek out new
                                    technologies and stay up-to-date on industry
                                    trends and advancements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe;
