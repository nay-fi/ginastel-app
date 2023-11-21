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
    <Container className="m-auto p-5 my-5 bg-light rounded-2">
      <svg width="64px" height="64px" viewBox="0 0 1024 1024" className="icon text-center m-auto container-fluid" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z" fill="#4A5699"></path><path d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z" fill="#C45FA0"></path><path d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z" fill="#E5594F"></path></g></svg>
      <h1 className="my-4 mb-5 text-center">Login Your Account</h1>
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
        <Button className="m-auto col-12 mx-auto justify-content-center" variant="primary" onClick={login}>
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Log_Out"> <path id="Vector" d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" stroke="#ffff" stroke-width="1.344" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
          Login
        </Button>
      </Form>
      </div>
    </Container>
  );
}