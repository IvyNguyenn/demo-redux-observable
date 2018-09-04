import { combineReducers } from "redux";
import pingpong from "./pingpong";
import couter from "./couter";
import users from "./users";
import updown from "./updown";

const appReducer = combineReducers({
    pingpong,
    couter,
    users,
    updown
});

export default appReducer;
