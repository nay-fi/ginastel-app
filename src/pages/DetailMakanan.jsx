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
    <>
      <NavBar />
    <Container className="my-5 p-2">
      <h2 className="text-center display-5 my-4">Apa itu {food.name} ?</h2>
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
          <Card.Header className=" bg-transparent text-center h4 my-4">{food.name}</Card.Header>
          <Card.Text className="h6 fw-normal">{food.detail}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};

export default DetailMakanan;
