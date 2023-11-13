import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   ------onClick={displayUser}-------
  //   const displayUser = () => {
  //     console.log(email);
  //     console.log(password);
  //   };

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function login() {
    const isCorrectUsername = email === "ayuk@aja.com";
    const isCorrectPassword = password === "aaa";

    if (isCorrectUsername && isCorrectPassword) {
      authContext.setToken("1234");
      navigate("/dashboard");
    }
  }

  return (
    <Container className="my-5">
      <h1>Login Your Account</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="zeph@zeph.com"
            value={email}
            onChangeCapture={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="zeph"
            value={password}
            onChangeCapture={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" onClick={login}>
          Login
        </Button>
      </Form>
    </Container>
  );
}