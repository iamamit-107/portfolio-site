import React from "react";

const ProjectTemplate = ({ data }) => {
    return (
        <div className="col-lg-4" data-aos="fade-up">
            <div className="card">
                <img src={data.img} className="card-img-top img-fluid" alt="" />
                <div className="card-body">
                    <h5 className="card-title"> {data.projectTitle} </h5>
                    <p className="card-text">{data.projectDesc}</p>
                    <div className="badges">
                        {data.badges.map((badge) => (
                            <span key={badge} className="badge badge-yellow">
                                {badge}
                            </span>
                        ))}

                        {/* <span className="badge badge-dark">Node JS</span>
                        <span className="badge badge-dark">MongoDB</span>
                        <span className="badge badge-dark">Firebase</span> */}
                    </div>
                </div>
                <div className="card-footer">
                    <a
                        href={data.link1}
                        target="_blank"
                        className="btn hire-me"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                    <a
                        href={data.link2}
                        target="_blank"
                        className="btn hire-me"
                        rel="noopener noreferrer"
                    >
                        Live
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectTemplate;
