// RincianMinuman.jsx
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
    <>
      <NavBar />
      <h1 className="my-4 p-2 text-center display-5 bg-light container-fluid">Apa itu <u>{drink.name}</u> ?</h1>
    <Container>
      <Card className="m-auto m-3 p-1 w-75" >
        <Link
          className="text-center"
          to={`/minuman`}
        >
          <Card.Img
            className="m-auto w-50"
            variant="top"
            src={drink.image}
            alt={drink.name}
          />
        </Link>
        <Card.Body>
          <Card.Title className="text-center">{drink.name}</Card.Title>
          <Card.Text className="text-center">{drink.rincian}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};

export default RincianMinuman;
