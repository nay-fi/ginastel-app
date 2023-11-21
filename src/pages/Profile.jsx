import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBar from "../components/Navbar";
import userData from "../users.json";


export default function Profile() {
  // const [user, setUser] = useState([]); 
  // const [page, setPage] = useState(0)
  // const [newUser, setNewUser] = useState([]); 
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  // const openDialog = () => { 
  // setIsDialogOpen(true); 
  // };
  // const closeDialog = () => { 
  //   setIsDialogOpen(false); 
  // };

  userData.map((data) => {
    console.log(data)
  })

  return (
    <>
    <Container className="text-center">
      <NavBar />
      <h2 className="my-5">Profile Kelompok 13</h2>
      {userData.map((data) => (
        <Row>
          <Col xs={1}></Col>
        <Col xs={5}>
        <Card 
        className="text-start"
        style={{width: '100%'}}>
        
          <Card.Img className ="avatar-component" variant="top" src={data.image} />
        <Card.Body>   
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>Email : {data.email}</Card.Text>
          <Card.Text>NIM : {data.nim}</Card.Text>
          <Card.Text>Username : {data.username}</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col xs={2}></Col>
      </Row>
        ))}
    </Container>
    </>
  );
}