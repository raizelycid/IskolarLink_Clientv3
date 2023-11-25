import React from 'react';
import { Form, Container, Image, Row, Col, Button} from 'react-bootstrap';
import './general.css';

const FAQs_Form = () => {
  return (
    <>
        <Container>
            <Container className='text-center'>
              <Image src="/icon_125.png"/>
              <Row>
                <h3>Still Have Questions? <strong>Get In Touch With Us</strong></h3>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
              </Row>
            </Container>
              <Form className='m-5'>
                <Row className='mb-3'>
                  <Form.Group as={Col}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Name'></Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Enter Email'></Form.Control>
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type='text' placeholder='Enter the Subject'></Form.Control>
                  </Form.Group>
                </Row>
                <Row className='mb-4'>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' rows={5} placeholder='Hi! I am the student organization representative of...'></Form.Control>
                  </Form.Group>
                </Row>
                <Row>
                  <Col>
                    <Button variant="secondary" type="submit" className="text-start px-3">
                      Submit
                    </Button>
                  </Col>
                  <Col>
                    <p className='text-end'>Your request will be sent securely and remain private.</p>
                  </Col>
                </Row>
              </Form>
        </Container>
    
    </>
      
  );
};

export default FAQs_Form;
