import React, { useEffect } from "react";
import Footer from "../Footer/footer";
import PageHeading from "../PageHeading/pageHeading";

import "./aboutme.scss";

import img from "../../img/pro2.jpg";
import ParticlesJs from "./particles";

const AboutMe = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);
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
                  <img src={img} alt="" className="img-fluid pro-pic" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-5" data-aos="fade-down">
              <div className="home-text">
                <h1>Ahmed Faisal Amit</h1>
                <h4>Front End Develpoer</h4>
                <p>
                  Meticulous web developer with 1 year of frontend experience
                  designing and building responsive web design in various
                  industry. Proficient with CSS and JS Frameworks with extensive
                  knowledge of UX and user psychology and passion for responsive
                  website design and a firm believer in the mobile-first
                  approach.
                </p>

                <h1 className="mt-5 experiences">Experiences</h1>
                <div className="text-right">
                  <h3>Beatnik Technology Ltd.</h3>
                  <h4>Front End Develpoer - July, 2020 - Present</h4>
                  <p>
                    Beatnik Technology is a leading technology and website
                    development compnay. They have a creative team of website
                    developers, UI/UX designers, and digital marketers who push
                    our boundaries with smart solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5 pt-5">
              <div className="home-text">
                <h1 className="d-inline-block">Professional Skills</h1>
                <ul>
                  <li>React JS</li>
                  <li>Next JS</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>SaSS</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Photoshop</li>
                </ul>
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
