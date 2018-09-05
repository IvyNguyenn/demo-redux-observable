import * as Types from "../constains/actionTypes";

export const searchRequest = keyword => ({
    type: Types.SEARCH_REQUEST,
    keyword
});

export const searchCancel = () => ({
    type: Types.SEARCH_CANCEL
});
