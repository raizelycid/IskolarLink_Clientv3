import React, { useState } from 'react';
import { HeroVariant2 } from '../../components/HeroVariant/Hero';
import { AnnouncementVariant } from '../../components/AnnouncementVariant/AnnouncementCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './COSOA_Portal.css'

function COSOA_Dashboard() {
  return (
    <div>
        <HeroVariant2
         imgSrc=""
         name="Commission on Student Organizations and Accreditation (COSOA)"
         webmail="pupcosoa.iskolarngbayan.pup.edu.ph"
        />
        <Container>
            <Row className="m-5 p-5">
                <Col>
                    <h2>Our Mission</h2>
                    <p>To empower and inspire future tech leaders at the Polytechnic University of the Philippines by fostering a vibrant community of passionate programmers, providing cutting-edge learning experiences, and promoting innovation and collaboration in the ever-evolving world of technology.</p>
                </Col>
                <Col xs={1}></Col>
                <Col>
                    <h2>Our Vision</h2>
                    <p>PUP The Programmers' Guild envisions a campus where every student has the opportunity to become a proficient programmer and a technology leader. We strive to create an environment that nurtures creativity, problem-solving, and ethical use of technology, paving the way for graduates who shape the future of the digital world.</p>
                </Col>
            </Row>
        </Container>
        <Container className='my-5'>
        <Row className='text-center'>
          <h1 className='text-red Inter-b dashboard-h1'>Latest Announcements</h1>
          <p className='text-gray2'>Discover the latest announcement that will shape the future of PUP COSOA and elevate your student experience!</p>
        </Row>
        <AnnouncementVariant
          imageSrc="image2.png"
          title="PUP Student Formations' Conference Announcement"
          description="We are thrilled to announce the upcoming PUP Student Formations' Conference, a dynamic event set to empower, inspire, and unite the student community at the Polytechnic University of the Philippines (PUP). This conference is a testament to our commitment to holistic student development and leadership growth. Over the course of this exciting gathering, students from various backgrounds and disciplines will come together to engage in thought-provoking discussions, interactive workshops, and networking opportunities. Our aim is to foster an environment that encourages intellectual exploration, creativity, and collaboration, allowing students to enhance their skills and make lasting connections. Join us as we embark on this transformative journey of knowledge sharing and personal growth, marking a significant milestone in the PUP student experience. Stay tuned for further details and mark your calendars for an event that promises to be both enriching and inspiring. Together, let's shape the future of PUP's student community!"
          date="November 15"
        />
         <AnnouncementVariant
          imageSrc="image3.png"
          title="Official Statement of PUP SC COSOA on the 23rd Anak PUP Student..."
          description="As the custodians of student organizations and accreditation processes at the Polytechnic University of the Philippines (PUP), the PUP Student Council Commission on Student Organizations and Accreditation (COSOA) takes immense pride in supporting and commemorating the 23rd Anak PUP Student Celebration. This event marks a significant milestone in the history of our university, celebrating the vibrant spirit, achievements, and contributions of PUP students over the years. We extend our heartfelt congratulations to the organizing committee and all the students involved in making this celebration a reality. It is a testament to the dedication, resilience, and creativity of our student body. We believe that this gathering will not only foster a sense of unity and camaraderie but also inspire our students to continue their pursuit of excellence in academics, leadership, and community engagement."
        />
        <Row className='text-center'>
        <Col>
        <Button variant="primary">+ Add Announcement</Button>
        </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default COSOA_Dashboard;
