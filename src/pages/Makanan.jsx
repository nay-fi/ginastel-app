// Makanan.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import foodsData from "../foods.json";

const Makanan = () => {
  return (
    <Container>
      <h3 className="my-4">Daftar Makanan</h3>
      <p className=" text-lg-start">
        Berikut adalah daftar makanan yang cocok untuk dihidangkan bersama
        dengan Teh Ginastel
      </p>
      <Row xs={1} md={3} className="g-4">
        {foodsData.map((food) => (
          <Col key={food.id}>
            <Card style={{ width: "18rem", marginBottom: "20px" }}>
              <Link
                to={`/detail/${food.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card.Img
                  variant="top"
                  src={food.image}
                  alt={food.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Makanan;
