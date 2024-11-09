/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HeroPage from "./Pages/HeroPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import LocateUser from "./Pages/Location";
import ContactUs from "./Pages/ContactUs";
import ProfilePage from "./Pages/Profile";
import Attendance from "./Pages/Attendece";
import About from "./Pages/About";
import RefreshHandler from "./RefreshHAndler";
import { ToastContainer } from "react-toastify";

function App() {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const PrivateRoute = ({ element }) => {
    return isAuthorised ? element : <Navigate to="/login" />;
  };

  const IsConstructor = ({ element }) => {
    const isUserAuthorized =
      isAuthorised && localStorage.getItem("loggedInUser") === "dev jangam";

    if (!isUserAuthorized) {
      alert("Only Admins can access this page ");
    }

    return isUserAuthorized ? element : <Navigate to="/" replace />;
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <RefreshHandler setIsAuthorised={setIsAuthorised} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute element={<HeroPage isAuthorised={isAuthorised} />} />
          }
        />
        <Route
          path="/register"
          element={<RegisterPage isAuthorised={isAuthorised} />}
        />
        <Route
          path="/login"
          element={<LoginPage setIsAuthorised={setIsAuthorised} />}
        />

        <Route
          path="/location"
          element={
            <IsConstructor
              element={<LocateUser isAuthorised={isAuthorised} />}
            />
          }
        />
        <Route
          path="/contact"
          element={<ContactUs isAuthorised={isAuthorised} />}
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute
              element={<ProfilePage isAuthorised={isAuthorised} />}
            />
          }
        />
        <Route
          path="/Attendence"
          element={
            <PrivateRoute
              element={<Attendance isAuthorised={isAuthorised} />}
            />
          }
        />
        <Route path="/about" element={<About isAuthorised={isAuthorised} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
