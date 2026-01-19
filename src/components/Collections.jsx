import React from 'react';
import { Container } from 'react-bootstrap';
import { products } from './Productlist';
import './style.css';

function Collections() {
  return (
    <section className="round-carousel " style={{marginTop:"-13%"}}>
      <Container>
        <h2 className="section-title">Collections</h2>

        <div className="round-carousel-track">
          {products.map((item) => (
            <div className="round-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Collections;
