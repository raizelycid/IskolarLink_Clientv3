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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons' 
import { Affiliated_Organizations } from '../../components/Accredited_Org';
import {useNavigate} from 'react-router-dom';


function Student_Profile() {

  const [info, setInfo] = useState({});
  const [orgs, setOrgs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try{
      axios.get('http://localhost:3001/student_portal').then((response) => {
        setInfo(response.data);
        setOrgs(response.data.orgs);
      });
    }catch(err){
      console.log(err);
    }
  },[]);

  return (
    <div>
        <HeroVariant2
        imgSrc={info.profile_picture ? `http://localhost:3001/images/${info.profile_picture}` : null}
        name={`${info.student_Fname} ${info.student_Lname}`}
        webmail={info.email}
        />
        <Container>
        <Row className="my-4">
                <Col xs={10}>
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
                {orgs.map((org, index) => (
                    <Col xs={12} md={6} lg={4} key={index}>
                        <Affiliated_Organizations
                            imageSrc={org.profile_picture ? `http://localhost:3001/org_images/${org.profile_picture}` : `http://localhost:3001/org_images/default-org-photo.jpg`}
                            title={org.org_name}
                            description={org.description}
                        />
                    </Col>
                ))}
            </Row>
              <Row className="my-4">
                  <Col xs={12}>
                          <h2>Social Media</h2>
                          <div>
                            {info.facebook ? <a href={info.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon  text-red" /></a> : null}
                            {info.twitter ? <a href={info.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon  text-red" /></a> : null}
                            {info.instagram ? <a href={info.instagram} target="_blank" rel="noopener noreferrer"><FaEnvelope className="social-icon  text-red" /></a> : null}
                            {info.linkedin ? <a href={info.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon  text-red" /></a> : null}
                          </div>
                  </Col>
            </Row>

        </Container>

    </div>
  );
}

export default Student_Profile;
