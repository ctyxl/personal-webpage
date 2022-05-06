import { Link } from "react-router-dom";
import "./Contact.css";

const contact = () => {
  return (
    <div className="about-container">
      <p className="aboutHeader">04</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="returnHeader">Home</p>
      </Link>
      <div className="leftAbout">
        <p className="contactTitle">Contact</p>
        <span className="verticalLine"></span>
        <div className="contactBody">
          <p style={{ fontSize: 20 }}>
            <i>Let's have a conversation.</i> <br />
            <br />
          </p>
          <div className="column">
            <img src="/public/phone.png" alt="phone" className="icon" />
            +61 468 627 647 <br />
            <br />
            <img src="/public/location.png" alt="mail" className="icon" />
            Adelaide, South Australia
          </div>
          <br /> <br />
          <div className="column">
            <img src="/public/mail.png" alt="mail" className="icon" />
            c.indle091@gmail.com <br /> <br />
            <img src="/public/linkedin.png" alt="linkedin" className="icon" />
            <a target="_blank" href="https://www.linkedin.com/in/cindyle09/">
              LinkedIn
            </a>
          </div>
        </div>
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
    </div>
  );
};

export default contact;
