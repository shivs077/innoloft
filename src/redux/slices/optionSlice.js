// lib
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

export const fetchTrlOptions = createAsyncThunk("options/trl", async () => {
  try {
    const response = await apiClient.get(`/trl/`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const initialState = {
  trlOptions: undefined,
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrlOptions.fulfilled, (state, action) => {
        state.trlOptions = action.payload;
      })
      .addCase(fetchTrlOptions.rejected, (state) => {
        console.log("here");
        state.trlOptions = [];
      });
  },
});

export const trlOptionsSelector = (state) => state.options.trlOptions;

export default optionsSlice.reducer;
