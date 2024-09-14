import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const addBookFromRecommend = createAsyncThunk(
  "books/addBookFromRecommend",
  async (id, thunkAPI) => {
    console.log("id Recommended", id);
    try {
      const response = await axiosInst.post(`books/add/${id}`);
      console.log("response.data", response.data);
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
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.delete(`books/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchFavoritesByIds = createAsyncThunk(
//   "notises/getFavoritsByIds",
//   async (ids, thunkAPI) => {
//     try {
//       const promises = ids.map((id) => axiosInst.get(`notices/${id}`));
//       const responses = await Promise.all(promises);
//       const data = responses.map((response) => response.data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addFavorite = createAsyncThunk(
//   "notises/addFavorite",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axiosInst.post(`notices/favorites/add/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addPet = createAsyncThunk("pets/add", async (data, thunkAPI) => {
//   try {
//     const response = await axiosInst.post(`users/current/pets/add`, data);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const removePetById = createAsyncThunk(
//   "pets/removePetById",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axiosInst.delete(
//         `users/current/pets/remove/${id}`
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getViewedPetById = createAsyncThunk(
//   "notises/getViewedById",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axiosInst.get(`notices/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
