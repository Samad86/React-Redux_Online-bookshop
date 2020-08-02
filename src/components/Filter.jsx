import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { setSearchQuery } from "../actions/filter";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  // вытаскиваем из props экшены setFilter, setSearchQuery и свойство filterBy
  <Menu secondary>
    <Menu.Item
      active={filterBy === "all"}
      onClick={setFilter.bind(this, "all")} // передаем контекст
    >
      Все
    </Menu.Item>
    <Menu.Item
      active={filterBy === "popular"}
      onClick={setFilter.bind(this, "popular")}
    >
      Популярные
    </Menu.Item>
    <Menu.Item
      active={filterBy === "price_high"}
      onClick={setFilter.bind(this, "price_high")}
    >
      Цена (сначала дорогие)
    </Menu.Item>
    <Menu.Item
      active={filterBy === "price_low"}
      onClick={setFilter.bind(this, "price_low")}
    >
      Цена (сначала дешевые)
    </Menu.Item>
    <Menu.Item
      active={filterBy === "author"}
      onClick={setFilter.bind(this, "author")}
    >
      Автор
    </Menu.Item>
    <Menu.Item>
      <Input
        icon="search"
        onChange={(e) => setSearchQuery(e.target.value)} // значение, введенное в поле input
        value={searchQuery}
        placeholder="Введите запрос..."
      />
    </Menu.Item>
  </Menu>
);

export default Filter;
