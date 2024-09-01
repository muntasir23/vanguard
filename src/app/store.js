import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
import costsReducer from "../features/costs/costSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    costs: costsReducer,
  },
});
