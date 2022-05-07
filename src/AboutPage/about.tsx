import { useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

const introText = (
  <div className="introText">
    <p>
      <b>Who is Cindy?</b> <br />
      <br />
    </p>
    <p>
      Currently a 3rd year student studying Information Technology (Software
      Development) at University of South Australia. <br />
      <br />
      Aspiring to curate experiences with technology and design. <br />
    </p>
  </div>
);

const techText = (
  <div className="techText">
    <p>
      <b>Front-end Development</b>: JavaScript, React, TypeScript, Vue, HTML5,
      CSS3, Bootstrap
    </p>
    <br />
    <p>
      <b>Back-end Development</b>: Python, Java, .NET Framework
    </p>
    <br />
    <p>
      <b>Databases</b>: MySQL, MongoDB
    </p>
    <br />
    <p>
      <b>IDEs</b>: Visual Studio, VSCode, Eclipse
    </p>
    <br />
    <p>
      <b>Collaboration Tools</b>: Microsoft Azure, GitHub, GitLab, JIRA, Trello
    </p>
    <br />
    <p>
      <b>Testing</b>: Python, Cypress
    </p>
    <br />
    <p>
      <b>Design Tools</b>: Figma, Framer, Adobe InDesign, Illustrator,
      Photoshop, XD, Premier Pro
    </p>
  </div>
);

const about = () => {
  const [text, setText] = useState(introText);

  return (
    <div className="about-container">
      <p className="aboutHeader">02</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="returnHeader">Home</p>
      </Link>
      <div className="leftAbout">
        <p className="aboutTitle">About</p>
        <span className="verticalLine"></span>
        <div className="aboutBody">{text}</div>
      </div>
      <ul className="navMenu">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgb(170, 170, 170)" }}
        >
          <li className="menuOption">
            <span>01 </span> <span>Home</span>
          </li>
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none", color: "rgb(170, 170, 170)" }}
        >
          <li className="menuOption">
            <span>02 </span> <span>About</span>
          </li>
        </Link>
        <Link
          to="/portfolio"
          style={{ textDecoration: "none", color: "rgb(170, 170, 170)" }}
        >
          <li className="menuOption">
            <span>03 </span> <span>Portfolio</span>
          </li>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "rgb(170, 170, 170)" }}
        >
          <li className="menuOption">
            <span>04 </span> <span>Contact</span>
          </li>
        </Link>
      </ul>
      <div className="navBarAbout">
        <p onClick={() => setText(introText)}>About</p>
        <p>|</p>
        <p onClick={() => setText(techText)}> Technical Experience</p>
      </div>
    </div>
  );
};

export default about;
