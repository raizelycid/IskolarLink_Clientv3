import React from 'react';
import { Container, Row, Col, Card, Image, Stack } from 'react-bootstrap';
import '../general.css';

const Section2 = () => {
  return (
    <div className="p-5 bg-yellow Inter text-black d-flex align-items-center">
      <Container fluid>
        <Row className="text-center mt-5">
          <h1 className='Inter-b s2-h2'>PUP Commission on Student Organizations<br />and Accreditation (COSOA)</h1>
          <p className="Inter-normal s2-p">An independent institution of the PUP Student Council which has the mandate to accredit and reaccredit.</p>
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
            <Card.Title className="Inter-extrab s2-title">OUR MISSION</Card.Title>
            <Card.Text className="Inter-normal shortened-text mt-2 s2-body">
              To empower and enhance the student experience at the Polytechnic University of the Philippines (PUP) by fostering a vibrant and inclusive campus community through the recognition, support
            </Card.Text>
            <Card.Link href="#" className="no-decoration learn-btn Inter">Learn More <i className="fas fa-arrow-right"></i></Card.Link>
          </Card.Body>
        </div>
      </div>
    </Card>
    <Card className="bg-transparent border-0">
      <div className="d-flex">
        {/* Left side for the image */}
        <div className="logo-card pt-3  ">
          <Card.Img src="s2-icon2.png" />
        </div>
        <div>
          {/* Right side for text */}
          <Card.Body>
            <Card.Title className="Inter-extrab s2-title">OUR VISION</Card.Title>
            <Card.Text className="Inter-normal shortened-text mt-2 s2-body">
              COSOA envisions a dynamic and harmonious PUP campus environment where student organizations are the pillars of student life, driven by a commitment to excellence, innovation, and service. We aspire to be the catalyst    
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