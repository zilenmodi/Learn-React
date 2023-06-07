import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvider";

const LandingPage = () => {
  const value = useContext(authContext);
  const { dispatch } = value;
  const navigate = useNavigate();
  return (
    <>
      <h1>Landing Page</h1>
      <button
        onClick={() => {
          dispatch({ type: "LOG_OUT" });
          navigate("/login");
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default LandingPage;
