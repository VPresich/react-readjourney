import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import { getBooksPerPage, getRecommendedBooks } from "./operations";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    totalItems: 30,
    totalPages: 1,
    itemsPerPage: 8,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    resetPage(state) {
      state.currentPage = 1;
    },

    resetBooksState(state) {
      state.currentPage = 1;
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.totalItems = 30;
      state.totalPages = 1;
      state.itemsPerPage = 10;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBooksPerPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooksPerPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.perPage;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;
        state.items = action.payload.results;
      })

      .addCase(getBooksPerPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //------------------------------------------------------

      .addCase(getRecommendedBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecommendedBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.perPage;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;
        state.items = action.payload.results;
      })
      .addCase(getRecommendedBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //------------------------------------------------------
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.currentPage = 1;
        state.totalItems = 30;
        state.totalPages = 1;
        state.itemsPerPage = 8;
        state.error = null;
      });
  },
});

export const { setPage, resetNoticesState, resetPage } = booksSlice.actions;
export default booksSlice.reducer;
