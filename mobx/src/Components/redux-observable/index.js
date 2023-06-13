// store.js
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { fetchDataRequest } from "./actions.js";
import rootReducer from "./reducers.js";
import rootEpic from "./rootEpic.js";

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

store.dispatch(fetchDataRequest());

console.log(store.getState());

export default store;
