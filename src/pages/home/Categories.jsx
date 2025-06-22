import React from "react";

import CategoryCard from "../../components/category-card/CategoryCard";

import "./styles/Categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-wrapper">
        <h1>Summer-ready beauty</h1>
        <div className="category-cards-wrapper">
          <CategoryCard
            title="Makeup"
            image="/images/categories/category-1.avif"
          />
          <CategoryCard
            title="Skin care"
            image="/images/categories/category-2.avif"
          />
          <CategoryCard
            title="Hair care"
            image="/images/categories/category-3.avif"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
