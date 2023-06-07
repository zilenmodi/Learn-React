import React from "react";
import { createContext } from "react";
import { useReducer } from "react";

const initialState = JSON.parse(localStorage.getItem("users")) || {
  userData: {},
  isLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem(
        "users",
        JSON.stringify({ ...state, isLogin: true })
      );
      return { ...state, isLogin: true };
    case "LOG_OUT":
      localStorage.setItem(
        "users",
        JSON.stringify({ ...state, isLogin: false })
      );
      return { ...state, isLogin: false };
    default:
      state;
  }
};

export const authContext = createContext();

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthProvider;
