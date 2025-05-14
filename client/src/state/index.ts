import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = globalSlice.actions;
export default globalSlice.reducer;
