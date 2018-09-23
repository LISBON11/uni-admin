import { combineReducers } from "redux";
import boards from "./boards";
import tableRow from "./tableRow";

const allReducers = combineReducers({
    boards,
    tableRow
});

export default allReducers;
