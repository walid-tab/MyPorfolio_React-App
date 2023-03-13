import Proj1 from "../assets/Proj1.png";
import Proj2 from "../assets/Proj2.png";
import Proj3 from "../assets/Proj3.png";
import Proj4 from "../assets/Proj4.png";
import Proj5 from "../assets/Proj5.png";
import Proj6 from "../assets/Proj6.png";
import { postUrl1 } from "./ListUrlProjects";
import { postUrl2 } from "./ListUrlProjects";
import { postUrl3 } from "./ListUrlProjects";
import { postUrl4 } from "./ListUrlProjects";
import { postUrl5 } from "./ListUrlProjects";
import { postUrl6 } from "./ListUrlProjects";

export const ProjectList = [
  {
    name: "Search Job Web App",
    image: Proj1,
    skills: "React.js, Express.js, Node.js, MongoDB",
    url: postUrl1,
  },
  {
    name: "Movie Web App",
    image: Proj2,
    skills: "React.js, bootstrap ",
    url: postUrl2,
  },
  {
    name: "User App with Firebase",
    image: Proj3,
    skills: "React.js, Firebase, bootstrap",
    url: postUrl3,
  },
  {
    name: "TodoList App with React-TypeScript",
    image: Proj4,
    skills: "React, Typescript, Bootstrap",
    url: postUrl4,
  },
  {
    name: "Quiz App",
    image: Proj5,
    skills: "React.js, bootstrap",
    url: postUrl5,
  },
  {
    name: "Contact List MERN App",
    image: Proj6,
    skills: "React.js, Node.js, Express.js, MongoDB, Redux, axios",
    url: postUrl6,
  },
];
