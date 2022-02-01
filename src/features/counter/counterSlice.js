import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 42,
  messageInfo : {
      message: null,
      severite: null
  },

  products: []
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload;
    },
    setProducts: (state, action) => {
        console.log("IN slice : ", action.payload.data);
        return {...state , products: action.payload.data};

      },
  },
});

export const { increment, decrement, incrementByAmount, setProducts } = counterSlice.actions;

export default counterSlice.reducer;
