import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  addProducts,
  deleteProducts,
  editProducts,
  getProducts,
} from "./productsAPI";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProducts();
    return products;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data) => {
    const products = await addProducts(data);
    return products;
  }
);

export const changeProduct = createAsyncThunk(
  "products/changeProduct",
  async ({ id, data }) => {
    const products = await editProducts(id, data);
    return products;
  }
);

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    const products = await deleteProducts(id);
    return products;
  }
);

//slice

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.products = [];
      })
      .addCase(createProduct.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(changeProduct.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const indexToUpdate = state.products.findIndex(
          (p) => p.id === action.payload.id
        );

        state.products[indexToUpdate] = action.payload;
      })
      .addCase(changeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeProduct.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        console.log(action);

        state.isLoading = false;
        state.products = state.products.filter((p) => p.id !== action.meta.arg);
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default productsSlice.reducer;
