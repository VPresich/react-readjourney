import { createSlice } from "@reduxjs/toolkit";
import { startReading, stopReading } from "./operations";

const readingSlice = createSlice({
  name: "reading",
  initialState: {
    book: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setReadingBook(state, action) {
      state.book = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startReading.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startReading.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.book = action.payload;
      })

      .addCase(startReading.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //------------------------------------------------------

      .addCase(stopReading.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(stopReading.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.book = action.payload;
      })

      .addCase(stopReading.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default readingSlice.reducer;
export const { setReadingBook } = readingSlice.actions;
