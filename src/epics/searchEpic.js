import { Observable } from "rxjs";
import * as Types from "../constains/actionTypes";

const fakeApi = keyword =>
    Observable.of({
        keyword
    }).delay(3000);

const searchEpic = action$ =>
    action$.ofType(Types.SEARCH_REQUEST).switchMap(action =>
        fakeApi(action.keyword)
            .map(response => ({
                type: Types.SEARCH_SUCCESS,
                payload: response
            }))
            .takeUntil(action$.ofType(Types.SEARCH_CANCEL))
    );

export default searchEpic;

// switchMap: receive last request
// exhaustMap : receive first request
