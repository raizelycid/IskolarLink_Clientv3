import React, { useCallback,  useEffect,  useState, useRef} from 'react';
import './AccreditationStatus.css';
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
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Function to handle input changes and set unsaved changes flag
    // Example for handling changes in organization name input
    setProfile({ ...profile, [name]: value });
    setHasUnsavedChanges(true);
  };
  

  useEffect(() => {
    // Add event listener for beforeunload
    const handleBeforeUnload = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = ''; // For older browsers
        return 'You have unsaved changes. Are you sure you want to leave?';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Cleanup: remove event listener when component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);

  return (
    <div>
      <HeroVariant
        h1Text="Settings"
        pText="Update your profile credentials."
      />
      <Container className='my-5'>
      <h2 className='mb-0'>Personal Information</h2>
      <p>Update your photo and personal details here.</p>
      <Form className='text-lightblack'>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xs={1}>
             {showTempImage ?
              <Image src={profileImage} alt="Profile Preview" roundedCircle fluid className='setting-logo '/> :
              profile.profile_picture ? 
              <Image src={`${process.env.REACT_APP_BASE_URL}/images/${profile.profile_picture}`} alt="Profile Preview" roundedCircle fluid className='setting-logo '/> :
              <FontAwesomeIcon icon={faUserCircle} size="6x" className="text-white" />      
            } 
  
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
                onChange={handleFileChange}
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
        <Row>
          <Form.Group>
            <Form.Label>Bio</Form.Label>
            <Form.Control
            as='textarea'
            placeholder='Hi! Tell us something about yourself...'
            maxLength="600"
            value={profile.description}
            onChange={(e) =>{
              setProfile({...profile, description: e.target.value});
              setHasUnsavedChanges(true);
            }}
            disabled={!profile.is_verified}
            />
            <Form.Text className="text-muted">
                {`${profile.description ? profile.description.length : 0} / 600 characters left`}
              </Form.Text>
          </Form.Group>
        </Row>
        <Row className='mt-3'>
          <Col>
            <Form.Group>
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
              <InputGroup.Text>+63</InputGroup.Text>
              <Form.Control
                type="tel"
                placeholder="(XXX) YYY-ZZZZ"
                value={profile.contact_number}
                onChange={(e) => {
                  setProfile({ ...profile, contact_number: e.target.value });
                  setHasUnsavedChanges(true);
                }}
              />
            </InputGroup>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
              type="date"
              value={profile.birthday}
              onChange={(e) =>{
                setProfile({...profile, birthday: e.target.value});
                setHasUnsavedChanges(true);
              }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <Form.Group>
              <Form.Label>Department</Form.Label>
              <Form.Select
                placeholder='Choose your department'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Program</Form.Label>
              <Form.Select
                placeholder='Choose your program'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mt-4'>
          <h3 className='mb-0'>Password</h3>
          <p>Change your Password.</p>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                value={profile.currentPassword}
                onChange={(e) =>{
                  setProfile({...profile, currentPassword: e.target.value});
                  setHasUnsavedChanges(true);
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={profile.newPassword}
                onChange={(e) =>{
                  setProfile({...profile, newPassword: e.target.value});
                  setHasUnsavedChanges(true);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" className='px-3 py-2 mb-3'>Send Verification Email</Button>
        <Row className='mt-2'>
        <h3 className='mb-0 mt-3'>Social Media Profile</h3>
        <p className='text-gray2'>Update your social media links.</p>
        </Row>
        <Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Facebook</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaFacebookF /></InputGroup.Text>
                <Form.Control 
                  type="url" 
                  placeholder="Profile link/url..." 
                  value={profile.facebook}
                  onChange={(e) =>{
                    setProfile({...profile, facebook: e.target.value});
                    setHasUnsavedChanges(true);
                  }}
                  disabled={!profile.is_verified}
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Twitter</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaTwitter /></InputGroup.Text>
                <Form.Control 
                  type="url" 
                  placeholder="Profile link/url..." 
                  value={profile.twitter}
                  onChange={(e) =>{
                    setProfile({...profile, twitter: e.target.value});
                    setHasUnsavedChanges(true);
                  }}
                  disabled={!profile.is_verified}
                />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>LinkedIn</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaLinkedinIn /></InputGroup.Text>
                <Form.Control 
                  type="url" 
                  placeholder="Profile link/url..." 
                  value={profile.linkedin} 
                  onChange={(e) =>{
                    setProfile({...profile, linkedin: e.target.value});
                    setHasUnsavedChanges(true);
                  }}
                  disabled={!profile.is_verified}
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Social Link 4</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaInstagram /></InputGroup.Text>
                <Form.Control 
                  type="url" 
                  placeholder="Profile link/url..." 
                  value={profile.instagram} 
                  onChange={(e) =>{
                    setProfile({...profile, instagram: e.target.value});
                    setHasUnsavedChanges(true);
                  }}
                  disabled={!profile.is_verified}
                />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        </Row>
      </Form>
      <Row >
          <Col className="text-end mb-4 mt-2">
            <Button variant="secondary" onClick={handleSaveChanges} className='mx-3 px-4'>Save Changes</Button>
            <Button variant="light" className='border px-4'>Cancel</Button>
          </Col>
        </Row>
      </Container>

      <Container>
      <Form>  
<div>
          <Row>
            {!profile.is_verified ?
          <Form.Group as={Row}  md={12}  className="mb-3" controlId="formCOR">
            <Form.Label>Certificate of Registration</Form.Label>
            {(!profile.cor && !profile.cor_remarks) ?
              //<Verification/>
              <InputGroup>
                <FormControl
                  type="file"
                  placeholder="Upload Certificate of Registration"
                  style={{ width: '98%', margin: '10px' }}
                  onChange={(e) => setProfile({...profile, cor: e.target.files[0]})}
                />
              </InputGroup>
              : (!profile.cor && profile.cor_remarks) ? 
              (//<VerifyFailed/>
              <><InputGroup>
                <FormControl
                  type="file"
                  placeholder="Upload Certificate of Registration"
                  style={{ width: '98%', margin: '10px' }}
                  onChange={(e) => setProfile({...profile, cor: e.target.files[0]})}
                />
              </InputGroup>
              <p className="text-black2"><strong>Feedback: {profile.cor_remarks}</strong></p></>)
              :
              <Verifying/>}
          </Form.Group>
          : <Verified/>}
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