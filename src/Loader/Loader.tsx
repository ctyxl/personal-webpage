import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

import "./Loader.css";
import geoAnimation from "../Lottie/geo.json";

const geoAni = {
  loop: true,
  autoplay: true,
  animationData: geoAnimation,
  rendererSettings: {
    preserveAspectRation: "xMidYMid slice",
  },
};

const loader = () => {
  return (
    <div className="loader-container">
      <div className="lines">
        <Lottie options={geoAni} isClickToPauseDisabled={true} />
      </div>
      <div className="loader-wrap">L O A D I N G . . .</div>
      {/* 読 み 込 み 中 . . . */}
    </div>
  );
};

export default loader;
