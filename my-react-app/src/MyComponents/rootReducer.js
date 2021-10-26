import { combineReducers } from "redux";
import thunkReducer from "../MyComponents/ReduxThunkExample/reducer";
import {reducer} from "../App";

export const rootReducer = combineReducers ({
    simpleRedux: reducer,
    reduxThunk: thunkReducer,
});