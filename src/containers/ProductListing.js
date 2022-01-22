import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("the error on axios : ", err);
      });
    dispatch(setProducts(response.data));
    console.log("the products : ", products);
  };

  useEffect(() => {
    console.log("dans le useEffect avant fetch");
    fetchProducts();
    console.log("dans le useEffect avant fetch");
  }, []);
  console.log("the products after useEffect: ", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
