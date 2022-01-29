import { setProducts } from "../redux/actions/productActions";
import productServices from "../services/productServices";

export const fetchProduct = () => async (dispatch) => {
//   dispatch(fetchingProduct());

  try {
    const { data } = await productServices.fetchProducts();
    console.log("data : ", data)

    if (data) {
      dispatch(setProducts({ ...data }));
    } else {
    //   dispatch(fetchingProductFailed());
    }
  } catch (error) {
    // dispatch(fetchingProductFailed());
}
};
