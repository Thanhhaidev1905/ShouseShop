import React, { useState } from "react";
import ProduceItem from "./ProduceItem";

const ProduceList = (props) => {
  const { data, onHandledClick } = props;

  return (
    <div className="productList">
      {data.map((product, index) => {
        return (
          <ProduceItem
            product={product}
            key={index}
            onHandledClick={onHandledClick}
          />
        );
      })}
    </div>
  );
};

export default ProduceList;
