import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../actions/productActions";
import counterSlice from './counterSlice';
import { increment, decrement } from "./counterSlice";


export function Counter() {
  const  {products} = useSelector((state) => state.counter);
  console.log("le count : ",products);

//   const { increment, decrement } = counterSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchProduct());
      
  },[])

  useEffect(()=> {
    console.log('DASN useEffect 2 : ', products);
  },[products])
  return (
    <div>
      <div>
        <button aria-label="incrementer" onClick={() => dispatch(increment())}>
          incrementation
        </button>

        <button aria-label="decrementer" onClick={() => dispatch(decrement())}>
          decrementation
        </button>
      </div>
    </div>
  );
}
