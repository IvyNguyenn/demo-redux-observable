import { combineEpics } from "redux-observable";
import pingEpic from "./pingEpic";
import couterEpic from "./couterEpic";
import userEpic from "./userEpic";
import incrementEpic from "./incrementEpic";
import decrementEpic from "./decrementEpic";

export const rootEpic = combineEpics(
    pingEpic,
    couterEpic,
    userEpic,
    incrementEpic,
    decrementEpic
);
