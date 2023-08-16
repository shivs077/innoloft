// lib
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import Header from "./components/header/Header.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Spinner from "./components/spinner/Spinner.jsx";
import ErrorModal from "./components/errorModal/ErrorModal";

// utils
import "./App.css";
import { configurationSelector } from "./redux/slices/configurationSlice";

function App() {
  const { isLoading, hasError } = useSelector(configurationSelector);

  if (isLoading) return <Spinner />;

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="flex h-full mx-auto max-w-[1280px] w-full gap-6">
        {hasError ? (
          <ErrorModal />
        ) : (
          <>
            <Sidebar />
            <Outlet />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
