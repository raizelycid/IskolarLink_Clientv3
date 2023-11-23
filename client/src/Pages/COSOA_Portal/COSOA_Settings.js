import React, {useState, useEffect } from 'react';
import './COSOA_Profile.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import axios from 'axios';


function COSOASettings(){

    const [cosoa, setCOSOA] = useState({
        org_name: "",
        org_picture: "",
        mission: "",
        vision: "",
        contact_number: "",
        email: "",
        social1: "",
        social2: "",
        social3: "",
        social4: "",
    });

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Logic to handle save changes
    try{
        axios.post('http://localhost:3001/cosoa_profile/update_cosoa_details', cosoa, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            if(response.data === 'Successfully updated COSOA Profile'){
                alert(response.data);
            }else{
                alert(response.data.error);
            }
        });
        console.log(cosoa)
    }catch(err){
        console.log(err);
    }
  };

  // Function to handle cancel action
  const handleCancel = () => {
    // Logic to handle cancel action
  };
  
  useEffect(() => {
    try{
        axios.get('http://localhost:3001/cosoa_profile/get_cosoa_details')
        .then((response) => {
            setCOSOA(response.data);
        });
    }catch(err){
        console.log(err);
    }
    }, []);

  return (
    <div>
      <HeroVariant
        h1Text="Settings"
        pText="Update your profile credentials."
      />

      <Container className='my-5'>
      <h1>COSOA Profile</h1>
      <Form>
            <div>
            <Form.Group as={Col} md={12} className="mb-3">
                <Form.Label>
                Name of Organization (Abbreviation/Initialism)
                </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="e.g. PUP The Programmers’ Guild (PUPTPG)" 
                defaultValue={cosoa.org_name} 
                onChange={(e) => setCOSOA({ ...cosoa, org_name: e.target.value })}
                />
            </Form.Group>

                
                </div>

                <div className='my-5'>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Upload Profile or Logo</Form.Label>
                    <Form.Control 
                    type="file" 
                    size="lg"
                    onChange={(e) => {setCOSOA({ ...cosoa, org_picture: e.target.files[0]})}}
                    />
                </Form.Group>
                
              <Form.Group as={Row} md={12} className="mb-3">
                <Form.Label>Your Mission</Form.Label>
                <Form.Control 
                    as="textarea" 
                    maxLength="600"
                    value={cosoa.mission}
                    onChange={(e) => setCOSOA({ ...cosoa, mission: e.target.value })}
                    placeholder="Enter the mission of the organization..."
                    style={{ width: '98%', margin: '10px' }}
                />
                <Form.Text className="text-muted">
                    {cosoa.mission && 600 - cosoa.mission.length} characters left
                </Form.Text>
                </Form.Group>

                <Form.Group as={Row} md={12} className="mb-3">
                <Form.Label>Your Vision</Form.Label>
                <Form.Control 
                    as="textarea" 
                    maxLength="600"
                    value={cosoa.vision}
                    onChange={(e) => setCOSOA({ ...cosoa, vision: e.target.value })}
                    placeholder="Enter the vision of the organization..."
                    style={{ width: '98%', margin: '10px' }}
                />
                <Form.Text className="text-muted">
                    {cosoa.mission && 600 - cosoa.vision.length} characters left
                </Form.Text>
                </Form.Group>
                </div>
            

                <div>
                <Row>
                <Col md={6}>
                <Form.Group as={Col} md={12} className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <InputGroup>
                    <InputGroup.Text>+63</InputGroup.Text>
                    <Form.Control
                    type="tel"
                    placeholder="(XXX) YYY-ZZZZ"
                    value={cosoa.contact_number}
                    onChange={(e) => setCOSOA({ ...cosoa, contact_number: e.target.value })}
                    />
                </InputGroup>
                </Form.Group>
                </Col>

                
                <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>PUP Webmail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="e.g. pup@student.pup.edu.ph"
                        value={cosoa.email}
                        onChange={(e) => setCOSOA({ ...cosoa, email: e.target.value })}
                    />
                    </Form.Group>
                </Col>
                </Row>
                </div>
           
          <h2 className='mt-5'>Social Media Profile</h2>
          <p className="text-gray2 mb-4">Update your Social Media Links</p>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Social Link 1</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaFacebookF /></InputGroup.Text>
                  <Form.Control 
                    type="url" 
                    placeholder="Profile link/url..." 
                    value={cosoa.social1}
                    onChange={(e) => setCOSOA({ ...cosoa, social1: e.target.value })}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Social Link 2</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaTwitter /></InputGroup.Text>
                  <Form.Control 
                    type="url" 
                    placeholder="Profile link/url..." 
                    value={cosoa.social2}
                    onChange={(e) => setCOSOA({ ...cosoa, social2: e.target.value })}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6} className="mb-4">
              <Form.Group className="mb-3">
                <Form.Label>Social Link 3</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaLinkedinIn /></InputGroup.Text>
                  <Form.Control 
                    type="url" 
                    placeholder="Profile link/url..." 
                    value={cosoa.social3}
                    onChange={(e) => setCOSOA({ ...cosoa, social3: e.target.value })}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Social Link 4</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaInstagram /></InputGroup.Text>
                  <Form.Control 
                    type="url" 
                    placeholder="Profile link/url..." 
                    value={cosoa.social4}
                    onChange={(e) => setCOSOA({ ...cosoa, social4: e.target.value })}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row className='my-5'>
            <h2>Accreditation and Revalidation Period</h2>            
            <Form>
              <Form.Group>
                <Form.Check
                  type="switch"
                  id="anr-period-toggle"
                  label="Toggling this switch will open the Accreditation and Revalidation Period of this Academic Year."
                />
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <Col className="text-end mb-4">
              <Button variant="secondary" onClick={handleSaveChanges}>Save Changes</Button>{' '}
              <Button className="btn-cancel" onClick={handleCancel}>Cancel</Button>
            </Col>
          </Row>
    
      </Form>

    </Container>
    </div>

  )
}

export default COSOASettings;