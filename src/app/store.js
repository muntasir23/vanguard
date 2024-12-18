import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
import invoiceFilterReducer from "../features/invoiceFilter/invoiceFilterSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    invoiceFilter: invoiceFilterReducer,
  },
});
