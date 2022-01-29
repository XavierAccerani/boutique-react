import axios from "axios";

const fetchProducts = async () => {
  return await axios.get("https://fakestoreapi.com/products");
};

export default fetchProducts;
