// lib
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiClient from "../../api/apiClient";

let appId = import.meta.env.VITE_APP_ID || 1;

export const getConfiguration = createAsyncThunk("configuration/getConfiguration", async () => {
  try {
    const response = await apiClient.get(`/configuration/${appId}/`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const initialState = {
  configuration: {},
  isLoading: false,
  hasError: false,
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConfiguration.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getConfiguration.fulfilled, (state, action) => {
        state.configuration = action.payload;
        state.isLoading = false;
        state.hasError = false;

        document.documentElement.style.setProperty("--primary-color", action.payload.mainColor);
      })
      .addCase(getConfiguration.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { updateState } = configurationSlice.actions;

// Selectors
export const configurationSelector = (state) => state.configuration;

export default configurationSlice.reducer;
