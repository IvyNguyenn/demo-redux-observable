import * as Types from "../constains/actionTypes";

const decrementEpic = action$ =>
    action$
        .ofType(Types.DECREMENT_DEBOUNCED)
        .debounceTime(500)
        .map(() => ({ type: Types.DECREMENT }));

export default decrementEpic;
