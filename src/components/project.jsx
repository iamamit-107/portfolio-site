import React, { useEffect, useState } from "react";
import "./project.scss";
import PageHeading from "./PageHeading/pageHeading";
import Footer from "./Footer/footer";
import { profProject, personalProject } from "../data";

import ProjectTemplate from "./Projects Page/projectTemplate";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState(profProject);
  const [activeBtn, setActiveBtn] = useState(1);

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="projects">
      <PageHeading title="Projects" />
      <div className="project-main mt-3">
        <div className="container">
          <div className="mb-5">
            <button
              className={
                activeBtn == 1 ? "btn slect-btn active-btn" : "btn slect-btn"
              }
              onClick={() => {
                setProjectData(profProject);
                setActiveBtn(1);
              }}
            >
              Professional Projects
            </button>
            <button
              className={
                activeBtn == 2 ? "btn slect-btn active-btn" : "btn slect-btn"
              }
              onClick={() => {
                setProjectData(personalProject);
                setActiveBtn(2);
              }}
            >
              Personal Projects
            </button>
          </div>
          {projectData.map((data, index) => (
            <ProjectTemplate key={data.img} data={data} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
