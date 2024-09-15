import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    query: {
      title: "",
      author: "",
    },
  },
  reducers: {
    saveQuery: (state, action) => {
      console.log(action.payload);
      state.query = action.payload;
    },

    resetQuery: (state) => {
      state.query = {
        title: "",
        author: "",
      };
    },
  },
});

export const { saveQuery, resetQuery } = filtersSlice.actions;
export default filtersSlice.reducer;
