// lib
import { configureStore } from "@reduxjs/toolkit";

import configurationReducer from "./slices/configurationSlice";
import optionSlice from "./slices/optionSlice";

const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    options: optionSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
