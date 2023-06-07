import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";

const counterIncrement = () => {
  return {
    type: "counter/Increment",
  };
};

const counterIncrementByN = (n) => {
  return {
    type: "counter/IncrementByN",
    payload: n,
  };
};

const initialStateCounter = {
  counter: 0,
};

const counterReducer = (state = initialStateCounter, action) => {
  switch (action.type) {
    case "counter/Increment":
      return { ...state, counter: state.counter + 1 };

    case "counter/IncrementByN":
      return { ...state, counter: state.counter + action.payload };

    default:
      return state;
  }
};

const userAdd = (user) => {
  return {
    type: "user/add",
    payload: user,
  };
};

const userAddAll = (users) => {
  return {
    type: "users/add",
    payload: users,
  };
};

const userFetch = () => {
  return {
    type: "users/fetchUsers",
  };
};

const initialStateUser = {
  users: [],
};

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case "user/add":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "users/add":
      console.log(...action.payload);
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: userReducer,
  counter: counterReducer,
});

const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", storeAPI.getState());
  return result;
};

const fetchUsersMiddleware = (storeAPI) => (next) => async (action) => {
  if (action.type === "users/fetchUsers") {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => storeAPI.dispatch(userAddAll(response.data)));
  }

  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, fetchUsersMiddleware)
);
// console.log("Initial State:", store.getState());
// const unsubcribe = store.subscribe(() =>
//   console.log("Updated State:", store.getState())
// );

// store.dispatch(counterIncrement());
// store.dispatch(counterIncrement());
// store.dispatch(counterIncrement());
// store.dispatch(userAdd("Zilen"));
// store.dispatch(userAdd("Vivek"));
store.dispatch(userFetch());

// unsubcribe();
