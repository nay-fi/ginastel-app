import { Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();

  function goProfile() {
    navigate("/profile");
  }

  return (
    <Container className="text-center">
      <NavBar />
      <h1 className="my-5">Ginastel</h1>
      <Card>
        <Card.Body>
          <Card.Title>Menu Minuman</Card.Title>
          
          {/* Card minuman */}
          <Card className="mt-5" variant="mt-5 my-4" style={{ width: '14rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Sigma School Analytics</Card.Title>
          <Card.Text>People who graduate who get jobs: 80%</Card.Text>
        </Card.Body>
      </Card>
      <Button className="mt-3" variant="warning" onClick={goProfile}>
        Go to Profile
      </Button>
    </Container>
  );
} 