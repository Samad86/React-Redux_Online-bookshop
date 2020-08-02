const initialState = {
  isReady: false, // говорит о том, что данный редьюсер (список книг) еще неготов, не загрузился
  items: null,
}; // начальное состояние

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        items: action.payload,
        isReady: true, // говорит о том, что данный редьюсер был успешно загружен и пользователю отображается список его книг
      };
    case "SET_IS_READY":
      return {
        ...state,
        isReady: action.payload,
      }; // ключ на то, что isReady: true
    default:
      return state;
  }
};
