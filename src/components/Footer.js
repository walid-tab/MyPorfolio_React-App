import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to={"https://www.instagram.com/walid.sop/"}>
          <InstagramIcon />
        </Link>
        <Link to={"https://github.com/walid-tab"}>
          <GithubIcon />
        </Link>
        <Link to={"https://www.facebook.com/ananymos.soprano"}>
          <FacebookIcon />
        </Link>

        <Link to={"https://www.linkedin.com/in/walid-tabbabi-08a8b512a/"}>
          <LinkedInIcon />
          
        </Link>
        
      </div>
      <p> &copy; 2023 myportfolio</p>
      
      
      
    </div>
  );
}

export default Footer;
