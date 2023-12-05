// store/modules/dashboard/dashboardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  searchProducts: [],
  currentPage: 1,
  totalPageCount: 0,
  isLoading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchProducts: (state, action) => {
      state.searchProducts = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPageCount: (state, action) => {
      state.totalPageCount = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setSearchProducts,
  setCurrentPage,
  setTotalPageCount,
  setIsLoading,
  setError,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
