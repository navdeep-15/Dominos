import { combineReducers } from "redux";
import cart_reducer from './cart_reducer';
const rootReducer = combineReducers({ cart_reducer });

export default rootReducer;