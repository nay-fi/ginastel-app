import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import NavBar from "../components/Navbar";

export default function Dashboard() {
  return (
    <Container className="text-center">
      <NavBar />
      <h1 className="my-5">Profile</h1>
      <Card>
        <Card.Body>
          <Card.Title>Account Details</Card.Title>
          <Card.Text>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card.Text>
          <Card.Text>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              fuga.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}