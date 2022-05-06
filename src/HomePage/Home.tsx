import { Link } from "react-router-dom";

import "./Home.css";

const home = () => {
  return (
    <div className="home-container">
      <p className="topBorder">
        <span
          style={{
            textAlign: "left",
            fontFamily: "bergen-text",
            fontWeight: 40,
          }}
        >
          Software Developer
          <br />
          Adelaide, South Australia
        </span>
        <b />
        <span className="number">09</span>
      </p>
      <ul className="menu">
        <li className="menuOption">
          <span>01 </span> <span>Home</span>
        </li>
        <Link to="about" style={{ textDecoration: "none", color: "white" }}>
          <li className="menuOption">
            <span>02 </span> <span>About</span>
          </li>
        </Link>
        <Link to="portfolio" style={{ textDecoration: "none", color: "white" }}>
          <li className="menuOption">
            <span>03 </span> <span>Portfolio</span>
          </li>
        </Link>
        <Link to="contact" style={{ textDecoration: "none", color: "white" }}>
          <li className="menuOption">
            <span>04 </span> <span>Contact</span>
          </li>
        </Link>
      </ul>
      <p className="intro">Hi there, I'm</p>
      <p className="name">C I N D Y . L E</p>
      <p className="sideText">•••</p>
    </div>
  );
};

export default home;
