import React, { useEffect, useState } from 'react'
import { Col, Row,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


import Rockimg from '../assets/rrimg2.jpeg'
import './style.css'

function About() {

    const [animate,setAnimate]=useState(false)
    useEffect(()=>{
        setAnimate(true)
    },[])
    return (

        <section className="about">
            <Container>
                <Row className='align-items-center '>
                    <Col md={6}  xs={12} className='leftimg'>
                        <img src={Rockimg} alt=""className= {`aboutimg ${animate ? 'enable-transition' : ''}`} />
                    </Col>
                    <Col md={6} xs={12} className='rightcont'>
                        <h6>OUR STORY</h6>
                        <h2>Timeless Craftsmanship, Modern Precision</h2>
                        <p>
                            Rock Revival represents the harmony of classic watchmaking
                            traditions and contemporary design. Every timepiece is crafted
                            with meticulous attention to detail, reflecting elegance,
                            precision, and bold sophistication.
                        </p>
                        <p>
                            Inspired by heritage brands yet designed for the modern
                            individual, Rock Revival watches are more than instruments of
                            time — they are statements of character.
                        </p>

                        <button className="rr-btn">Explore Our Heritage</button>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default About