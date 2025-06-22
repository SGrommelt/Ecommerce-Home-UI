import React from "react";

import Button from "../../components/buttons/Button";

import "./styles/Banner.css";

const Banner = () => {
  return (
    <div className="home-banner-wrapper">
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="home-banner-container">
          <div className="home-banner-content">
            <h1>Top rated. Innovative. Trending.</h1>
            <p>Discover must-haves only at Ulta.</p>
            <Button text="Shop now" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Banner;
