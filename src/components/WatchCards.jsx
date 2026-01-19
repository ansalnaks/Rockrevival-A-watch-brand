import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function WatchCards() {
    const navigate=useNavigate()
  return (
    <section className="category-section">
    <Container>
        <Row>
            <Col md={4}>
            <Card className="category-card" onClick={() => navigate("/collections/men")}>
              <Card.Img src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGNofGVufDB8fDB8fHww"/>
              <Card.Body>
                <Card.Title>Men</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
                 <Card className="category-card" onClick={() => navigate("/collections/women")}>
              <Card.Img src="https://images.unsplash.com/photo-1736615494527-a0f4a70f1101?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdyaXN0d2F0Y2glMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D"/>
              <Card.Body>
                <Card.Title>Women</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
                 <Card className="category-card" onClick={() => navigate("/collections/special")}>
                    <Card.Img src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"></Card.Img>
              <Card.Body>
                <Card.Title>Special Edition</Card.Title>
              </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default WatchCards