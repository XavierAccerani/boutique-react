import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log("the product : ", products);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("the error on axios : ", err);
      });
    console.log("the response : ", response);
    console.log("the response data : ", response.data);
  };

  useEffect(() => {
    fetchProducts();
  });
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
