import React from "react";

const ProduceItem = (props) => {
  const { product, onHandledClick } = props;

  const { name, price, photo, description, inventory, id } = product;

  return (
    <div className="productContainer">
      <div className="productPhoto">{photo}</div>
      <div className="productContent">
        <div className="productName">{name}</div>
        <div className="productName">{description}</div>
        <div className="productPrice"> $ {price}</div>
      </div>
      <button className="addToCart" onClick={onHandledClick}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProduceItem;
