import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../general.css';

const Section1 = () => {
    const [orgCount, setOrgCount] = useState(214);
    const [studentCount, setStudentCount] = useState(82477);
    const [programCount, setProgramCount] = useState(219);
    
    return (
      <div className="s1-bg vh-70 d-flex align-items-center">
        <Container>
          <Row className="mb-4  ">
            <Col className="text-center">
              <h1 className="Poppins text-black s1-h1">Be part of Iskolar ng Bayan Family.<br/>
              <span className="text-red">Join an organization.</span>
              <span className="text-yellow"> Get Accredited!</span></h1>
              <p className="s1-p Inter-normal">Explore your interests, make valuable connections, and elevate your campus life.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="align-items-center text-center mx-5 py-4 rounded-0 shadow">
                <Card.Img variant="top" src="/s1-icon1.png" className="s1-icon" />
                <Card.Body className="pt-2">
                  <Card.Title className="Inter s1-title mb-1">{orgCount.toLocaleString()}</Card.Title>
                  <Card.Subtitle className="Inter-normal s1-st">Student Organizations</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="align-items-center text-center mx-5 py-4 rounded-0 shadow">
                <Card.Img variant="top" src="/s1-icon2.png" className="s1-icon" />
                <Card.Body className="pt-2">
                  <Card.Title className="Inter s1-title mb-1">{studentCount.toLocaleString()}</Card.Title>
                  <Card.Subtitle className="Inter-normal s1-st">Students</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="align-items-center text-center mx-5 py-4 rounded-0 shadow">
                <Card.Img variant="top" src="/s1-icon3.png" className="s1-icon" />
                <Card.Body className="pt-2">
                  <Card.Title className="Inter s1-title mb-1">{programCount.toLocaleString()}</Card.Title>
                  <Card.Subtitle className="Inter-normal s1-st">Academic Programs</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default Section1;