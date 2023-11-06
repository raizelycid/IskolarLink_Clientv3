import React from 'react'
import { HeroVariant } from '../components/HeroVariant/Hero';
import './Organizations.css';
import Accredited_Org from '../components/Accredited_Org'; 
import { Container, Row, InputGroup, Form, Button, Col } from 'react-bootstrap';

function Organizations() {
  return (
    <div>
      <HeroVariant 
        h1Text="Accredited Organizations"
        pText="Discover our Accredited Organizations, the heart and soul of our vibrant campus community. Explore their achievements, activities, and the incredible impact they make on our campus life."
      />
      <Row className='m-4'>
        <Col xs={1}></Col>
        <Col>
          <Button variant="outline-secondary"><i class="fa-solid fa-filter"></i> Filter</Button>
        </Col>
        <InputGroup as={Col}>
          <Button variant="outline-secondary" id="button-addon2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Form.Control
            placeholder="Search"
          />
        </InputGroup>
        <Col xs={1}></Col>
      </Row>
      <Container className='mx-auto mb-5'>
        <Row className='mx-4'>
          <Accredited_Org
          imageSrc="image2.png"
          title="PUP Aggregates"
          description="PUP Aggregates is all about geology and earth sciences. Join us to dig deep into the mysteries of our planet, from rocks to natural disasters and beyond."
          tags={["Academic","Open to Any Program"]}
          />
          <Accredited_Org
          imageSrc="image3.png"
          title="Every Nation Campus PUP"
          description="Every Nation Campus Polytechnic University of the Philippines: Your community for faith, friendship, and personal growth on campus."
          tags={["Religious","Open to Any Program"]}
          />
          <Accredited_Org
          imageSrc="tpg-photo.jpg"
          title="PUP The Programmers' Guild"
          description="PUP TPG is home to programmers, no matter what course or background you have, we believe that anyone can code. Join our community as we tech-splore!"
          tags={["Technology","Open to Any Program"]}
          />
        </Row>
        
      </Container>
    </div>
  )
}

export default Organizations
