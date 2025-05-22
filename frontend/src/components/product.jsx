import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
       <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Title as="div">
          <strong>{product.title}</strong>
        </Card.Title>
        <Card.Text as="div">
          <div className="my-2">{product.review} / 5</div>
        </Card.Text>
        <Button variant="primary">⭐ Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;

