/* 리듀서(Reducer) */

/* 타입에 따라 초기 상태를 구성합니다. */
import { createReducer } from "typesafe-actions";
import { DataAction, DataState } from "./types";
import { DATA, DATA_ERROR, DATA_SUCCESS } from "./actions";

// 상태 타입 - types.ts
const InitState: DataState = {
  // 리듀서에서 같은 타입을 이용합니다.
  appData: {
    data: { id: "", content: "", title: "", email: "" },
    error: null,
    loading: false,
  },
};

const ReducerSaga = createReducer<DataState, DataAction>(InitState, {
  [DATA]: (state) => ({
    ...state,
    appData: {
      data: { id: "", content: "", title: "", email: "" },
      error: null,
      loading: true,
    },
  }),
  [DATA_SUCCESS]: (state, action) => ({
    ...state,
    appData: {
      data: action.payload,
      error: null,
      loading: false,
    },
  }),
  [DATA_ERROR]: (state, action) => ({
    ...state,
    appData: {
      data: { id: "", content: "", title: "", email: "" },
      error: null,
      loading: false,
    },
  }),
});

export default ReducerSaga;
