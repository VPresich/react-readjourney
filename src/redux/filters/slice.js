import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    query: {
      title: "",
      author: "",
    },
    library: { status: "All books" },
  },
  reducers: {
    saveQuery: (state, action) => {
      state.query = action.payload;
    },

    resetQuery: (state) => {
      state.query = {
        title: "",
        author: "",
      };
    },

    saveBooksStatus: (state, action) => {
      state.library.status = action.payload;
    },
  },
});

export const { saveQuery, resetQuery, saveBooksStatus } = filtersSlice.actions;
export default filtersSlice.reducer;
