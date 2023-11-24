import React from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import Stat_Card from '../../components/Stat_Card';
import { Container, Row, Col, Button, InputGroup, Form, Image} from 'react-bootstrap';
import './COSOA_Portal.css'


function Admin_Dashboard() {

  return (
    <>
      <HeroVariant3
        h1Text="Admin Dashboard"
        pText="Check your users."
      />
      <Container>
        <Row className='mt-4 mb-3'>
          <h1 className='text-red'>Overview</h1>
          <h3>Academic Year 2023-2024</h3>
        </Row>
        <Row className='my-5 align-items-center'>
        <Stat_Card 
            imgSrc="/clipboard_icon.png"
            numcount="Ongoing"
            subtitle="AnR Period"
          />
          <Stat_Card 
            imgSrc="/check_icon.png"
            numcount="245"
            subtitle="Iskolars"
          />
          <Stat_Card
            imgSrc="/time_icon2.png"
            numcount="45"
            subtitle="To Verify"
          />
        </Row>
        <Row>
          <h1 className='text-red'>User Management</h1>
        </Row>
        <Row className='ms-1 me-5 pe-3 pt-3 border'>  
          <Col xs={1} className='text-end'>
            <Image src="/logo192.png" roundedCircle style={{width:"3rem"}}/>
          </Col>
          <Col className="ms-0">
            <p className=' mb-0'><strong>Mark Macaraeg</strong></p>
            <p className='text-red'>markmacaraeg@iskolarngbayan.pup.edu.ph</p>
          </Col>
          <Col className='text-end mt-1'>
            <Button variant="primary">Update Chairperson</Button>
          </Col>
        </Row>
        <Row className='text-center mt-5'>
          <h1 className='text-red'>List of Iskolar Users</h1>
        </Row>
        <Row className='m-4'>
        <Col className='text-start'>
          <Button variant="outline-secondary"><i class="fa-solid fa-filter"></i> Filter</Button>
        </Col>
        <Col>
        </Col>
        <InputGroup as={Col} className="text-end">
          <Button variant="outline-secondary" id="button-addon2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Form.Control
            placeholder="Search"
            className="shadow-lg"
          />
        </InputGroup>
      </Row>
      </Container>
    </>
  );
}

export default Admin_Dashboard;
