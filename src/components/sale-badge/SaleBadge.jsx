import React from "react";

import "./SaleBadge.css";

const SaleBadge = ({ discountPercent }) => {
  return (
    <div className="sale-badge-wrapper">
      <p className="sale-badge">{`${discountPercent}% Off`}</p>
    </div>
  );
};

export default SaleBadge;
