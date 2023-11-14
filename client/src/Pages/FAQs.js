import React from 'react'
import { HeroVariant } from '../components/HeroVariant/Hero';
import './FAQs.css';
import { Container, Row, Image, Col, Form, Button } from 'react-bootstrap';
import FAQs_Accordion from '../components/FAQs_Accordion';
import { ContactBanner1 } from '../components/ContactBanner';

function FAQs() {
  return (
    <div>
      <HeroVariant 
        h1Text="Frequently Asked Questions"
        pText="Have questions? We’re here to help."
      />
      <Container >
        <Row className='m-5 text-center'>
          <h2>Check Your Questions Below</h2>
          <p>These questions were often asked by student organizations' representatives in the main communication channels of PUP COSOA.</p>
        </Row>
        <Row className='m-5'>
          <FAQs_Accordion/>
        </Row>
        <Container>
            <Container className='text-center'>
              <Image src="icon_125.png"/>
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
      </Container>
      <ContactBanner1/>
    </div>
  )
}

export default FAQs
