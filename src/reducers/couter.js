import * as Types from "../constains/actionTypes";
const initialState = 0;

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.INCREASE_DONE:
            return state + 1;

        case Types.DECREASE:
            return state - 1;

        case Types.STOP_COUNTER:
            return 0;

        default:
            return state;
    }
};

export default reducer;
