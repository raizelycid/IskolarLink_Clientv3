import React from 'react'
import { HeroVariant } from '../components/HeroVariant/Hero';
import { Container, Row, Col } from 'react-bootstrap';
import { AnnouncementVariant } from '../components/AnnouncementVariant/AnnouncementCard';
import './COSOA.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
 

function COSOA() {

  return (
    <div>
      <HeroVariant 
        h1Text="PUP Student Council Commission on Student Organizations and Accreditation (COSOA)"
        pText="COSOA plays a pivotal role in fostering a vibrant campus community by overseeing the recognition and accreditation of student organizations."
      />
      <Container className='my-5'>
        <Row>
          <Col>
            <h2>Description</h2>
            <p className='text-gray2'>The sole-accrediting body and an independent student body set to develop an effective working relationship between the Central Student Council, the Office of Student Services (OSS), and all student organizations at the Polytechnic University of the Philippines (PUP).</p>
          </Col>
        </Row>
      </Container>

      <Container className='text-center my-5'>
        <Row>
          <h1 className='text-red'>COSOA Calendar</h1>
          <p className='text-gray2'>Discover the latest announcement that will shape the future of PUP COSOA and elevate your student experience!</p>
        </Row>
        <Row>
          <FullCalendar 
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          />
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
            <p className='text-gray2'>Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>
        </Row>
    </div>
  )
}

export default COSOA
