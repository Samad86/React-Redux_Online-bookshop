import { combineReducers } from "redux";

import books from "./books";
import cart from "./cart";
import filter from "./filter";

export default combineReducers({
  // Вспомогательная функция combineReducers преобразует объект, значениями которого являются различные функции редюсеры, в одну функцию редюсер
  books,
  cart,
  filter,
});
