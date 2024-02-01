import react from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  state: initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;