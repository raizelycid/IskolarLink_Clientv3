import React from 'react';
import '../general.css'; 
import { Row, Col, Container } from "react-bootstrap";
import AnnouncementCard from '../AnnouncementVariant/AnnouncementCard.js'

const Section3 = () => {
  return (
    <div>
      <Row className="text-center m-5">
        <h1 className="s3-h1 text-red Inter-b">Announcements</h1>
        <p className="s3-p text-gray2 Inter-normal">Discover the latest announcement that will shape the future of PUP COSOA and<br/>elevate your student experience!</p>
      </Row>
      <Container fluid className="d-flex justify-content-center pb-5"> 
        <Row>
          <Col className='d-flex justify-content-center'>
            <AnnouncementCard
              imageSrc="studentorg.png"
              title="Important Announcement"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              userName="John Doe"
              userType="Announcement"
              date="Oct 5"
              userImageSrc="s1-icon1.png"
            />
          </Col>
          <Col className='d-flex justify-content-center'>
            <AnnouncementCard
              imageSrc="studentorg.png"
              title="Important Announcement"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              userName="John Doe"
              userType="Announcement"
              date="Oct 5"
              userImageSrc="s1-icon1.png"
            />
          </Col>
          <Col className='d-flex justify-content-center'>
            <AnnouncementCard
              imageSrc="studentorg.png"
              title="Important Announcement"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              userName="John Doe"
              userType="Announcement"
              date="Oct 5"
              userImageSrc="s1-icon1.png"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
