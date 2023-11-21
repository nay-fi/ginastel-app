import { useContext } from "react";
import { Button, Nav, Navbar, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function NavBar() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function logout() {
    authContext.setToken(null);
    alert("Anda akan meninggalkan page ini")
    navigate("/");
  }

  return (
    <Navbar expand="lg" className="" style={{maxWidth:'100%'}}>
      <Navbar.Brand className="text-start" href="/dashboard">Ginastel App</Navbar.Brand>

      <Navbar.Toggle className="text-end" aria-controls="login-app" />
      <Navbar.Collapse id="login-app">
        <Nav 
        className="nav justify-content-end ms-5 my-2 my-lg-0"
        style={{ maxHeight: '100px', maxWidth:'100%'}}
        login-app
        >
          <Nav.Link className="nav justify-content-end text-dark" href="/beverage">Beverage</Nav.Link>
          <Nav.Link className="nav justify-content-end text-dark" href="/makanan">Makanan</Nav.Link>
          {/* <Nav.Link href="/dashboard">Home</Nav.Link> */}
          <Nav.Link className="nav justify-content-end text-dark" href="/profile">Profile</Nav.Link>

          <Button className="mx-5" variant="danger" onClick={logout}>
            Logout
          </Button>
        {/* <Form className="m-auto my-auto d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}