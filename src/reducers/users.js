import * as Types from "../constains/actionTypes";

let reducer = (state = {}, action) => {
    switch (action.type) {
        case Types.FETCH_USER_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
