import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as filterActions from "../actions/filter";

import Filter from "../components/Filter";

const mapStateToProps = ({ books, filter }) => ({
  filterBy: filter.filterBy, // берем свойство filterBy из books (reducers/books.js)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter); // создание компонента высшего порядка, подключаем хранилище к компоненту Filter
