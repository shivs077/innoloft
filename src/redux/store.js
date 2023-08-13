// lib
import { configureStore } from "@reduxjs/toolkit";

import configurationReducer from "./slices/configurationSlice";

const store = configureStore({
  reducer: {
    configuration: configurationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
