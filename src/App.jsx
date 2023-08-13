// lib
import { Outlet } from "react-router-dom";

// components

// utils
import "./App.css";

function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <Outlet />
    </div>
  );
}

export default App;
