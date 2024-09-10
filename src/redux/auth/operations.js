import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInst, setAuthHeader, clearAuthHeader } from "../../api/axiosInst";

export const register = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const resp = await axiosInst.post("users/signup", credentials);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const resp = await axiosInst.post("users/signin", credentials);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("users/signout", async (_, thunkAPI) => {
  try {
    await axiosInst.post("users/signout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      // Reading the token from the state via getState()
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;

      // Add it to the HTTP header and perform the request
      setAuthHeader(savedToken);
      const response = await axiosInst.get("users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      // Reading the token from the state via getState()
      const state = getState();
      const savedToken = state.auth.token;

      // If there is no token, exit without performing any request
      return savedToken !== null;
    },
  }
);
