import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import '../general.css';

const AnnouncementCard = ({ imageSrc, title, description, userName, userType, date, userImageSrc }) => {
  return (
    <Card className="custom-card border-0">
      <Card.Img variant="top" src={imageSrc} className="announcement-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description.length > 100 ? description.substring(0, 100) + '...' : description}
        </Card.Text>
        <Row className="justify-content-between">
          <Col xs={6}>
            <div className="d-flex align-items-center">
              <img src={userImageSrc} alt={userName} className="user-avatar" />
              <div className="ml-2">
                <div>{userName}</div>
                <div>{userType}</div>
              </div>
            </div>
          </Col>
          <Col xs={6} className="text-end">
            {date}
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 text-end">
        <Button variant="link text-yellow no-decoration Inter p-0 m-0">
          Learn More <i className="fas fa-arrow-right"></i>
        </Button>

      </Card.Footer>
    </Card>
  );
};

const AnnouncementVariant = ({ imageSrc, title, description }) => {
  return (
    <Container className='my-4'>
      <Card style={{height: "600px"}}>
        <Card.Img variant='top' src={imageSrc} style={{height:"300px",objectFit:'cover'}}></Card.Img>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-transparent border-0 text-start">
        <Button variant="link text-yellow no-decoration Inter p-0 m-0">
          Check Facebook Post <i className="fas fa-arrow-right"></i>
        </Button>
      </Card.Footer>
      </Card>
    </Container>
  );
};

export default AnnouncementCard;
export {AnnouncementVariant};