import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uniqBy from "lodash/uniqBy";

import * as cartActions from "../actions/cart";
import Menu from "../components/Menu";

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0), // суммируем цены товаров в корзине; cart.items из reducers/cart.js; свойство price в массиве объектов в books.json
  count: cart.items.length, // количество книг в корзине
  items: uniqBy(cart.items, (o) => o.id), // если в корзину добавлены несколько одинаковых книг, то они не будут повторяться в корзине
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu); // создание компонента высшего порядка, подключаем хранилище к компоненту Menu
