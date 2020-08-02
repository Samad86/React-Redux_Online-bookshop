import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./reducers"; // чтобы reducers объединялись в один reducer

export default () => {
  const store = createStore(rootReducer, applyMiddleware(logger)); // передаем в хранилище состояние и middleware

  return store;
};
