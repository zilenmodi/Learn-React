import React from "react";
import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authContext } from "./AuthProvider";
import LandingPage from "./LandingPage";
import Login from "./Login";

const App = () => {
  const value = useContext(authContext);
  const { state } = value;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              state.isLogin ? <LandingPage /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/login"
            element={
              state.isLogin === false ? <Login /> : <Navigate to="/" replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
