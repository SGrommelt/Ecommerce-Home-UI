import React from "react";

import StarEmpty from "../../assets/icons/StarEmpty";
import StarFull from "../../assets/icons/StarFull";
import StarHalf from "../../assets/icons/StarHalf";

import "./ProductRating.css";

const ProductRating = ({ starRating, totalRatings }) => {
  const fullStars = Math.floor(starRating);
  const hasHalfStar = starRating % 1 >= 0.25 && starRating % 1 <= 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++)
    stars.push(<StarFull key={`full-${i}`} />);

  if (hasHalfStar) stars.push(<StarHalf key="half" />);

  for (let i = 0; i < emptyStars; i++)
    stars.push(<StarEmpty key={`empty-${i}`} />);

  return (
    <div className="product-rating-wrapper">
      <div className="star-rating">{stars}</div>
      <p className="product-ratings-text">{`(${new Intl.NumberFormat(
        "en-US"
      ).format(totalRatings)})`}</p>
    </div>
  );
};

export default ProductRating;
