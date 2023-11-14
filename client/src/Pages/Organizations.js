import React, {useEffect, useState} from 'react'
import { HeroVariant } from '../components/HeroVariant/Hero';
import './Organizations.css';
import Accredited_Org from '../components/Accredited_Org'; 
import { Container, Row, InputGroup, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

function Organizations() {

  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/org/show_accredited_orgs')
    .then((response) => {
      console.log(response.data);
      setOrganizations(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    console.log(organizations);
  },[organizations]);

  return (
    <div>
      <HeroVariant 
        h1Text="Accredited Organizations"
        pText="Discover our Accredited Organizations, the heart and soul of our vibrant campus community. Explore their achievements, activities, and the incredible impact they make on our campus life."
      />
      <Row className='m-4'>
        <Col xs={1}></Col>
        <Col>
          <Button variant="outline-secondary"><i class="fa-solid fa-filter"></i> Filter</Button>
        </Col>
        <InputGroup as={Col}>
          <Button variant="outline-secondary" id="button-addon2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Form.Control
            placeholder="Search"
            className="shadow-lg"
          />
        </InputGroup>
        <Col xs={1}></Col>
      </Row>
      <Container className='mx-auto mb-5'>
        <Row className='mx-4'>
          {organizations.map((org) => {
            return (
              <>
              {org.User.role !== 'student' &&
              <Col xs={12} md={4} className='mb-4'>
                <Accredited_Org 
                  imageSrc={org.User.profile_picture ? org.User.profile_picture : 'http://localhost:3001/org_images/default-org-photo.jpg'}
                  title={org.org_name}
                  description={org.User.description ? org.User.description : 'No description'}
                  tags={[org.jurisdiction, org.subjurisdiction]}
                />
              </Col>
            }
            </>
            )})}
        </Row>
        
      </Container>
    </div>
  )
}

export default Organizations
