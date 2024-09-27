import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const startReading = createAsyncThunk(
  "books/startReading",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInst.post("books/reading/start", data);
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
      const response = await axiosInst.post("books/reading/finish", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReading = createAsyncThunk(
  "books/deleteReading",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInst.delete("books/reading", {
        params: {
          ...data,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
