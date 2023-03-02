import { combineReducers } from "redux";
import Home from "./home";

const rootReducer = combineReducers({ Home });

export default rootReducer;
export type rootReducer = ReturnType<typeof rootReducer>;
