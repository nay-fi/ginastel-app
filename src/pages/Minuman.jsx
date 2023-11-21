// Minuman.jsx
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import drinksData from "../drinks.json";

const Minuman = () => {
  return (
    <Container className="my-3">
      <h1 className="my-4">Daftar Minuman</h1>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tentang Minuman&nbsp;<b>GiNaSTel</b> </Accordion.Header>
        <Accordion.Body>
        Dalam daftar minuman toko ini, Teh Ginastel hadir sebagai bintang utama dengan berbagai varian yang menggugah rasa untuk dicoba. Setiap tegukan Teh Ginastel membawa pengalaman rasa yang mendalam, dari kelembutan hingga kehangatan yang menyenangkan. Kombinasi antara kenikmatan teh yang khas dan berbagai varian uniknya menjadikan setiap minuman sebagai perjalanan rasa yang tak boleh dilewatkan. Dengan setiap sajian teh yang toko ini tawarkan, tamu dapat menemukan kepuasan yang mendalam dan keunikan cita rasa yang menjadi daya tarik utama dari daftar minuman ini
        Berikut adalah daftar makanan yang cocok untuk dihidangkan bersama
        dengan Makanan Ginastel
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      
      <Row xs={1} md={3} className="g-2 justify-content-center">
        {drinksData.map((drink) => (
          
          <Col className="text-center" key={drink.id}>
            <Card className="text-center m-3 p-1">
              <Link
                to={`/rincian/${drink.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card.Img
                  variant="top"
                  src={drink.image}
                  alt={drink.name}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{drink.name}</Card.Title>
                <Card.Text>{drink.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

        ))}
      </Row>
    </Container>
  );
};

export default Minuman;
