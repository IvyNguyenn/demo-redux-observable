import { combineReducers } from "redux";
import pingpong from "./pingpong";
import couter from "./couter";
import users from "./users";
import updown from "./updown";
import search from "./search";

const appReducer = combineReducers({
    pingpong,
    couter,
    users,
    updown,
    search
});

export default appReducer;
