/* SAGA */
import { DATA_AsyncActions, DATA } from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { GetData, IData } from "../../api/data";

function* GetDataSaga(action: ReturnType<typeof DATA_AsyncActions.request>) {
  try {
    const appData: IData = yield call(GetData, action.payload);
    /* 성공 */
    yield put(DATA_AsyncActions.success(appData));
  } catch (e: any) {
    /* 실패 */
    yield put(DATA_AsyncActions.failure(e));
  }
}

/* 외부에서 호출되는 제네레이터 함수 */
export function* DataSaga() {
  yield takeEvery(DATA, GetDataSaga);
}
