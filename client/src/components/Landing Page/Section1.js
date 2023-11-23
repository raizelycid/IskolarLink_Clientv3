import React, { useState } from 'react';
import Stat_Card from '../Stat_Card';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../general.css';

const Section1 = () => {
    const [orgCount, setOrgCount] = useState(214);
    const [studentCount, setStudentCount] = useState(82477);
    const [programCount, setProgramCount] = useState(219);
    
    return (
      <div className="s1-bg m-5 d-flex align-items-center">
        <Container>
          <Row className="mb-4  ">
            <Col className="text-center">
              <h1 className="Poppins text-black s1-h1">Be part of Iskolar ng Bayan Family.<br/>
              <span className="text-red">Join an organization.</span>
              <span className="text-yellow"> Get Accredited!</span></h1>
              <p className="s1-p Inter-normal">Explore your interests, make valuable connections, and elevate your campus life.</p>
            </Col>
          </Row>
          <Row fluid>
              <Stat_Card
                imgSrc="./s1-icon1.png"
                subtitle="Student Organizations"
                numcount="214"
              />
              <Stat_Card
                imgSrc="./s1-icon2.png"
                subtitle="Students"
                numcount="82,477"
              />
              <Stat_Card 
                imgSrc="./s1-icon3.png"
                subtitle="Academic Programs"
                numcount="219"
              />
          </Row>
        </Container>
      </div>
    );
  };
  
  export default Section1;