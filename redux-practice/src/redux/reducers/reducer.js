import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";

// combineReducers는 함수
const reducer = combineReducers({
  todos,
  filter,
});

export default reducer;
