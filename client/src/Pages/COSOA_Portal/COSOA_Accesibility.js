import React, { useState } from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import { Container, Row, Button } from 'react-bootstrap';
import './COSOA_Portal.css'

function COSOA_Accesibility() {
  return (
    <Container>
        <HeroVariant3 
          h1Text="Page Accessibility"
          pText="Assign permissions to COSOA Staff."
        />
        <Row>
          <h1 className='text-red'>Lorem Ipsum</h1>
          <p>Another Lorem ipsum pero subtitle</p>
        </Row>
        <Row>
          <Button variant="primary">+ Add New COSOA Officer</Button>
        </Row>

    </Container>
  );
};

export default COSOA_Accesibility;
