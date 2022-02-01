// import { setProducts } from "../redux/actions/productActions";  Vieux redux
import { setProducts } from "../features/counter/counterSlice";
import fetchProducts from "../services/productServices";

export const fetchProduct = () => async (dispatch) => {
  console.log('data dans le fetchProduct : ');
//   dispatch(fetchingProduct());

  try {
    const { data } = await fetchProducts();
    console.log("data : 111111111", data)

    if (data) {
      dispatch(setProducts({ data }));
    } else {
    //   dispatch(fetchingProductFailed());
    }
  } catch (error) {
    console.log('error : ', error);
    // dispatch(fetchingProductFailed());
}
};
