import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import userData from "../users.json";

export default function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  // const [username, setUsername] = useState([]);
  
  //   ------onClick={displayUser}-------
  //   const displayUser = () => {
  //     console.log(email);
  //     console.log(password);
  //   };

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  // console.log(authContext)

  // const users = useContext(userData); //isiasi buat file json nya

  function login() {
    // console.log(userData)
    const isCorrectUser = userData.filter((data) => data.email == email && data.password == password)
    
// console.log(isCorrectUser)
    if (isCorrectUser.length !== 0 ) {
      authContext.setToken("1234");
      navigate("/dashboard");
    } else {
      alert("Silahkan Cek Kembali Email dan Paasword Anda")
    }
  }

  return (
    <Container className="my-5">
      <h1 className="my-5 text-center">Login Your Account</h1>
      <div className="m-auto">
      <Form>
        <Form.Group className="mb-3 mx-2 me-5 me-lg-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          className=""
            type="email"
            placeholder="Masukin email"
            value={email}
            onChangeCapture={(e) => {
              setEmail(e.target.value);
            }} required
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-5 mx-2 me-5 me-lg-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukin Password"
            value={password}
            onChangeCapture={(e) => {
              setPassword(e.target.value);
            }} required
          /> 
        </Form.Group>
        <Button className="d-grid col-6 mx-auto" variant="primary" onClick={login}>
          Login
        </Button>
      </Form>
      </div>
    </Container>
  );
}