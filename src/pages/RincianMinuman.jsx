// RincianMinuman.jsx
import React from "react";
import { useParams } from "react-router-dom";
import drinksData from "../drinks.json";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Container, Card } from "react-bootstrap";

const RincianMinuman = () => {
  const { id } = useParams();
  const drink = drinksData.find((f) => f.id === parseInt(id, 10));

  if (!drink) {
    return <div>Minuman tidak ditemukan</div>;
  }

  return (
    <Container>
      <NavBar />
      <h1 className="my-4">Detail Minuman {drink.name}</h1>
      <Card style={{ width: "24rem" }}>
        <Link
          to={`/minuman`}
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
          <Card.Text>{drink.rincian}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RincianMinuman;
