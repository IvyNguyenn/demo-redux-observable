import * as Types from "../constains/actionTypes";

let reducer = (state = { isPinging: false }, action) => {
    switch (action.type) {
        case Types.PING:
            return { isPinging: true };

        case Types.PONG:
            return { isPinging: false };

        default:
            return state;
    }
};

export default reducer;
