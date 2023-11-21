import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import Ginastel from '../assets/images.jpeg';


export default function NavBar() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function logout() {
    authContext.setToken(null);
    alert("Anda akan meninggalkan page ini")
    navigate("/home");
  }

  return (
    <Navbar expand="lg" className="text-center bg-light p-1">
      <Navbar.Brand className="text-start ms-5 fw-medium fs-3" href="/dashboard">
      <img
        src={Ginastel}
        width="30"
        height="30"
        className="d-inline-block align-center rounded-2 mx-2"
        alt="Ginastel logo"
      />
        Ginastel App
      </Navbar.Brand>
      
      <Navbar.Toggle className="text-end" aria-controls="login-app" />
      <Navbar.Collapse id="login-app" className="justify-content-end">
        <Nav 
        className="nav justify-content-end ms-5 my-2 my-lg-0"
        style={{ maxHeight: '100px', maxWidth:'100%'}}
        login-app
        >
          <Nav.Link className="nav justify-content-end text-dark" href="/minuman">Minuman</Nav.Link>
          <Nav.Link className="nav justify-content-end text-dark" href="/makanan">Makanan</Nav.Link>
          {/* <Nav.Link href="/dashboard">Home</Nav.Link> */}
          <Nav.Link className="nav justify-content-end text-dark" href="/profile">Profile</Nav.Link>

          <Button className="mx-5" variant="danger" onClick={logout}>
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Log_Out"> <path id="Vector" d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" stroke="#ffff" stroke-width="1.344" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            &nbsp;&nbsp;Logout
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