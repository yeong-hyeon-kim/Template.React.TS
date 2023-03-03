/* SAGA */
import { DATA_AsyncActions, DATA } from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { GetData, IData } from "../../api/data";

/* SAGA 만들기 */
function* GetDataSaga(action: ReturnType<typeof DATA_AsyncActions.request>) {
  try {
    /* 실제로 API를 호출하는 곳 */
    const appData: IData = yield call(GetData, action.payload);
    /* 성공 */
    yield put(DATA_AsyncActions.success(appData));
  } catch (e: any) {
    /* 실패 */
    yield put(DATA_AsyncActions.failure(e));
  }
}

export function* DataSaga() {
  yield takeEvery(DATA, GetDataSaga);
}
