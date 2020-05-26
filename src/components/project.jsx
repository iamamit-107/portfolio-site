import React, { useState } from "react";
import "./project.scss";
import PageHeading from "./PageHeading/pageHeading";
import Footer from "./Footer/footer";

import img1 from "../img/project1.png";
import img2 from "../img/project2.png";
import img3 from "../img/project3.PNG";
import img4 from "../img/project4.PNG";
import img5 from "../img/project5.PNG";
import img6 from "../img/project6.PNG";
import ProjectTemplate from "./Projects Page/projectTemplate";

const ProjectPage = () => {
    const [projectData] = useState([
        {
            img: img1,
            projectTitle: "Hot Onion App",
            projectDesc:
                "MERN stack app where a user creates an  account and can add foods to his cart .Then he can place order if he is signedin. He can pay as well using Stripepayment gateway. His order details willbe kept in Mongo database.Authentication with firebase.",
            badges: [
                "React",
                "Node JS",
                "Express JS",
                "MongoDB",
                "Firebase",
                "Heroku",
            ],
            text: "Lorem ipsum dolor, sit amet consectetur",
            link1: "https://github.com/iamamit-107/restaurant-app",
            link2: "https://restaurant-app-c4574.firebaseapp.com/",
        },
        {
            img: img2,
            projectTitle: "Doctor's Portal",
            projectDesc:
                "Responsive MERN stack app where apatient books his appointment date froma Calendar. He can see the available appointment for a particular date. Thedoctors get the dashboard and can seeall the patients got appointed.  ",
            badges: ["React", "Node JS", "Express JS", "MongoDB", "Firebase"],
            text: "Lorem ipsum dolor, sit amet consectetur",
            link1: "https://github.com/iamamit-107/doctors-portal",
            link2: "https://optimistic-newton-37657d.netlify.app/",
        },
        {
            img: img3,
            projectTitle: "Clothing Store",
            projectDesc:
                "This is an app created by react library. By using it we can order products. It also use local storage to save the user cart info. Cart operation is also there. Payment system has also integrated. Has login and logout system. ",
            badges: ["React", "Redux", "Local Storage", "Firebase"],
            text: "Lorem ipsum dolor, sit amet consectetur",
            link1: "https://github.com/iamamit-107/crown-ecommerce",
            link2: "https://suspicious-mcnulty-36b0ac.netlify.app/",
        },
        {
            img: img4,
            projectTitle: "Task Manager",
            projectDesc:
                "This is a task manager app. We can save a task for futute work. We can edit the task. We can remove the task. Local storage is used to save the tasks even after closing the browser. Hooks is used for state creation and loading the info form local storage.",
            badges: ["React", "Hooks", "Local Storage"],
            text: "Lorem ipsum dolor, sit amet consectetur",
            link1: "https://github.com/iamamit-107/task-manager",
            link2: "https://amazing-babbage-92f907.netlify.app/",
        },
        {
            img: img5,
            projectTitle: "Mobile Shop",
            projectDesc:
                "This is a Mobile Shop app. We can view product and add to cart product. cart functionality is added. We can remove a cart item, we can increase a specific product number, we can clear the cart item. Local storage is not used here. And no sign on and signup feature is added.",
            badges: ["React", "Hooks", "Context API"],
            text: "Lorem ipsum dolor, sit amet consectetur",
            link1: "https://github.com/iamamit-107/mobile-shop",
            link2: "https://quirky-shirley-3e4298.netlify.app/",
        },
        {
            img: img6,
            projectTitle: "Friend's Salary",
            projectDesc:
                "This is a simple react apps. Its has simple functionality. We can add a friend to the list to view the salary of him. It will show the selected friends list. Then it will count the total salary of all of the friends. It's an app created with react core features. Such as components, props, state, hooks.",
            badges: ["React", "Hooks", "Bootstrap"],
            text: "Lorem ipsum dolor, sit amet consectetur",
            link1: "https://github.com/iamamit-107/freinds-salary-app",
            link2: "https://elated-khorana-5e82b2.netlify.app/",
        },
    ]);
    return (
        <div className="projects">
            <PageHeading title="Projects" />
            <div className="project-main">
                <div className="container">
                    <div className="row">
                        {projectData.map((data) => (
                            <ProjectTemplate key={data.img} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPage;
