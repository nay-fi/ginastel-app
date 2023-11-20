// DetailMakanan.jsx
import React from "react";
import { useParams } from "react-router-dom";
import foodsData from "../foods.json";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Container, Card } from "react-bootstrap";

const DetailMakanan = () => {
  const { id } = useParams();
  const food = foodsData.find((f) => f.id === parseInt(id, 10));

  if (!food) {
    return <div>Makanan tidak ditemukan</div>;
  }

  return (
    <Container>
      <NavBar />
      <h1 className="my-4">Detail Makanan {food.name}</h1>
      <Card style={{ width: "24rem" }}>
        <Link
          to={`/makanan`}
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
          <Card.Text>{food.detail}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetailMakanan;
