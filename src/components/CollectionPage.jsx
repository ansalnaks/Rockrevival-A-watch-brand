import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { products } from "./Productlist";
import Header from "./Header";
import Footer from "./Footer";

function CollectionPage() {
  const { gender } = useParams();

  const filteredProducts = products.filter(
    (item) => item.gender === gender
  );

  return (
    <>
    <Header/>
    <Container className="py-5" style={{marginTop:"-9%"}}>
      <h2 className="text-capitalize mb-4">
        {gender} Watches
      </h2>

      <Row>
        {filteredProducts.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card className="category-card">
              <Card.Img className="img-wrapper" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>₹{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default CollectionPage;
