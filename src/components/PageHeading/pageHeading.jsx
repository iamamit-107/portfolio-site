import React from "react";
import "./pageHeading.scss";

const PageHeading = ({ title }) => {
  return (
    <header className="pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 data-aos="fade-right"> {title} </h1>
            <p data-aos="fade-left" className="line"></p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeading;
