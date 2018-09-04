import { Observable } from "rxjs";
import * as Types from "../constains/actionTypes";

const fakeApi = name =>
    Observable.of({
        userId: 1,
        name,
        position: "Front-end",
        email: "hoangvy@gmail.com"
    }).delay(2000);

export default action$ =>
    action$.ofType(Types.FETCH_USER).mergeMap(action =>
        fakeApi(action.name)
            .map(response => ({
                type: Types.FETCH_USER_SUCCESS,
                payload: response
            }))
            .takeUntil(action$.ofType(Types.CANCEL_FETCHING_USER))
    );
