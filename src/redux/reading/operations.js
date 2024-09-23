import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const startReading = createAsyncThunk(
  "books/startReading",
  async (data, thunkAPI) => {
    console.log("startReading", data);
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
    console.log("stopReading", data);
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
    console.log("deleteReading", data);
    try {
      const response = await axiosInst.delete("books/reading", {
        params: {
          ...data,
        },
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
