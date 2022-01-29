import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
