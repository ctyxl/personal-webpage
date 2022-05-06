import { useState } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";

const portfolio = () => {
  const portfolioListText = (
    <div className="portfolioList">
      <p
        onClick={() => {
          setText(projectOne);
          setSubText("Covid Check-In Application");
          setHide("");
        }}
      >
        <i>
          <b>⇴ Covid Check-In Application</b>
        </i>
      </p>
      <br />
      University of South Australia | 2021 <br />
      <br />
      <p
        onClick={() => {
          setText(projectTwo);
          setSubText("Amazon Directory");
          setHide("");
        }}
      >
        <i>
          <b>⇴ Amazon Directory</b>
        </i>
      </p>
      <br />
      University of South Australia | 2021 <br /> <br />
      <p
        onClick={() => {
          setText(projectThree);
          setSubText("Personal Website");
          setHide("");
        }}
      >
        <i>
          <b>⇴ Personal Website</b>
        </i>
      </p>
      <br />
      Personal Project | 2022 <br />
      <br />
      <span> Click to view in more detail</span>
    </div>
  );

  const projectOne = (
    <div className="projectOne">
      Worked as a UI/UX developer. Cindy participated in a university group
      project addressing the client's problem: improving current implementations
      of COVID tracing to reduce contact and simplify user experience with the
      target audience focusing more on seniors.
      <br />
      <br />
      <p>
        <b>Languages</b>: React, TypeScript, CSS
        <br />
        <b> Back-end</b>: MongoDB <br /> <b>Tools</b>: GitHub, JIRA, Framer
      </p>
      <br />
      <br />
      <img src="/github.png" className="icon" />
      <a
        target="_blank"
        href="https://github.com/UniSA-PS-Web-Pain/uni-ps-covid-checkin"
      >
        GitHub
      </a>
    </div>
  );
  const projectTwo = (
    <div className="projectTwo">
      Worked as a full-stack developer. Cindy participated in developing a user
      interface for Amazon to allow users to view and browse through existing
      orders and products. <br />
      <br />
      When viewing products, a collated table of who purchased the product (ie.
      personal information) will also be displayed. Additional features such as
      a search bar and filtering options were implemented.
      <br />
      <br />
      <p>
        <b>Languages</b>: React, JavaScript, CSS
        <br />
        <b>Back-end</b>: MongoDB
      </p>
    </div>
  );
  const projectThree = (
    <div className="projectThree">
      Worked as a front-end developer. Cindy participated in a personal project
      that involves developing a webpage to create a space where she can express
      herself and her work.
      <br />
      <br />
      <p>
        <b>Languages</b>: React, TypeScript, CSS
        <br />
        <b>Tools</b>: Vitejs, Figma
      </p>
      <br />
      <br />
      <img src="/github.png" className="icon" />
      <a target="_blank" href="https://github.com/ctyxl/personal-webpage">
        GitHub
      </a>
    </div>
  );

  const [text, setText] = useState(portfolioListText);
  const [subText, setSubText] = useState("");
  const [hide, setHide] = useState("none");

  return (
    <div className="about-container">
      <p className="aboutHeader">03</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="returnHeader">Home</p>
      </Link>
      <div className="leftAbout">
        <p className="titleText">
          Portfolio
          <br />
          <p className="subTitleText">{subText}</p>
        </p>
        <span className="verticalLine"></span>
        <div className="portfolioBody">{text}</div>
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
      <div className="navBarAbout" style={{ display: `${hide}` }}>
        <div>
          <p
            onClick={() => {
              setText(portfolioListText);
              setSubText("");
              setHide("none");
            }}
          >
            Go Back
          </p>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
