import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "All",
};

const invoiceFilterSlice = createSlice({
  name: "invoiceFilter",
  initialState,
  reducers: {
    statusSelected: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default invoiceFilterSlice.reducer;
export const { statusSelected } = invoiceFilterSlice.actions;
