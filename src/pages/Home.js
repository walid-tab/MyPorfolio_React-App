import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Welcome, I'm Walid </h2>
        <div className="prompt">
          <p>
            A full stack developer with a passion for learning and creating.
          </p>
          <Link to={"https://www.linkedin.com/in/walid-tabbabi-08a8b512a/"}><LinkedInIcon /></Link>
          <Link to={"mailto:walid.tabbabi7@gmail.com"}><EmailIcon /></Link>
          <Link to={"https://github.com/walid-tab"}><GithubIcon /></Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, VueJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Chakra UI
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, NestJS, MySQL, MongoDB, Firebase</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C, TypeScript</span>
          </li>
          <li className="item">
            <h2>Test</h2>
            <span>Jest, React testing library</span>
          </li>
          <li className="item">
            <h2>Versionning</h2>
            <span>Git, GitHub, Doker</span>
          </li>
          <li className="item">
            <h2>SEO</h2>
          </li>
          <li className="item">
            <h2>WordPress - Elementor</h2>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
