import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from "./reducers/index";

const enhance = applyMiddleware(
    thunk,
    createLogger({
      collapsed: true,
      predicate: () => true,
    }),
  );

const store = createStore(rootReducer,enhance);

export default store;