import React, {useState, useEffect } from 'react';
import './COSOA_Profile.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import axios from 'axios';


function COSOASettings(){

    const [cosoa, setCOSOA] = useState({
    });

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Logic to handle save changes
    try{
        axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa_profile/update_cosoa_details`, cosoa, {
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

  const handleToggle = () => {
    // Logic to handle toggle
    try{
      axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/application_period`)
      .then((response) => {
        if(response.data.success){
          alert(response.data.success);
          setCOSOA({ ...cosoa, application_period: response.data.period });
        }else{
          alert(response.data.error);
        }
      });
    }catch(err){
      console.log(err);
    }
  };
  
  useEffect(() => {
    try{
        axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_profile/get_cosoa_details`)
        .then((response) => {
          console.log(response.data);
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
      <h1 className='mb-0'>COSOA Profile</h1>
      <p className='text-red'>Organization Information is an uneditable section.</p>
      <Form>
            <div className='pt-2'>
            <Form.Group as={Col} md={12} className="mb-3">
                <Form.Label>
                Name of Organization (Abbreviation/Initialism)
                </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="e.g. PUP The Programmers’ Guild (PUPTPG)" 
                defaultValue={cosoa.org_name} 
                value={cosoa.org_name}
                onChange={(e) => setCOSOA({ ...cosoa, org_name: e.target.value })}
                disabled
                />
            </Form.Group>

                
                </div>
    <div className='my-3'>
               {/*<Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Upload Profile or Logo</Form.Label>
                    <Form.Control 
                    type="file" 
                    size="lg"
                    onChange={(e) => {setCOSOA({ ...cosoa, org_picture: e.target.files[0]})}}
                    />
              </Form.Group>*/}
                
              <Form.Group as={Row} md={12} className="mb-3">
                <Form.Label>Your Description</Form.Label>
                <Form.Control 
                    as="textarea" 
                    maxLength="600"
                    value={cosoa.mission}
                    onChange={(e) => setCOSOA({ ...cosoa, mission: e.target.value })}
                    placeholder="Hi! Tell us something about your organization..."
                    style={{ width: '98%', margin: '10px' }}
                />
                <Form.Text className="text-muted">
                {`${cosoa.mission ? cosoa.mission.length : 0} / 600 characters left`}
                </Form.Text>
                </Form.Group>
                </div>
            

                <div>
                <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>PUP Webmail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="e.g. pup@student.pup.edu.ph"
                        value={cosoa.email}
                        onChange={(e) => setCOSOA({ ...cosoa, email: e.target.value })}
                        readOnly  
                        disabled
                    />
                    </Form.Group>
                </Col>
                </Row>
                </div>
           
          <h2 className='mt-3'>Social Media Profile</h2>
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
          <Row>
          <Col className="text-end mb-4 mt-2">
            <Button variant="secondary" onClick={handleSaveChanges} className='mx-3 px-4'>Save Changes</Button>
            <Button variant="light" className='border px-4'>Cancel</Button>
          </Col>
        </Row>
    
      </Form>

    </Container>
    </div>

  )
}

export default COSOASettings;