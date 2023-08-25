import AnimationReducer from "../tailwind/animation/animation.reducer";
import DialogReducer from "../tailwind/dialog/dialog.reducer";

import {
  createStore,
  applyMiddleware,
  combineReducers
} from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = applyMiddleware(
  logger,
  thunk
);

const root = combineReducers({
  AnimationReducer,
  DialogReducer
});

const store = createStore(root,{},middlewares);

export default store;
