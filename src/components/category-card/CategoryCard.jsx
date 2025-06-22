import React from "react";

import "./CategoryCard.css";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="category-card-wrapper">
      <img className="category-card-image" src={image} />
      <p>{title}</p>
    </div>
  );
};

export default CategoryCard;
