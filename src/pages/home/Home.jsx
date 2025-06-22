import React from "react";

import Banner from "./Banner";
import Categories from "./Categories";
import Counter from "./Counter";
import ProductHighlights from "./ProductHighlights";

import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Counter />
      <Banner />
      <ProductHighlights />
      <Categories />
    </div>
  );
};

export default Home;
