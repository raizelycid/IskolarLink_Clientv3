import React, { useState, useEffect } from 'react';
import './Student_Profile.css';
import { HeroVariant2 } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { AnnouncementVariant } from '../../components/AnnouncementVariant/AnnouncementCard';
import OfficerCard from '../../components/OfficerCard';
import ContactBanner from '../../components/ContactBanner';
import ContactBanner2 from '../../components/ContactBanner2';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import Accredited_Org2 from '../../components/Accredited_Org'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons' 


function Student_Profile() {

  const [info, setInfo] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    try{
      axios.get('http://localhost:3001/student_portal').then((response) => {
        setInfo(response.data);
      });

      axios.get('http://localhost:3001/org/show_accredited_orgs').then((response) => {
      setOrganizations(response.data);
    })
    }catch(err){
      console.log(err);
    }
  },[]);

  return (
    <div>
        <HeroVariant2
        imgSrc={info.profile_picture}
        name={`${info.student_Fname} ${info.student_Lname}`}
        webmail={info.email}
        />
        <Container>
        <Row className="my-4">
                <Col xs={12}>
                    <h2>About me</h2>
                    {info.description ? <p>{info.description}</p> : <p>No description yet.</p>}
                    <p><strong>Department:</strong> {info.department}</p>
                    <p><strong>Year Level:</strong> {info.year_level}</p>
                </Col>
            </Row>
            <Row className="my-4">
                <Col xs={12}>
                    <h2>Organization Affiliation</h2>
                </Col>
            </Row>
            <Row>
              {organizations.map((org) => {
                return (
                  <>
                  {org.User.role !== 'student' &&
                  <Col xs={12} md={4} className='mb-4'>
                    <Accredited_Org2 
                      imageSrc={org.User.profile_picture ? org.User.profile_picture : 'http://localhost:3001/org_images/default-org-photo.jpg'}
                      title={org.org_name}
                      description={org.User.description ? org.User.description : 'No description'}
                      tags={[org.jurisdiction, org.subjurisdiction]}
                    />
                  </Col>
                  }
                  </>
                )
              }
              )}
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
