import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addCost, deleteCost, editCost, getCosts } from "./costAPI";

const initialState = {
  costs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchCosts = createAsyncThunk("costs/fetchProducts", async () => {
  const costs = await getCosts();
  return costs;
});

export const createCost = createAsyncThunk(
  "products/createCost",
  async (data) => {
    const costs = await addCost(data);
    return costs;
  }
);

export const changeCost = createAsyncThunk(
  "products/changeCosts",
  async ({ id, data }) => {
    const costs = await editCost(id, data);
    return costs;
  }
);

export const removeCost = createAsyncThunk(
  "products/removeCost",
  async (id) => {
    const costs = await deleteCost(id);
    return costs;
  }
);

//slice

const costsSlice = createSlice({
  name: "costs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.costs = action.payload;
      })
      .addCase(fetchCosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.costs = [];
      })
      .addCase(createCost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createCost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.costs.push(action.payload);
      })
      .addCase(createCost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(changeCost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeCost.fulfilled, (state, action) => {
        state.isLoading = false;
        const indexToUpdate = state.costs.findIndex(
          (p) => p.id === action.payload.id
        );

        state.costs[indexToUpdate] = action.payload;
      })
      .addCase(changeCost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeCost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeCost.fulfilled, (state, action) => {
        console.log(action);

        state.isLoading = false;
        state.costs = state.costs.filter((p) => p.id !== action.meta.arg);
      })
      .addCase(removeCost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default costsSlice.reducer;
