import React, { useState } from 'react';
import './Organization_Profile.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Button } from 'react-bootstrap';


function RevalidationForm1() {
  return (
    <div>
      <HeroVariant
        h1Text="Revalidation Form"
        pText="Fill up our Accreditation Form Page to kickstart your journey towards official recognition and support for your student organization.  "
      />
      <Container className='my-5'>
        <Row>
          <Col className="text-center">
            <h2>Complete the form below </h2>
            <p className='text-gray2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s, </p>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default RevalidationForm1