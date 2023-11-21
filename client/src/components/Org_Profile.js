import React, { useState } from 'react';
import './general.css';
import { HeroVariant } from '../components/HeroVariant/Hero';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { AnnouncementVariant } from '../components/AnnouncementVariant/AnnouncementCard';
import OfficerCard from '../components/OfficerCard';
import ContactBanner from '../components/ContactBanner';
import ContactBanner2 from '../components/ContactBanner2';
import { FaCheckCircle } from 'react-icons/fa';


function Org_Profile() {
  return (
    <div>
        <HeroVariant
        h1Text="Feedback"
        />
      <Container className='my-5'>
        <Row>
        <Row className="mb-0 align-items-center">
          <Col xs={12} md={8} lg={9} className='mb-3'>
            <div className="d-flex align-items-center">
              {/*<img src="" alt="The Programmers' Guild Logo" className="organization-logo" />*/}
              <div className="ml-3">
                <h3 className='mb-0'>The Programmers' Guild</h3>
                <p className="mb-0 text-muted">Recruitment Open to Any Program</p>
                <Badge bg="success">
                      <FaCheckCircle className="mr-1" /> Active
                    </Badge>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={3} className="text-md-right text-end mt-3 mt-md-0">
            <Button variant="warning"  className="apply-now-btn">Apply Now</Button>
          </Col>
        </Row>

          <Col>
            <h2>Our Mission</h2>
            <p className='text-gray2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Col>
          <Col>
            <h2>Our Vision</h2>
            <p className='text-gray2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Col>
        </Row>
      </Container>

      <Container className='my-5'>
        <Row className='text-center'>
          <h1 className='text-red'>Latest Announcements</h1>
          <p className='text-gray2'>Discover the latest announcement that will shape the future of PUP COSOA and elevate your student experience!</p>
        </Row>
        <AnnouncementVariant
          imageSrc="image2.png"
          title="PUP Student Formations' Conference Announcement"
          description="We are thrilled to announce the upcoming PUP Student Formations' Conference, a dynamic event set to empower, inspire, and unite the student community at the Polytechnic University of the Philippines (PUP). This conference is a testament to our commitment to holistic student development and leadership growth. Over the course of this exciting gathering, students from various backgrounds and disciplines will come together to engage in thought-provoking discussions, interactive workshops, and networking opportunities. Our aim is to foster an environment that encourages intellectual exploration, creativity, and collaboration, allowing students to enhance their skills and make lasting connections. Join us as we embark on this transformative journey of knowledge sharing and personal growth, marking a significant milestone in the PUP student experience. Stay tuned for further details and mark your calendars for an event that promises to be both enriching and inspiring. Together, let's shape the future of PUP's student community!"
        />
         <AnnouncementVariant
          imageSrc="image3.png"
          title="Official Statement of PUP SC COSOA on the 23rd Anak PUP Student..."
          description="As the custodians of student organizations and accreditation processes at the Polytechnic University of the Philippines (PUP), the PUP Student Council Commission on Student Organizations and Accreditation (COSOA) takes immense pride in supporting and commemorating the 23rd Anak PUP Student Celebration. This event marks a significant milestone in the history of our university, celebrating the vibrant spirit, achievements, and contributions of PUP students over the years. We extend our heartfelt congratulations to the organizing committee and all the students involved in making this celebration a reality. It is a testament to the dedication, resilience, and creativity of our student body. We believe that this gathering will not only foster a sense of unity and camaraderie but also inspire our students to continue their pursuit of excellence in academics, leadership, and community engagement."
        />
        
      </Container>
        <Row className='text-center'>
            <h1 className='text-red'>The Core of Our Team</h1>
            <p className='text-gray2'>Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment <br /> of people and great talent that truly rocks.</p>
        </Row>
      <Container>
        <OfficerCard 
          imageSrc="Officer.png"
          imageSrc2="Officer.png"
          imageSrc3="Officer.png"
          name="John Doe"
          name2="James Doe"
          name3="Joe Doe"
          role="President"
          role2="Vice President"
          role3="Secretary"
        />
      </Container>
      <ContactBanner2 />
    </div>
  );
}

export default Org_Profile;
