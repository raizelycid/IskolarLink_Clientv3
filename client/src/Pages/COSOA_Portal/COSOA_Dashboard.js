import React, { useState } from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import Stat_Card from '../../components/Stat_Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './COSOA_Portal.css'

function COSOA_Dashboard() {
  return (
    <div>
      <HeroVariant3
        h1Text="COSOA Dashboard"
        pText="See your organization analytics"
      />
      <Container>
        <Row className='my-5 align-items-center'>
          <Stat_Card 
            imgSrc="/check_icon.png"
            numcount="60"
            subtitle="Approved"
          />
          <Stat_Card
            imgSrc="/time_icon.png"
            numcount="23"
            subtitle="Pending"
          />
          <Stat_Card 
            imgSrc="/cross_icon.png"
            numcount="43"
            subtitle="Rejected"
          />
          <Stat_Card 
            imgSrc="/clipboard_icon.png"
            numcount="126"
            subtitle="Submission"
          />
        </Row>
      </Container>
    </div>
  );
}

export default COSOA_Dashboard;
