import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log("the product : ", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
