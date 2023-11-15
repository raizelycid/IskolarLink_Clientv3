import React, { useCallback,  useState } from 'react';
import './Organization_Profile.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


function OrgSettings() {

    const organizationName = "";
    const classification = "";
    const natureType = [
        'Academic Organization',
        'Advocacy Organization',
        'Cultural/Arts/Dance Organization',
        'Fraternities and Sororities', 
        'Political Organization',
        'Religious Organization',
        'Scholars Organization' ,
        'Socio-civic Organization',
        'Special Interest Organization',
        'Sports Organization',
    ]; 
    
    const subClassification = [
        `College of Accountancy and Finance | CAF`,
        `College of Architecture, Design, and Built Environment | CADBE`,
        `College of Arts and Letters | CAL`,
        `College of Business Administration | CBA`,
        `College of Communication | COC`,
        `College of Computer and Information Sciences | CCIS`,
        `College of Education | COED`,
        `College of Engineering | CE`,
        `College of Human Kinetics | CHK`,
        `College of Law | CL`,
        `College of Political Science and Public Administration | CPSPA`,
        `College of Social Sciences and Development | CSSD`,
        `College of Science | CS`,
        `College of Tourism, Hospitality, and Transportation Management | CTHTM`,
        `Institute of Technology | ITECH`,
        `Open University System | OUS`,
        `Graduate School | GS`,
        `Senior High School | SHS`,
        `University-Wide`
    ];
    const advisorName = "";

    const [mission, setMission] = useState(''); // State to hold the mission text
    const [vision, setVision] = useState(''); // State to hold the vision text
  
    const handleMissionChange = (event) => {
      setMission(event.target.value);
    };
  
    const handleVisionChange = (event) => {
      setVision(event.target.value);
    };


    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    };

    const [pupEmail, setPupEmail] = useState('');
    const [alternativeEmail, setAlternativeEmail] = useState('');

    const handlePupEmailChange = (event) => {
    setPupEmail(event.target.value);
     };

    const handleAlternativeEmailChange = (event) => {
    setAlternativeEmail(event.target.value);
    };

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

  // Function to handle the profile picture upload
  const handleProfilePictureUpload = (event) => {
    // Add logic to handle the profile picture upload
    console.log(event.target.files);
  };

  // Function to handle adding an officer
  const addOfficer = () => {
    // Add logic to handle adding an officer
    console.log('Add officer');
  };
  // SOCIALS
 
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
      <h1>Organization Profile</h1>
      <h4 className='text-red mb-5' >Organization Information is an uneditable section.</h4>
      <Form>
            <div>
            <Form.Group as={Col} md={12} className="mb-3">
                <Form.Label>
                Name of Student Organization (Abbreviation/Initialism)
                </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="e.g. PUP The Programmers’ Guild (PUPTPG)" 
                defaultValue={organizationName} 
                />
            </Form.Group>

                <Form.Group as={Col} md={12} className="mb-3">
                <Form.Label >
                    Classification of Jurisdiction
                </Form.Label>
                <Form.Select>
                    <option>Choose...</option>
                    <option>Local Student Organization</option>
                    <option>University-Wide Student Organization</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                <Col sm={6}>
                    <Form.Label>Nature / Type of Student Organization</Form.Label>
                    <Form.Select>
                    <option>Choose...</option>
                    {natureType.map((type, index) => (
                        <option key={index}>{type}</option>
                    ))}
                    </Form.Select>
                </Col>
                <Col sm={6}>
                    <Form.Label>Sub-classification of Jurisdiction</Form.Label>
                    <Form.Select>
                    <option>Choose...</option>
                    {subClassification.map((subClass, index) => (
                        <option key={index}>{subClass}</option>
                    ))}
                    </Form.Select>
                
                </Col>
                </Form.Group>

                <Form.Group  as={Col} md={12} className="mb-3">
                <Form.Label>
                    Complete Name of Student Organization's Adviser(s)
                </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="John Dustin Montenegro"
                    defaultValue={advisorName} />
                </Form.Group>
                </div>

                <div className='my-5'>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Upload Profile or Logo</Form.Label>
                    <Form.Control type="file" size="lg" />
                </Form.Group>
                
              <Form.Group as={Row} md={12} className="mb-3">
                <Form.Label>Your Mission</Form.Label>
                <Form.Control 
                    as="textarea" 
                    maxLength="150"
                    value={mission}
                    onChange={handleMissionChange}
                    placeholder="Enter the mission of the organization..."
                    style={{ width: '98%', margin: '10px' }}
                />
                <Form.Text className="text-muted">
                    {150 - mission.length} characters left
                </Form.Text>
                </Form.Group>

                <Form.Group as={Row} md={12} className="mb-3">
                <Form.Label>Your Vision</Form.Label>
                <Form.Control 
                    as="textarea" 
                    maxLength="150"
                    value={vision}
                    onChange={handleVisionChange}
                    placeholder="Enter the vision of the organization..."
                    style={{ width: '98%', margin: '10px' }}
                />
                <Form.Text className="text-muted">
                    {150 - vision.length} characters left
                </Form.Text>
                </Form.Group>
                </div>
            

                <div>
                <Form.Group as={Col} md={12} className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <InputGroup>
                    <InputGroup.Text>+63</InputGroup.Text>
                    <Form.Control
                    type="tel"
                    placeholder="(XXX) YYY-ZZZZ"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    />
                </InputGroup>
                </Form.Group>

                <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>PUP Webmail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="e.g. pup@student.pup.edu.ph"
                        value={pupEmail}
                        onChange={handlePupEmailChange}
                    />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>Alternative Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="e.g. yourname@gmail.com"
                        value={alternativeEmail}
                        onChange={handleAlternativeEmailChange}
                      />
                    </Form.Group>
                    
                </Col>
                </Row>
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
    
      </Form>

    </Container>
    </div>

  )
}


export default OrgSettings;