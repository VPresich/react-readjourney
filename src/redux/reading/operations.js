import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const startReading = createAsyncThunk(
  "books/startReading",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInst.get("books/reading/start", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const stopReading = createAsyncThunk(
  "books/stopReading",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInst.get("books/reading/stop", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
