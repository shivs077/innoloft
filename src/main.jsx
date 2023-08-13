// lib
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

// components
import App from "./App.jsx";

// utils
import "./index.css";
import routes from "./routes.js";
import store from "./redux/store.js";
import { getConfiguration } from "./redux/slices/configurationSlice.js";

store.dispatch(getConfiguration());

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {routes.map(({ index, path, element: Element }, routeIndex) => (
        <Route key={routeIndex} index={index} path={path} element={<Element />} />
      ))}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ReduxProvider>
);
