import * as Types from "../constains/actionTypes";
const initialState = {};

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
