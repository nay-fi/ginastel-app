import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import NavBar from "../components/Navbar";
import userData from "../users.json";


const BASE_API_URL = `https://dummyjson.com/docs`; 

export default function Dashboard(props) {
  const [user, setUser] = useState([]); 
  const [page, setPage] = useState(0)
  const [newUser, setNewUser] = useState([]); 
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => { 
  setIsDialogOpen(true); 
  };
  const closeDialog = () => { 
    setIsDialogOpen(false); 
  };

  userData.map((data) => {
    console.log(data)
  })

  return (
    <>
    <Container className="text-center">
      <NavBar />
      <h1 className="my-5">Profile Kelompok 13</h1>
      {userData.map((data) => (

        <Card>
          <Card.Img className ="avatar-component" variant="top" src={data.image} />
        <Card.Body>   
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>Email : {data.email}</Card.Text>
          <Card.Text>NIM : {data.nim}</Card.Text>
          <Card.Text>Username : {data.username}</Card.Text>

        </Card.Body>
      </Card>
        ))}
    </Container>
    </>
  );
}