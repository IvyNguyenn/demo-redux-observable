import * as Types from "../constains/actionTypes";

const pingEpic = action$ =>
    action$
        .ofType(Types.PING)
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: Types.PONG });

export default pingEpic;
