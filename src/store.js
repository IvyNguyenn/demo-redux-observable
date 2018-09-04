import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import appReducer from "./reducers";
import { rootEpic } from "./epics";

const epicMiddleware = createEpicMiddleware(rootEpic);

export default createStore(appReducer, applyMiddleware(epicMiddleware));
