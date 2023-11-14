import React from 'react';
import { Container, Row, Col, Card, Image, Stack } from 'react-bootstrap';
import '../general.css';

const Section2 = () => {
  return (
    <div className="p-5 bg-yellow Inter text-black d-flex align-items-center">
      <Container fluid>
        <Row className="text-center mt-5">
          <h1 className='Inter-b s2-h2'>PUP Commission on Student Organizations<br />and Accreditation (COSOA)</h1>
        </Row>
        <Row className="mt-5">
  <Col xs={12} lg={6} className="d-flex flex-column align-items-center align-items-lg-start">
    <Card className="bg-transparent border-0 mb-4">
      <div className="d-flex">
        {/* Left side for the image */}
        <div className="logo-card pt-3">
          <Card.Img src="s2-icon1.png" />
        </div>
        <div>
          {/* Right side for text */}
          <Card.Body>
            <Card.Title className="Inter-extrab s2-title">Who Are We</Card.Title>
            <Card.Text className="Inter-normal shortened-text mt-2 s2-body">
            The sole-accrediting body and an independent student body set to develop an effective working relationship between the Central Student Council, the Office of Student Services (OSS), and all student organizations at the Polytechnic University of the Philippines (PUP).
            </Card.Text>
            <Card.Link href="#" className="no-decoration learn-btn Inter">Learn More <i className="fas fa-arrow-right"></i></Card.Link>
          </Card.Body>
        </div>
      </div>
    </Card>
  </Col>
  <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
    <Image src="studentorg.png" className="round-25" width="100%" />
  </Col>
</Row>

      </Container>
    </div>
  );
};

export default Section2;