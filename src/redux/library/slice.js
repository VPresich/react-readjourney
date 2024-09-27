import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import {
  addBookFromRecommend,
  removeBook,
  getUserBooks,
  addBook,
} from "./operations";

const librarySlice = createSlice({
  name: "library",
  initialState: {
    items: [],
    isAdding: false,
    isDeleting: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      //---------------------------------------------
      .addCase(addBookFromRecommend.pending, (state) => {
        state.isAdding = true;
        state.error = null;
      })
      .addCase(addBookFromRecommend.fulfilled, (state, action) => {
        state.isAdding = false;
        state.error = false;
        const bookExists = state.items.find(
          (book) => book._id === action.payload._id
        );
        if (!bookExists) {
          state.items.push(action.payload);
        }
      })
      .addCase(addBookFromRecommend.rejected, (state, action) => {
        state.isAdding = false;
        state.error = action.payload;
      })

      // ---------------------------------------------
      .addCase(addBook.pending, (state) => {
        state.isAdding = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isAdding = false;
        state.error = false;
        const bookExists = state.items.find(
          (book) => book._id === action.payload._id
        );
        if (!bookExists) {
          state.items.push(action.payload);
        }
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isAdding = false;
        state.error = action.payload;
      })

      // ---------------------------------------------
      .addCase(removeBook.pending, (state) => {
        state.isDeleting = true;
        state.error = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.payload.id
        );
        state.isDeleting = false;
        state.error = null;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
      })
      //-------------------------------------------

      .addCase(getUserBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getUserBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //---------------------------------------------
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.isAdding = false;
        state.isDeleting = false;
        state.error = null;
      });
    // -----------------------------------------------
  },
});

export default librarySlice.reducer;
