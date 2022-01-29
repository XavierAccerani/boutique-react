import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valeur: 42,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: { initialState },
  reducer: {
      increment: (state) => {state.value = state.value + 1},
      decrement: (state) => {state.value = state.value - 1},
      incrementByAmount: (state, action ) => {state.value = state.value + action.payload}

  }
});

export const {increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
