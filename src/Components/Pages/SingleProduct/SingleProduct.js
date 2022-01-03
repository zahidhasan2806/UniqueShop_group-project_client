import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { image, title, price, _id } = props.product;

  return (
    <Col>
      <Link style={{
        "textDecoration": "none",
        "color": "black"
      }} to={`/product/${_id}`}>
        <Card className='card' style={{ height: "450px", border: "none" }} >
          <Card.Img variant="top" className='cardHover' src={`data:image/png;base64,${image}`} />
          <Card.Body>
            <Card.Title >{title}</Card.Title>
            <Card.Text>
              <h6 className='text-danger'> ${price} </h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default SingleProduct;