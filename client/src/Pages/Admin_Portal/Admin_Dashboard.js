import React from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import Stat_Card from '../../components/Stat_Card';
import { Container, Row, Col, Button, InputGroup, Form} from 'react-bootstrap';
import './COSOA_Portal.css'


function Admin_Dashboard() {

  return (
    <>
      <HeroVariant3
        h1Text="Admin Dashboard"
        pText="Check your applicants."
      />
      <Container>
        <Row className='my-5 align-items-center'>
          <Stat_Card 
            imgSrc="/check_icon.png"
            numcount="245"
            subtitle="Iskolars"
          />
          <Stat_Card
            imgSrc="/time_icon.png"
            numcount="45"
            subtitle="To Verify"
          />
          <Stat_Card 
            imgSrc="/clipboard_icon.png"
            numcount="Ongoing"
            subtitle="Accreditation/Revalidation Period"
          />
        </Row>
        <Row className='mb-3'>
          <h1 className='text-red'>Iskolar Ng Bayan</h1>
          <p className='text-gray2'>List of Iskolar Users.</p>
        </Row>
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
            className="shadow-lg"
          />
        </InputGroup>
        <Col xs={1}></Col>
      </Row>
      </Container>
    </>
  );
}

export default Admin_Dashboard;
