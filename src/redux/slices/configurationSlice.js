// lib
import { createSlice } from "@reduxjs/toolkit";

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
});

// Action creators are generated for each case reducer function
export const { updateState } = configurationSlice.actions;

// Selectors
export const configurationSelector = (state) => state.configuration;

export default configurationSlice.reducer;
