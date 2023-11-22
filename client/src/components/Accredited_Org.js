import React from 'react';
import { Card, Button, Col, Badge, Row } from 'react-bootstrap';
import './general.css'

const Accredited_Org = ({ imageSrc, title, description, tags }) => {
  return (
    <Col fluid>
      <Card className="p-3 mx-3">
        <Card.Img variant="top" src={imageSrc} className="announcement-image" />
        <Card.Body>
          <div className="d-flex flex-wrap mb-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                pill
                variant="primary" 
                className="me-2 mb-2"
              >
                {tag.length > 100 ? tag.substring(0, 100) + '...' : description}
              </Badge>
            ))}
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {description.length > 100 ? description.substring(0, 100) + '...' : description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-transparent border-0">
          <Button variant="primary">Apply Now</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

const Accredited_OrgVariant = ({ imageSrc, title, description }) => {
  return (
    <Col fluid>
      <Card className="p-3 mx-3 shadow">
      <Card.Img variant="top" src={imageSrc} className='card-image-orgvariant'/>

        <Card.Header className='bg-white'>
          <Card.Title className='text-center'>{title}</Card.Title>
        </Card.Header>
        
        <Card.Body>
          <Card.Text>
          {description.length > 150 ? description.substring(0, 150) + '...' : description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-transparent border-0 text-center">
          <Row>
          <Button variant="primary" className='px-5'>View</Button>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Accredited_Org;

export {Accredited_OrgVariant};
