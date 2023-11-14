import React from 'react'
import { HeroVariant } from '../components/HeroVariant/Hero';
import './FAQs.css';
import { Container, Row } from 'react-bootstrap';
import FAQs_Accordion from '../components/FAQs_Accordion';
import { ContactBanner1 } from '../components/ContactBanner';
import FAQs_Form from '../components/FAQs_Form';

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
        <FAQs_Form/>
      </Container>
      <ContactBanner1/>
    </div>
  )
}

export default FAQs
