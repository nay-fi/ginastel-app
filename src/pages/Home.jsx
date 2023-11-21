import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Ginastel from '../assets/images.jpeg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <Container className="my-5 mt-5 p-5 text-center bg-light rounded-2">
      <img src={Ginastel} className="rounded-2"/>
      <h1 className="mt-3">Welcome in <u>GiNaSTel</u> App</h1>
      <h5 className="mt-5 fw-light">please login to see menu</h5>
      <Button className="mt-3 bg-gradient" onClick={() => navigate("/login")}>
        Go to Login
      </Button>
    </Container>
    </>
  );
}