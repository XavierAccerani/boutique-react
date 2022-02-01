import { increment, decrement } from "./counterSlice"; 

export const incrementCounter = () => async (dispatch) => {

    // ici on fait les appels au services (API) qui osnt asynchrone
    //par exemple :  const products  = await service.fetchProducts()
    // une fois qu'on a les products on les affiche 
    dispatch(increment())
  
};
