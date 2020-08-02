import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";

const BookCard = (book) => {
  const { title, author, image, price, rating, addToCart, addedCount } = book; // свойства объекта книги из файла books.json; addToCart из actions/cart.js

  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="rub" />
          {price}
        </a>
        <div>
          <Icon name="star" />
          {rating}
        </div>
      </Card.Content>
      <Button onClick={addToCart.bind(this, book)}>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default BookCard;
