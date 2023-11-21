import React, { useState } from 'react';
import './Student_Profile.css';
import { HeroVariant2 } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { AnnouncementVariant } from '../../components/AnnouncementVariant/AnnouncementCard';
import OfficerCard from '../../components/OfficerCard';
import ContactBanner from '../../components/ContactBanner';
import ContactBanner2 from '../../components/ContactBanner2';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Student_Profile() {
  return (
    <div>
        <HeroVariant2 
        name="First Name, Last Name"
        webmail="username@iskolarngbayan.pup.edu.ph"
        />
        <Container>
        <Row className="my-4">
                <Col xs={12}>
                    <h2>About me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p><strong>Department:</strong> Lorem Ipsum</p>
                    <p><strong>Program:</strong> Lorem Ipsum</p>
                </Col>
            </Row>
            <Row className="my-4">
                <Col xs={12}>
                    <h2>Organization Affiliation</h2>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>President (2022 - Present)</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</Card.Text>
                            <Card.Subtitle>PUP The Programmers' Guild</Card.Subtitle>
                            <Card.Text className="text-muted">University Wide</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Vice President (2021 - 2022)</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</Card.Text>
                            <Card.Subtitle>PUP The Programmers' Guild</Card.Subtitle>
                            <Card.Text className="text-muted">University Wide</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
              <Row className="my-4">
                  <Col xs={12}>
                          <h2>Social Media</h2>
                          <div>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                              <FaLinkedin className="social-icon  text-red" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                              <FaFacebook className="social-icon  text-red" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                              <FaTwitter className="social-icon  text-red" />
                            </a>
                            <a href="mailto:example@example.com">
                              <FaEnvelope className="social-icon text-red" />
                            </a>
                          </div>
                  </Col>
            </Row>

        </Container>

    </div>
  );
}

export default Student_Profile;
