import React, { useCallback,  useEffect,  useState, useRef } from 'react';
import './RevalidationStatus.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Form, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Verification, { Verified, VerifyFailed, Verifying } from '../../components/Student Verification/Verification';
import axios from 'axios';


function StudSettings() {
    const [profileImage, setProfileImage] = useState(null);
    const [showTempImage, setShowTempImage] = useState(false);
    const fileInputRef = useRef(null);

    const handleContainerClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };



  // Function to handle saving changes
  const handleSaveChanges = () => {
    try{
      console.log(profile)
      axios.post(`${process.env.REACT_APP_BASE_URL}/student_portal/update_profile`, profile, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        if(response.data.success){
          alert(response.data.success);
        }else{
          alert(response.data.error);
        }
      });
    }catch(err){
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    setProfile({...profile, profile_picture: e.target.files[0]});
    setShowTempImage(true);
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };



  const [profile, setProfile] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleCORChange = (e) => {
    setProfile({...profile, cor: e.target.files[0]});
  };

  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_BASE_URL}/student_portal`).then((response) => {
        setProfile(response.data);
        console.log(response.data)
      });
    }catch(err){
      console.log(err);
    }
  },[]);


  return (
    <div>
      <HeroVariant
        h1Text="Settings"
        pText="Update your profile credentials."
      />

<Container className='my-5'>
      <h1>Organization Profile</h1>
      <Form>
            <div>
              

                <Form.Group as={Row}  className="mb-3" controlId="formHorizontalImage">
                    <Form.Label column sm={2}>
                    {showTempImage ?
                        <Image src={profileImage} alt="Profile Preview" roundedCircle fluid /> :
                    profile.profile_picture ? 
                        <Image src={`${process.env.REACT_APP_BASE_URL}/images/${profile.profile_picture}`} alt="Profile Preview" roundedCircle fluid /> :
                        <FontAwesomeIcon icon={faUserCircle} size="6x" className="text-white" />
                    
                    }   
                    </Form.Label>
                    <Col sm={10}>
                    <InputGroup>
                        <FormControl
                        type="file"
                        onChange={handleFileChange}
                        disabled={!profile.is_verified}
                        />
                    </InputGroup>
                    </Col>
                </Form.Group>
                <Row className='mt-3'>
          <Col xs={1}>
            <Image
            src="/cosoalogo.png"
            className="logo"
            style={{
              maxWidth: '100px', /* Maximum width for the image */
              maxHeight: '100px', /* Maximum height for the image */
              width: '100%', /* Ensures the image fills its container */
              height: 'auto', /* Allows the image to scale proportionally */
              borderRadius: '50%', /* Creates a circular shape */
              display: 'block' /* Ensures proper display */
            }}
            alt="Logo"
          />
          </Col>
          <Col className=' d-flex justify-content-center align-items-center'>
            <Container
              className='border text-center my-2 rounded-4'
              fluid
              onClick={handleContainerClick}
              style={{ cursor: 'pointer' }}
            >
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={(e) => {
                  setProfile({ ...profile, org_picture: e.target.value });
                }}
              />
            <Row className='justify-content-center'>
              <Image
                src="/uploadicon.png"
                style={{
                  maxWidth: '80px',
                  maxHeight: '80px',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '50%',
                  display: 'block'
                }}
                alt="Upload Icon"
              />
            </Row>
            <Row className='mb-0 pb-0'>
              <p className='text-gray2'>
                <strong className='text-red'>Click to upload</strong> or drag and drop
                <br />SVG, PNG, or JPG (max. 800x400 px)
              </p>
            </Row>
          </Container>
        </Col>
        </Row>
                

                <Form.Group as={Row}  md={12}  className="mb-3" controlId="formBio">
            <Form.Label>Bio</Form.Label>
              <FormControl
                as="textarea"
                placeholder="Hi! Tell us something about yourself..."
                style={{ width: '98%', margin: '10px' }}
                value={profile.description}
                onChange={(e) => setProfile({...profile, description: e.target.value})}
                maxLength={600}
                disabled={!profile.is_verified}
              />
              <Form.Text className="text-muted">
                {profile.description && 600 - profile.description.length} characters left
              </Form.Text>
          </Form.Group>
          

          <div className='my-5'>
            <h2 className='mb-0'>Password</h2>
            <p className="text-gray2 mb-4">Change your Password.</p>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter current password"
                    value={profile.currentPassword}
                    onChange={(e) => setProfile({...profile, currentPassword: e.target.value})}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    value={profile.newPassword}
                    onChange={(e) => setProfile({...profile, newPassword: e.target.value})}
                  />
                </Form.Group>
              </Col>
            </Row>
            </div>

            <div className='mt-3'>
            <h2>Social Media Profile</h2>
            <p className="text-gray2 mb-4">Update your Social Media Links</p>
            </div>

            <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Facebook</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaFacebookF /></InputGroup.Text>
                  <Form.Control 
                    type="url" 
                    placeholder="Profile link/url..." 
                    value={profile.facebook}
                    onChange={(e) => setProfile({...profile, facebook: e.target.value})}
                    disabled={!profile.is_verified}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Twitter</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaTwitter /></InputGroup.Text>
                  <Form.Control 
                    type="url" 
                    placeholder="Profile link/url..." 
                    value={profile.twitter}
                    onChange={(e) => setProfile({...profile, twitter: e.target.value})}
                    disabled={!profile.is_verified}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6} className="mb-4">
              <Form.Group className="mb-3">
                <Form.Label>LinkedIn</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaLinkedinIn /></InputGroup.Text>
                  <Form.Control 
                    type="url" 
                    placeholder="Profile link/url..." 
                    value={profile.linkedin} 
                    onChange={(e) => setProfile({...profile, linkedin: e.target.value})}
                    disabled={!profile.is_verified}
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
                    value={profile.instagram} 
                    onChange={(e) => setProfile({...profile, instagram: e.target.value})}
                    disabled={!profile.is_verified}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {!profile.is_verified ?
          <Form.Group as={Row}  md={12}  className="mb-3" controlId="formCOR">
            <Form.Label>Certificate of Registration</Form.Label>
            {(!profile.cor && !profile.cor_remarks) ?
              <InputGroup>
                <FormControl
                  type="file"
                  placeholder="Upload Certificate of Registration"
                  style={{ width: '98%', margin: '10px' }}
                  onChange={(e) => setProfile({...profile, cor: e.target.files[0]})}
                />
              </InputGroup>
              : (!profile.cor && profile.cor_remarks) ? 
              (<><InputGroup>
                <FormControl
                  type="file"
                  placeholder="Upload Certificate of Registration"
                  style={{ width: '98%', margin: '10px' }}
                  onChange={(e) => setProfile({...profile, cor: e.target.files[0]})}
                />
              </InputGroup>
              <p className="text-black2"><strong>Feedback: {profile.cor_remarks}</strong></p></>)
              :
               "You have already uploaded your Certificate of Registration. Please click \"Save Changes\" wait for the admin to verify your COR or for feedback."}
          </Form.Group>
          : "Congratulations! Your account has been verified."}
          </Row>
          <br/>
          <Row>
            <Col className="text-end mb-4">
              <Button variant="secondary" onClick={handleSaveChanges} className='mx-2'>Save Changes</Button>
              <Button variant="light" className='border px-4'>Cancel</Button>

            </Col>
          </Row>
          
          </div>

      </Form>
      {/*
      <Verification/>
      <Verifying/>
      <Verified/>
      <VerifyFailed/>*/
}
    </Container>
    
    </div>

  )
}


export default StudSettings;