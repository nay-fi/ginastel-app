import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  //   ------onClick={displayUser}-------
  //   const displayUser = () => {
  //     console.log(email);
  //     console.log(password);
  //   };

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const users = (
    {
      // id : '1',
      name : 'Kirani Juli Andini',
      email : 'juliakirani27@gmail.com',
      nim : '21120120120033',
      username: 'kiri',
      password: 'kanan',
      image : 'https://github.com/nay-fi/usercontent'
    },
    {
      // id : '2',
      name : 'Nur Ayuk Febreyanti',
      email : 'ayuk@gmail.com',
      nim : '21120120130053',
      username: 'ayuksaja',
      password: 'rawrrawr',
      image : 'https://github.com/nay-fi/usercontent',
    },
  {
    // id : '3',
    name : 'Kirani Juli',
    email : 'xahacker.alfa@gmail.com',
    nim : '21120120130113',
    username: 'sadhewos',
    password: 'inipassword',
    image : 'https://github.com/nay-fi/usercontent'
  },
  {
    // id : '4',
    name : 'Sachiko Fitria Ramadhanti',
    email : 'sachikofitria354@gmail.com',
    nim : '21120120140103',
    username: 'chichi',
    password: 'ichich',
    image : 'https://github.com/nay-fi/usercontent'
  }
  );

  function login() {
    const isCorrectUsername = email === (users.username);
    const isCorrectPassword = password === (users.password);
    
    // (email === users.email ? true : (email === users.username ? true : false))
// console.log(isCorrectPassword);
// console.log(isCorrectUsername);

    if (isCorrectUsername && isCorrectPassword) {
      authContext.setToken("1234");
      navigate("/dashboard");
    }
    // else{
    //   // authContext.setToken("3434");
    //   navigate("/home");
    // }
  }

  return (
    <Container className="my-5">
      <h1 className="my-5">Login Your Account</h1>
      <div className="m-auto">
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
      </div>
    </Container>
  );
}