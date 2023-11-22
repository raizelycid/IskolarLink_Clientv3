import React, { useCallback,  useState } from 'react';
import './AccreditationStatus.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Form, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


function StudSettings() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profileImage, setProfileImage] = useState(null);
  
    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setProfileImage(URL.createObjectURL(file));
    };

    // Existing state and handlers
  const [bio, setBio] = useState('');

  // New handler for bio changes
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  // Max characters for the bio
  const maxBioCharacters = 600;

  const [mobile, setMobile] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const college=[
    "College of Accountancy and Finance (CAF)",
    "College of Architecture, Design and the Built Environment (CADBE)",
    "College of Arts and Letters (CAL)",
    "College of Business Administration (CBA)",
    "College of Communication (COC)",
    "College of Computer and Information Sciences (CCIS)",
    "College of Education (COED)",
    "College of Engineering (CE)",
    "College of Human Kinetics (CHK)",
    "College of Law (CL)",
    "College of Political Science and Public Administration (CPSPA)",
    "College of Social Sciences and Development (CSSD)",
    "College of Science (CS)",
    "College of Tourism, Hospitality and Transportation Management (CTHTM)",
    "Institute of Technology (ITech)"
  ]
  const [program, setProgram] = useState('');
  const [pupEmail, setPupEmail] = useState('');
  const [alternativeEmail, setAlternativeEmail] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  // Function to handle sending verification email
  const sendVerificationEmail = () => {
    // Add logic to handle sending a verification email
    console.log('Send verification email');
  };

  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Logic to handle save changes
    console.log({ facebook, twitter, linkedin, instagram });
  };

  // Function to handle cancel action
  const handleCancel = () => {
    // Logic to handle cancel action
  };

  return (
    <div>
      <HeroVariant
        h1Text="Settings"
        pText="Update your profile credentials."
      />

      <Container className='my-5'>
      <h1>Personal info</h1>
      <h4 className='text-red mb-5' >Update your photo and personal details here.</h4>
      <Form>
            <div>
            <Form.Group as={Row} className="mb-3">
                    <Col md={6}>
                    <Form.Label>First name</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    </Col>
                    <Col md={6}>
                    <Form.Label>Last  name</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    </Col>
                    </Form.Group>


                <Form.Group as={Row}  className="mb-3" controlId="formHorizontalImage">
                    <Form.Label column sm={2}>
                    Profile Image
                    </Form.Label>
                    <Col sm={10}>
                    <InputGroup>
                        <FormControl
                        type="file"
                        onChange={handleImageChange}
                        />
                        {profileImage && <Image src={profileImage} alt="Profile Preview" thumbnail />}
                    </InputGroup>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}  md={12}  className="mb-3" controlId="formBio">
            <Form.Label>Bio</Form.Label>
              <FormControl
                as="textarea"
                placeholder="Hi! Tell us something about yourself..."
                style={{ width: '98%', margin: '10px' }}
                value={bio}
                onChange={handleBioChange}
                maxLength={maxBioCharacters}
              />
              <Form.Text className="text-muted">
                {maxBioCharacters - bio.length} characters left
              </Form.Text>
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
            <Form.Label>Mobile Number</Form.Label>
              <InputGroup>
                <InputGroup.Text>+63</InputGroup.Text>
                <FormControl
                  type="text"
                  placeholder="(XXX) XXX-XXXX"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={6}>
            <Form.Label>Date of Birth</Form.Label>
              <InputGroup>
                <FormControl
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <InputGroup.Text>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
            <Form.Label>College</Form.Label>
            <Form.Select>
                    <option>Choose...</option>
                    {college.map((type, index) => (
                        <option key={index}>{type}</option>
                    ))}
                    </Form.Select>
            </Col>
            <Col md={6}>
            <Form.Label>Program</Form.Label>
            <FormControl
                type="text"
                placeholder="Bachelor of Science in Information Technology"
                value={program}
                onChange={(e) => setPupEmail(e.target.value)}
              />          
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
            <Form.Label>PUP Webmail</Form.Label>
              <FormControl
                type="email"
                placeholder="IskolarLink@iskolarngbayan.pup.edu.ph"
                value={pupEmail}
                onChange={(e) => setPupEmail(e.target.value)}
              />
            </Col>
            <Col md={6}>
            <Form.Label>Alternative Email</Form.Label>
              <FormControl
                type="email"
                placeholder="IskolarLink@gmail.com"
                value={alternativeEmail}
                onChange={(e) => setAlternativeEmail(e.target.value)}
              />
            </Col>
          </Row>

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
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Button variant="primary" onClick={sendVerificationEmail}>
              Send Verification Email
            </Button>
            </div>

            <div className='my-5'>
            <h2>Social Media Profile</h2>
            <p className="text-gray2 mb-4">Update your Social Media Links</p>
            </div>

            <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Social Link 1</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaFacebookF /></InputGroup.Text>
                  <Form.Control 
                    type="url" 
                    placeholder="Profile link/url..." 
                    value={facebook} 
                    onChange={(e) => setFacebook(e.target.value)} 
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
                    value={twitter} 
                    onChange={(e) => setTwitter(e.target.value)} 
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
                    value={linkedin} 
                    onChange={(e) => setLinkedin(e.target.value)} 
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
                    value={instagram} 
                    onChange={(e) => setInstagram(e.target.value)} 
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="text-end mb-4">
              <Button variant="secondary" onClick={handleSaveChanges}>Save Changes</Button>{' '}
              <Button className="btn-cancel" onClick={handleCancel}>Cancel</Button>
            </Col>
          </Row>
          </div>

      </Form>

    </Container>
    </div>

  )
}


export default StudSettings;