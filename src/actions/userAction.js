import * as Types from "../constains/actionTypes";

export const fetchUser = name => ({ type: Types.FETCH_USER, name });
export const cancelRequest = () => ({ type: Types.CANCEL_FETCHING_USER });
