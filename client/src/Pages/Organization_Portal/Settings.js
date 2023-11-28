import React, { useCallback,  useEffect,  useState } from 'react';
import './Organization_Profile.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import axios from 'axios';


function OrgSettings() {

    const [org, setOrg] = useState({});
    const [user, setUser] = useState({});
    const [socials, setSocials] = useState({});

    useEffect(() => {
        try{
            axios.get(`${process.env.REACT_APP_BASE_URL}/org_portal/organization`)
            .then((response) => {
                setOrg(response.data.organization);
                setUser(response.data.user);
                if(response.data.socials){
                setSocials(response.data.socials);
                }
            });
        }catch(err){
            console.log(err);
        }
        }, []);

    const handleSubmit = () => {
      // try catch set headers to multipart/form-data
      try{
        let formData = {};
        formData.profile_picture = user.profile_picture;
        formData.mission = org.mission;
        formData.vision = org.vision;
        formData.membership_period = org.membership_period;
        formData.strict = org.strict;
        formData.currentPassword = user.currentPassword;
        formData.newPassword = user.newPassword;
        formData.facebook = socials.facebook;
        formData.twitter = socials.twitter;
        formData.linkedin = socials.linkedin;
        formData.instagram = socials.instagram;
        console.log(formData)
        axios.post(`${process.env.REACT_APP_BASE_URL}/org_portal/organization/settings`,
            formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
            if(response.data.err){
                alert(response.data.err);
            }else{
                alert(response.data.success)
            }
            //clear formData
            formData = {};
        });
      }catch(err){
        console.log(err);
      }
    }

  return (
    <div>
      <HeroVariant
        h1Text="Settings"
        pText="Update your profile credentials."
      />

      <Container className='my-5'>
      <h2 className='mb-0'>Organization Profile</h2>
      <p>Update your photo and personal details here.</p>
      <Form>
                <div className='my-5'>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Upload Profile or Logo</Form.Label>
                    <Form.Control type="file" size="lg" onChange={(e) => {setUser({ ...user, profile_picture: e.target.files[0]})}}/>
                </Form.Group>
                
              <Form.Group as={Row} md={12} className="mb-3">
                <Form.Label>Your Mission</Form.Label>
                <Form.Control 
                    as="textarea"
                    maxLength="600"
                    value={org.mission}
                    onChange={(e) => setOrg({ ...org, mission: e.target.value })}
                    placeholder="Enter the mission of the organization..."
                    style={{ width: '98%', margin: '10px' }}
                />
                <Form.Text className="text-muted">
                    {org.mission && 600 - org.mission.length} characters left
                </Form.Text>
                </Form.Group>

                <Form.Group as={Row} md={12} className="mb-3">
                <Form.Label>Your Vision</Form.Label>
                <Form.Control 
                    as="textarea" 
                    maxLength="600"
                    value={org.vision}
                    onChange={(e) => setOrg({ ...org, vision: e.target.value })}
                    placeholder="Enter the vision of the organization..."
                    style={{ width: '98%', margin: '10px' }}
                />
                <Form.Text className="text-muted">
                    {org.vision && 600 - org.vision.length} characters left
                </Form.Text>
                </Form.Group>
                </div>
            
            <div className='my-5'>
            <h2>Password</h2>
            <p className="text-gray2 mb-4">Change your Password.</p>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter current password"
                    value={user.currentPassword}
                    onChange={(e) => setUser({ ...user, currentPassword: e.target.value })}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    value={user.newPassword}
                    onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
          
            </div>
           
          <h2>Social Media Profile</h2>
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
                    value={socials.facebook}
                    onChange={(e) => setSocials({ ...socials, facebook: e.target.value })}
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
                    value={socials.twitter}
                    onChange={(e) => setSocials({ ...socials, twitter: e.target.value })}
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
                    value={socials.linkedin}
                    onChange={(e) => setSocials({...socials, linkedin: e.target.value})}
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
                    value={socials.instagram}
                    onChange={(e) => setSocials({ ...socials, instagram: e.target.value })}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <h2>Strict Mode</h2>
            <p className="text-gray2 mb-4">Turn on if you want applicants only from your subjurisdiction.</p>
            <Form.Group as={Row} className="mb-3">
              <Col sm="10">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label={org.strict ? "Strict Mode is On" : "Strict Mode is Off"}
                  checked={org.strict}
                  onChange={(e) => setOrg({ ...org, strict: e.target.checked })}
                />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <h2>Membership Period</h2>
            <p className="text-gray2 mb-4">Set the membership period of your organization.</p>
            <Form.Group as={Row} className="mb-3">
              <Col sm="10">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label={org.membership_period ? "Membership Period is Open" : "Membership Period is Closed"}
                  checked={org.membership_period}
                  onChange={(e) => setOrg({ ...org, membership_period: e.target.checked })}
                />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <Col className="text-end mb-4">
              <Button variant="secondary" onClick={handleSubmit}>Save Changes</Button>{' '}
              <Button className="btn-cancel" onClick={''}>Cancel</Button>
            </Col>
          </Row>
    
      </Form>

    </Container>
    </div>

  )
}


export default OrgSettings;