import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getBooksPerPage = createAsyncThunk(
  "books/page",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axiosInst.get("books/recommend", {
        params: {
          page,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecommendedBooks = createAsyncThunk(
  "books/recommended",
  async ({ page, limit, query }, thunkAPI) => {
    const newQuery = { ...query };
    delete newQuery.totalPages;
    try {
      const response = await axiosInst.get("books/recommend", {
        params: {
          page,
          limit,
          ...newQuery,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
