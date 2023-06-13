import { combineEpics } from "redux-observable";
import { fetchDataEpic } from "./epics.js";

const rootEpic = combineEpics(fetchDataEpic);

export default rootEpic;
