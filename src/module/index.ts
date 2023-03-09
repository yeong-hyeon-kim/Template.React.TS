import { combineReducers } from "redux";
import Home from "./home";
import { all } from "redux-saga/effects";

/* 사가 리듀서 */
import SagaReducer from "./alias_saga/reducer";
/* 비동기 코드를 실행하는 제네레이터 */
import { DataSaga } from "./alias_saga";

/* 루트 리듀서 */
const rootReducer = combineReducers({ Home, SagaReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([DataSaga()]);
}
