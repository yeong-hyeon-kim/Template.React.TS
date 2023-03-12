import { combineReducers } from "redux";
import Home from "./home";
import { all } from "redux-saga/effects";

/* 사가 리듀서 */
import SagaReducer from "./alias_saga/reducer";
/* 비동기 코드를 실행하는 제네레이터 */
import { DataSaga } from "./alias_saga";

/* 루트 리듀서 */
// 리덕스 미듈웨어 리듀서도 포함
const rootReducer = combineReducers({ Home, SagaReducer });

// 루트 리듀서로 외부에서 combineReducers에 정의된 사용할 수 있도록 내보내기
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

// index.tsx에서 처음 실행
export function* rootSaga() {
  yield all([DataSaga()]);
}
