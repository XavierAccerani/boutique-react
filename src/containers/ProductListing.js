import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import fetchProducts from "../services/productServices";
import { fetchProduct } from "../actions/productActions";
import { Counter } from "../features/counter/Counter";

const ProductListing = () => {
  const {products} = useSelector((state) => state.counter);

  console.log('products11', products);

  return (
    <div className="ui grid container">
      {/* <ProductComponent /> */}
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default ProductListing;
