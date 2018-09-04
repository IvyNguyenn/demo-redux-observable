import * as Types from "../constains/actionTypes";

const incrementEpic = action$ =>
    action$
        .ofType(Types.INCREMENT_DEBOUNCED)
        .debounceTime(500)
        .map(() => ({ type: Types.INCREMENT }));

export default incrementEpic;
