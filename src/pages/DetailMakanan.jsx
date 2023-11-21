// DetailMakanan.jsx
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
      <h2 className="my-4 p-2 text-center display-5 bg-light container-fluid">Apa itu <u>{food.name}</u> ?</h2>
    <Container className="my-3 p-2 m-auto">
      <Card className="m-auto m-3 w-75 align-baseline">
        <Link
          to={`/makanan`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card.Img
            variant="top"
            src={food.image}
            alt={food.name}
            className=""
            style={{ height: '347px', objectFit: "cover" }}
          />
        </Link>
        <Card.Body>
          <Card.Header className="bg-transparent text-center h4 my-4">{food.name}</Card.Header>
          <Card.Text className="m-1 p-3 h5 fw-light">{food.detail}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};

export default DetailMakanan;
