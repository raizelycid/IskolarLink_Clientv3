import React from 'react';
import { Card, CardGroup} from 'react-bootstrap';
import './general.css';

const OfficerCard = ({ imageSrc, name, role, imageSrc2, name2, role2, imageSrc3, name3, role3}) => {
  return (
    <CardGroup className='my-3'>
        <Card className="officer-card">
        <Card.Img variant="top" src={imageSrc} className="announcement-image" />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {role}
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className="officer-card">
        <Card.Img variant="top" src={imageSrc2} className="announcement-image" />
        <Card.Body>
            <Card.Title>{name2}</Card.Title>
            <Card.Text>
            {role2}
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className="officer-card">
        <Card.Img variant="top" src={imageSrc3} className="announcement-image" />
        <Card.Body>
            <Card.Title>{name3}</Card.Title>
            <Card.Text>
            {role3}
            </Card.Text>
        </Card.Body>
        </Card>
    </CardGroup>
    
  );
};

export default OfficerCard;