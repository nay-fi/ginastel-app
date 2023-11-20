// Minuman.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import drinksData from "../drinks.json";

const Minuman = () => {
  return (
    <Container>
      <NavBar />
      <h1 className="my-4">Daftar Minuman</h1>
      <p>
        Berikut adalah daftar makanan yang cocok untuk dihidangkan bersama
        dengan Makanan Ginastel
      </p>
      <Row xs={1} md={3} className="g-4">
        {drinksData.map((drink) => (
          <Col key={drink.id}>
            <Card style={{ width: "18rem", marginBottom: "20px" }}>
              <Link
                to={`/rincian/${drink.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card.Img
                  variant="top"
                  src={drink.image}
                  alt={drink.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{drink.name}</Card.Title>
                <Card.Text>{drink.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Minuman;
