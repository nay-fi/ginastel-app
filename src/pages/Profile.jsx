import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap";
import NavBar from "../components/Navbar";
import userData from "../users.json";


const BASE_API_URL = `https://dummyjson.com/docs`; 

export default function Profile() {
  const [user, setUser] = useState([]); 
  const [page, setPage] = useState(0)
  const [newUser, setNewUser] = useState([]); 
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // useEffect(() => { 
  //   async function getUser() { 
  //   await axios 
  //   .get(`${BASE_API_URL}/users`) 
  //   .then((res) => { 
  //   const responseData = res.users;
  //   setPage(responseData.total)
  //   setUser(responseData.users);
    
  //   console.log(page)
  //   console.log(user); 
  //   }) 
  //   .catch((error) => { 
  //   console.log(error); 
  //   window.alert(error); 
  //   }); 
  //   } 
  //   getUser(); 
  // }, []); 
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
      <h1 className="my-5">Profile</h1>
      {userData.map((data) => (
        
          // <Image src="({data.image})" rounded />

        <Card className="back">
          <Card.Image>
            <Image>{data.image}</Image>
            </Card.Image>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          {/* NIM */}
          <Card.Text>
            <p>{data.nim}</p>
          </Card.Text>
          {/* Email */}
          <Card.Text>
            <p>{data.email}</p>
          </Card.Text>
          {/* username */}
          <Card.Text>
            <p>{data.username}</p>
          </Card.Text>
        </Card.Body>
      </Card>
        ))}
    </Container>
    </>

  );
}