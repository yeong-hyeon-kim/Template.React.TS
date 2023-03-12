/* 액션(Action) */
import { createAsyncAction } from "typesafe-actions";
import { IData } from "../../api/data";
import { AxiosError } from "axios";

export const DATA = "GET_DATA";
export const DATA_SUCCESS = "SUCCESS";
export const DATA_ERROR = "ERROR";

// 액션 타입을 지정합니다.
// createAsyncAction
// - request > DATA
// - success > DATA_SUCCESS
// - failure > DATA_ERROR
export const DATA_AsyncActions = createAsyncAction(
  DATA,
  DATA_SUCCESS,
  DATA_ERROR
)<string, IData, AxiosError>();
