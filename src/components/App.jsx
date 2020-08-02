import React, { Component } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

import BookCard from "../containers/BookCard";
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";

class App extends Component {
  componentWillMount() {
    // перед тем, как компонент будет смонтирован (отображен пользователю), отправляем запрос на сервер, чтобы данные брались и отображались в хранилище
    const { setBooks } = this.props;
    axios.get("/books.json").then(({ data }) => {
      setBooks(data); // как только запрос выполняется, в хранилище будет передаваться список книг. Отправляем action setBooks в редьюсер. Если есть совпадение по ключу, то вносится изменение в хранилище
    });
  }

  render() {
    const { books, isReady } = this.props; // setFilter берем из actions/filter.js

    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..." // передаем свойства объекта book {...book} в компонент <BookCard />. Возвращает массив из компонентов <BookCard />
            : books.map((book, i) => <BookCard id={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
