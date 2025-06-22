import React from "react";

import Button from "../buttons/Button";
import FreeGiftBadge from "../free-gift-badge/FreeGiftBadge";
import ProductRating from "../product-rating/ProductRating";
import SaleBadge from "../sale-badge/SaleBadge";

import "./ProductCard.css";

const ProductCard = ({ product }) => {
  console.log(product?.productImg);
  return (
    <div className="product-card-wrapper">
      <div className="product-image">
        <div className="product-image-banner">
          {product?.hasDiscount && <SaleBadge discountPercent={20} />}
        </div>
        <img src={product?.productImg} />
        <div className="product-image-banner"></div>
      </div>
      <div className="product-card-info">
        <p className="product-card-title">{product?.name}</p>
        <p className="product-card-description">{product?.description}</p>
        <ProductRating
          starRating={product?.starsRating}
          totalRatings={product?.totalRatings}
        />
        {!product?.hasDiscount ? (
          <p className="product-price">
            ${product?.minPrice.toFixed(2)}
            {product?.maxPrice > 0 ? ` - $${product.maxPrice.toFixed(2)}` : ""}
          </p>
        ) : (
          <div className="product-discount-price">
            <p className="product-discount-price-text">
              ${product?.discountedPrice.toFixed(2)}
            </p>
            <p className="product-normal-price-text">
              ${product?.minPrice.toFixed(2)}
            </p>
          </div>
        )}
        {product?.freeGift && <FreeGiftBadge />}
        <Button text="Add to bag" />
      </div>
    </div>
  );
};

export default ProductCard;
