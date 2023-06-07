import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvider";

const Login = () => {
  const value = useContext(authContext);
  const { dispatch } = value;
  const navigate = useNavigate();
  return (
    <>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          dispatch({ type: "LOG_IN" });
          navigate("/");
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
