import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container className="my-5 text-center">
      <h1>Welcome in Ginastel App</h1>
      <h4 className="mt-5 fw-light">please login to see menu</h4>
      <Button className="mt-3 bg-secondary" onClick={() => navigate("/login")}>
        Go to Login
      </Button>
    </Container>
  );
}