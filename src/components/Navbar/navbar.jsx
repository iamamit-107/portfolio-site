import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

import axios from "axios";
const Navbar = () => {
  const [sticky, setOffset] = useState(false);
  const [link, setLink] = useState(null);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    const getResume = async () => {
      const { data } = await axios.get(
        "https://portfolio-76b3e-default-rtdb.asia-southeast1.firebasedatabase.app/resume.json"
      );
      setLink(data.link);
    };

    getResume();
  }, []);

  return (
    <div className={sticky > 200 ? "sticky header" : "header"}>
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
                  href={link && link}
                  // href={cv}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
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
