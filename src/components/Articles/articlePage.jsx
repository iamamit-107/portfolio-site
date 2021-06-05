import React, { useEffect, useState } from "react";
import "./articlePage.scss";
import PageHeading from "../PageHeading/pageHeading";
import Footer from "../Footer/footer";

import img1 from "../../img/article1.jpg";
import img2 from "../../img/article2.png";
import img3 from "../../img/article3.png";
import ParticlesJs from "../About Me/particles";
import ArticleTemplate from "./articeleTemplate";

const ArticlePage = () => {
  const [articles] = useState([
    {
      title: "Common JavaScript Algorithms You Must Know",
      img: img1,
      desc: "Today we are going to learn about some basic algorithms that every developer should know. Algorithms are a common topic inan interview.",
      link: "https://medium.com/javascript-in-plain-english/common-javascript-algorithms-you-must-know-9ca569ddf46f",
    },
    {
      title: "Learn React Hooks Basic in 5 minutes",
      img: img2,
      desc: "Hooks was introduced in React version 16.8. It came to solve some problems of class component and made codes more readable and clear.",
      link: "https://medium.com/swlh/learn-react-hooks-in-5-minutes-8349d17ef59b",
    },
    {
      title: "10 React Concepts You Should Know",
      img: img3,
      desc: "React is a frontend library. It is a component based library  which is reusable. To learn react you should have some basic knowledge of some react topic...",
      link: "https://medium.com/@afamit/10-react-concepts-you-should-know-c3cfd4aa7945",
    },
  ]);

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="article-page">
      <PageHeading title="articles" />
      <div className="articles pt-3">
        <div className="container">
          <div className="row">
            <ParticlesJs />
            {articles.map((article) => (
              <ArticleTemplate data={article} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;
