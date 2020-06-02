// removed for now, enable this by calling <Preloader />

import React from "react";

const Preloader = props => (
  <div className="loader">
    <div className="loader-inner">
      <svg
        width="120"
        height="220"
        viewBox="0 0 100 100"
        className="loading-spinner"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="spinner"
          cx="50"
          cy="50"
          r="21"
          fill="#111111"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  </div>
);
export default Preloader;
