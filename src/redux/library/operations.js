import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const addBookFromRecommend = createAsyncThunk(
  "books/addBookFromRecommend",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.post(`books/add/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInst.post("books/add", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeBook = createAsyncThunk(
  "books/removeBook",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.delete(`books/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserBooks = createAsyncThunk(
  "books/getUserBook",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get(`books/own`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
