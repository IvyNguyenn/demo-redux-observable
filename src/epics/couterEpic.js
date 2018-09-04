import { Observable } from "rxjs";
import * as Types from "../constains/actionTypes";

const couterEpic = action$ =>
    action$.ofType(Types.INCREASE).mergeMap(() =>
        Observable.timer(0, 30)
            .takeUntil(Observable.timer(3000))
            .map(() => ({ type: Types.INCREASE_DONE }))
            .takeUntil(action$.ofType(Types.STOP_COUNTER))
    );

export default couterEpic;
