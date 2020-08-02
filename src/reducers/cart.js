const initialState = {
  items: [],
}; // начальное состояние

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((o) => o.id !== action.payload), // удаление книги из корзины по ее id; возвращается новый массив книг, но уже без этой книги
      };
    default:
      return state;
  }
};
