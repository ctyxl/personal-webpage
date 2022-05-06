import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Home from "./HomePage/Home";
import Loader from "./Loader/Loader";
import About from "./AboutPage/about";
import Portfolio from "./PortfolioPage/portfolio";
import Contact from "./ContactPage/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={loading ? <Loader /> : <Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
