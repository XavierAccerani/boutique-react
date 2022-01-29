import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import fetchProducts from "../services/productServices";
import { fetchProduct } from "../actions/productActions";
import Counter from "../features/counter/Counter";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  dispatch(fetchProduct());

  useEffect(() => {
    console.log("dans le useEffect avant fetch");
    console.log("dans le useEffect avant fetch");
  }, []);

  console.log("the products after useEffect: ", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
      <Counter />
    </div>
  );
};

export default ProductListing;
