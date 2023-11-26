import React, { useState } from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import { Container, Row, Button } from 'react-bootstrap';
import './COSOA_Portal.css'
import Add_COSOA from '../../components/COSOA_Dashboard/Add_COSOA';

function COSOA_Accesibility() {
  return (
    <>
        <HeroVariant3 
          h1Text="Page Accessibility"
          pText="Assign permissions to COSOA Staff."
        />
        <Row className='text-center my-5'>
          <h1 className='text-red'>Lorem Ipsum</h1>
          <p>Another Lorem ipsum pero subtitle</p>
        </Row>
        
        <Container className='text-center my-5'>
          <Add_COSOA/>
        </Container>
  </>
  );
};

export default COSOA_Accesibility;
