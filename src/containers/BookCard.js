import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";

import BookCard from "../components/BookCard";

const mapStateToProps = ({ cart }, { id }) => ({
  // {cart} - props, кторые прокинуты через redux (из редьюсера); { id } - props самого компонента (book в components/BookCard.jsx), вытаскиваем id из массива объектов в books.json
  addedCount: cart.items.reduce(
    (count, book) => count + (book.id === id ? 1 : 0),
    0 // если id книги совпадает с id книги, добавленной в корзину, то count + 1; если нет, то count + 0. И в итоге передаем count в addedCount
  ),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard); // создание компонента высшего порядка, подключаем хранилище к компоненту BookCard
