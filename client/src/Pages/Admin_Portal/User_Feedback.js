import React from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import Stat_Card from '../../components/Stat_Card';
import { Container, Row, Col, Button, InputGroup, Form, Image} from 'react-bootstrap';
import './Admin_Portal.css'


function User_Feedback() {

  return (
    <>
      <HeroVariant3
        h1Text="User Feedback"
      />
      <Container>
        <Row className='mt-4 mb-3'>
          <h1 className='text-red'>Feedbacks</h1>
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

export default User_Feedback;
