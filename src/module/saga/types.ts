/* 타입(Type) */

// 리듀서에서 사용할 상태 타입을 정의 합니다.
import { ActionType } from "typesafe-actions";
import { IData } from "../../api/data";
import * as actions from "./actions";

export type DataAction = ActionType<typeof actions>;
export type DataState = {
  appData: {
    data: IData;
    error: Error | null;
    loading: boolean;
  };
};
