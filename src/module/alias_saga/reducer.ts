/* 리듀서(Reducer) */

/* 리듀서는 순수 함수 */
// 순수 함수 : 부수효과가 없는 함수 즉, 어떤 함수에 동일한 인자를 주었을 때 항상 같은 값을 리턴하는 함수 
// 외부의 상태를 변경하지 않는 함수

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

// 요청 시 상태를 변화 시키지 않으려면 `DATA` 역션을 주석 처리합니다.
const SagaReducer = createReducer<DataState, DataAction>(InitState, {
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

export default SagaReducer;
