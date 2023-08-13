// lib
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// components
import App from "./App.jsx";

// utils
import "./index.css";
import routes from "./routes.js";

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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
