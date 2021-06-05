import React from "react";

const ProjectTemplate = ({ data }) => {
  return (
    <div
      className={
        data.id % 2 === 0
          ? "row align-items-center mb-5"
          : "row align-items-center mb-5 flex-row-reverse"
      }
      data-aos="fade-up"
    >
      <div className="col-md-6">
        <h5 className="card-title"> {data.projectTitle} </h5>
        <p className="card-text">{data.projectDesc}</p>
        <div className="badges mb-3">
          {data.badges.map((badge) => (
            <span key={badge} className="badge badge-yellow">
              {badge}
            </span>
          ))}
        </div>

        <a
          href={data.link2}
          target="_blank"
          className="btn hire-me"
          rel="noopener noreferrer"
        >
          Live
        </a>
        {data.link1 && (
          <a
            href={data.link1}
            target="_blank"
            className="btn hire-me ml-3"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
      <div className="col-md-6">
        <div id={`data${data.id}`} class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-target={`#data${data.id}`}
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target={`#data${data.id}`} data-slide-to="1"></li>
            <li data-target={`#data${data.id}`} data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            {data.images.map((image, index) => (
              <div
                class={index === 0 ? "carousel-item active" : "carousel-item"}
              >
                <img class="d-block w-100" src={image.img} alt="Second slide" />
              </div>
            ))}
          </div>
          <a
            class="carousel-control-prev"
            href={`#data${data.id}`}
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href={`#data${data.id}`}
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

/**
 * <div className="card">
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
                        <span className="badge badge-dark">Firebase</span> */
// </div>
// </div>
// <div className="card-footer">
//   <a
//     href={data.link1}
//     target="_blank"
//     className="btn hire-me"
//     rel="noopener noreferrer"
//   >
//     Github
//   </a>
//   <a
//     href={data.link2}
//     target="_blank"
//     className="btn hire-me"
//     rel="noopener noreferrer"
//   >
//     Live
//   </a>
// </div>

export default ProjectTemplate;
