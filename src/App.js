import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import AboutMe from "./components/About Me/aboutMe";
import ProjectPage from "./components/project";
import ArticlePage from "./components/Articles/articlePage";
import Contact from "./components/Contact Me/contact";

function App({ location }) {
    return (
        <BrowserRouter>
            <div
                style={{
                    backgroundColor: "#1E1E1E",
                }}
            >
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/aboutMe" component={AboutMe} />
                    <Route path="/projects" component={ProjectPage} />
                    <Route path="/articles" component={ArticlePage} />
                    <Route path="/contactme" component={Contact} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
