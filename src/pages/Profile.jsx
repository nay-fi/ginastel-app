import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBar from "../components/Navbar";
import userData from "../users.json";


export default function Profile() {

  userData.map((data) => {
    console.log(data)
  })

  return (
    <>
    <Container className="text-center">
      <NavBar />
      <h2 className="my-5">Profile Kelompok 13</h2>
      {userData.map((data) => (

        <Row className="m-auto my-3 align-self-center">
          <Card className="m-auto m-sm-auto p-2 text-start" style={{width: '17rem'}} border="primary" >
            <Card.Img className ="rounded-3" variant="top" src={data.image} roundedCircle />
          <Card.Body>   
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>Email : {data.email}</Card.Text>
            <Card.Text>NIM : {data.nim}</Card.Text>
            <Card.Text>Username : {data.username}</Card.Text>
          </Card.Body>
          </Card>
          <Col xs={2}></Col>
        </Row>

        ))}
    </Container>
    </>
  );
}