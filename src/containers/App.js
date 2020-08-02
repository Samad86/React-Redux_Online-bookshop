import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as booksActions from "../actions/books";
import orderBy from "lodash/orderBy"; // декларативный подход, вытаскиваем из библиотеки lodash только 1 файл (метод) orderBy
/* import { orderBy } from "lodash"; // императивный подход, подключаем всю библиотеку lodash и далее вытаскиваем из нее метод orderBy */

import App from "../components/App";

// Функция сортировки
const sortBy = (books, filterBy) => {
  // return orderBy(books, "price", "desc"); // возвращает новый отсортированный массив. books - массив для сортировки, "price" - ключ, по которому сортируем, "desc" - направление сортировки (по убыванию)
  switch (filterBy) {
    case "popular":
      return orderBy(books, "rating", "desc");
    case "price_high":
      return orderBy(books, "price", "desc"); // возвращает новый отсортированный массив. books - массив для сортировки, "price" - ключ, по которому сортируем, "desc" - направление сортировки (по убыванию)
    case "price_low":
      return orderBy(books, "price", "asc"); // возвращает новый отсортированный массив. books - массив для сортировки, "price" - ключ, по которому сортируем, "asc" - направление сортировки (по возрастанию)
    case "author":
      return orderBy(books, "author", "asc");
    default:
      return books;
  }
};

// Функции поиска книг
// Реализация поиска: фильтрация по введенному запросу, сортировка найденных товаров по цене, автору, отстранение товаров, которые не подходят по введенному запросу
const filterBooks = (books, searchQuery) =>
  books.filter(
    (o) =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  ); // фильтруем книги по запросу, который ввели в searchQuery; o - object (книга из массива books); фильтрация по названию книги (title) и автору (author) из массива объектов books.json

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy); // сначала фильтруем, возвращаем массив, затем передаем в функцию sortBy, сортируем и возвращаем отсортированный массив
};

const mapStateToProps = ({ books, filter }) => ({
  // принимает 1 параметр - состояние хранилища. Параметр - объект, вытаскикаем из объекта свойство books. Подписка компонента-контейнера на обновления хранилища
  books:
    books.items &&
    searchBooks(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(booksActions, dispatch),
}); // Объект с генераторами действий. Вызывается объект со свойством setBooks. Этот объект вызывает функцию setBooks (файл actions/books.js). Эта функция возвращает объект со свойствами type и payload. После того, как этот объект вернулся, отправляем его в хранилище. Т.е. в переменной mapDispatchToProps хранятся все actions, которые были прикручены с помощью dispatch

export default connect(mapStateToProps, mapDispatchToProps)(App); // создание компонента высшего порядка
