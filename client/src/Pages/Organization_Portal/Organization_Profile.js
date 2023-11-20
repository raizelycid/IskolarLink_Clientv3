import React, { useState, useEffect } from 'react';
import './Organization_Profile.css';
import { HeroVariant2 } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AnnouncementVariant } from '../../components/AnnouncementVariant/AnnouncementCard';
import OfficerCard from '../../components/OfficerCard';
import ContactBanner from '../../components/ContactBanner';
import ContactBanner2 from '../../components/ContactBanner2';
import axios from 'axios';



function Organization_Profile() {

  const [organization, setOrganization] = useState({});
const [user, setUser] = useState({});


useEffect(() => {
  axios.get('http://localhost:3001/org_portal/organization').then((response) => {
    setOrganization(response.data.organization);
    setUser(response.data.user);
  });
}, []);

  return (
    <div>
        <HeroVariant2 
        name={organization.org_name}
        webmail={user.email}
        />
      <Container className='my-5'>
        <Row>
            <h2>Our Mission</h2>
            <p className='text-gray2'>{organization.mission}</p>
        </Row>
        <Row>
            <h2>Our Vision</h2>
            <p className='text-gray2'>{organization.vision}</p>
        </Row>
      </Container>

      <Container className='my-5'>
        <Row className='text-center'>
          <h1 className='text-red'>Latest Announcements</h1>
          <p className='text-gray2'>Discover the latest announcement that will shape the future of PUP COSOA and elevate your student experience!</p>
        </Row>
        {/* Put announcement if time is lot */}
      </Container>
      <ContactBanner2 />
    </div>
  );
}

export default Organization_Profile;
