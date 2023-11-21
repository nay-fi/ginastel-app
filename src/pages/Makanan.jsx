// Makanan.jsx
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import foodsData from "../foods.json";


const Makanan = () => {
  return (
    <>
    <Container>
      <h2 className="my-4">Daftar Makanan</h2>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tentang Makanan&nbsp;<b>GiNaSTel</b> </Accordion.Header>
        <Accordion.Body>
        Berikut pilihan menu makanan yang dirancang dengan cermat untuk memberikan pengalaman kuliner yang harmonis saat dinikmati bersama Teh Ginastel. Hidangan-hidangan klasik hingga inovatif ini dipilih dengan pertimbangan rasa dan aroma yang dapat saling melengkapi dengan keunikan teh ini. Teh Ginastel, dengan keharuman dan kelembutan rasanya, menciptakan paduan sempurna dengan beragam cita rasa hidangan pada toko ini. Dari hidangan ringan hingga yang lebih berat, setiap sajian dirancang untuk memaksimalkan nikmatnya setiap tegukan teh, menciptakan pengalaman yang tak terlupakan selama berkunjung di Solo
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      
      <Row xs={1} md={3} className="text-center mt-5 m-auto">
        {foodsData.map((food) => (

          <Col 
          className="col-sm" 
          key={food.id}
          >
            <Card 
            className="text-start my-3 p-2"
            style={{maxWidth: '100%', Height: '524px'}}
            >
              <Link
                to={`/detail/${food.id}`}
              >
                <Card.Img
                  variant="top"
                  src={food.image}
                  alt={food.name}
                  className="rounded-1"
                  style={{ height: '213px', objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Card.Title className="display-6 fs-4 fw-medium">{food.name}</Card.Title>
                <Card.Text className="fw-lighter">{food.description}</Card.Text>
                <Card.Text>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#146803"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2322 1.05711C9.8417 0.66659 9.20854 0.66659 8.81802 1.05711L1.03984 8.83529C0.649317 9.22581 0.649317 9.85898 1.03984 10.2495L1.74698 10.9566L13.7678 22.9774C14.1583 23.3679 14.7915 23.3679 15.182 22.9774L15.8811 22.2783L15.8891 22.2703L15.8972 22.2622L22.2456 15.9138L22.2531 15.9064L22.2605 15.8989L22.9601 15.1992C23.3507 14.8087 23.3507 14.1756 22.9601 13.785L22.2603 13.0852L22.2531 13.0779L22.2458 13.0707L10.9454 1.77027C10.9434 1.76825 10.9414 1.76623 10.9394 1.76422C10.9373 1.76221 10.9353 1.7602 10.9333 1.7582L10.2322 1.05711ZM8.11092 4.59264L4.57539 8.12817L4.57541 8.12818C5.35646 8.90923 5.35646 10.1756 4.57541 10.9566L4.57539 10.9566L8.81804 15.1992L13.0607 19.4419C13.8417 18.6608 15.1081 18.6608 15.8891 19.4419L19.4247 15.9064C18.6436 15.1253 18.6436 13.859 19.4247 13.0779L15.1894 8.84272C16.8413 10.5038 16.4772 13.197 14.8284 14.8457C13.1773 16.4969 10.4785 16.8597 8.81804 15.1992C7.1576 13.5388 7.52042 10.84 9.17159 9.18884C10.8203 7.54013 13.5135 7.17594 15.1746 8.82788L10.9393 4.59266C10.1583 5.3737 8.89198 5.37369 8.11093 4.59265C8.11093 4.59264 8.11093 4.59264 8.11092 4.59264ZM10.5858 10.6031C11.6683 9.52055 13.0851 9.56679 13.7678 10.2495C14.4505 10.9322 14.4967 12.349 13.4142 13.4315C12.3317 14.514 10.915 14.4677 10.2322 13.785C9.54954 13.1023 9.5033 11.6856 10.5858 10.6031Z" fill="#88bb81"></path> </g></svg>
                &nbsp;{food.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Makanan;
