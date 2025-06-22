import React from "react";

import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import ProductSlider from "../../components/product-slider/ProductSlider";

import { useProducts } from "./hooks/useProducts";

import "./styles/ProductHighlights.css";

const ProductHighlights = () => {
  const { products, loading } = useProducts();

  return (
    <div className="product-highlights-container">
      <div className="product-highlights-wrapper">
        <div className="title-row">
          <h2 className="product-title">Your next fave is only at Ulta</h2>
          <ButtonSecondary text="Shop all" />
        </div>
        <div className="product-info-row">
          <p className="product-count">{`${products.length} items`}</p>
          <div className="swiper-nav-buttons">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <ProductSlider products={products} />
      </div>
    </div>
  );
};

export default ProductHighlights;
