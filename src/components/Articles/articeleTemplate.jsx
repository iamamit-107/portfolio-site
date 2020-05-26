import React from "react";

const ArticleTemplate = ({ data }) => {
    return (
        <div className="col-lg-8 offset-lg-2" data-aos="fade-right">
            <div class="card mt-5">
                <div class="row no-gutters">
                    <div class="col-md-6">
                        <img
                            src={data.img}
                            class="card-img"
                            alt="..."
                            style={{ height: "100%" }}
                        />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <p
                                class="card-text"
                                style={{ textAlign: "justify" }}
                            >
                                {data.desc}
                            </p>
                            <a
                                href={data.link}
                                target="_blank"
                                className="btn hire-me"
                                rel="noopener noreferrer"
                            >
                                Read Full Article
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleTemplate;
