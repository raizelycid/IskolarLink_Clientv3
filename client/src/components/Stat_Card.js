import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './general.css';

const Stat_Card = ({ imgSrc, subtitle, numcount }) => {
    return (
        <Col fluid>
        <Card className="align-items-center text-center rounded-0 shadow py-5" style={{maxHeight:'40vh',maxWidth:'50vh'}}>
            <Card.Img variant="top" src={imgSrc} className="s1-icon" />
            <Card.Body className="pt-2">
                <Card.Title className="Inter s1-title mb-1">{numcount}</Card.Title>
                <Card.Subtitle className="Inter-normal s1-st">{subtitle}</Card.Subtitle>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Stat_Card;
