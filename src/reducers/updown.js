import * as Types from "../constains/actionTypes";

let reducer = (state = 0, action) => {
    switch (action.type) {
        case Types.INCREMENT:
            return state + 1;
        case Types.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

export default reducer;
