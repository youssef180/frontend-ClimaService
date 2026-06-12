import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ErrorsReducer from "./ErrorsReducer";
import ProductReducer from "./ProductReducer";
import CommandeReducer from "./CommandeReducer";

const rootReducer = combineReducers({
	UserReducer,
	ErrorsReducer,
	ProductReducer,
	CommandeReducer,
});

export default rootReducer;
