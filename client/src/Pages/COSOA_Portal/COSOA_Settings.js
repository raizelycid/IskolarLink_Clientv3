import React, {useState, useEffect, useRef} from 'react';
import './COSOA_Profile.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Form, Button, InputGroup, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import axios from 'axios';


function COSOASettings(){
  const fileInputRef = useRef(null);

  const handleContainerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
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
                setHasUnsavedChanges(false);
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
    
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Function to handle input changes and set unsaved changes flag
    // Example for handling changes in organization name input
    setCOSOA({ ...cosoa, [name]: value });
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
      <h2 className='mb-0'>COSOA Profile</h2>
      <p className='text-red'>COSOA Information is an uneditable section.</p>
      <Form className="text-lightblack">
        <Row>
          <Form.Group>
          <Form.Label>
            Name of Organization (Abbreviation/Initialism)
          </Form.Label>
          <Form.Control 
            type="text" 
            defaultValue={cosoa.org_name} 
            placeholder={cosoa.org_name}
            onChange={(e) => setCOSOA({ ...cosoa, org_name: e.target.value })}
            disabled
            readOnly
          />
          </Form.Group>
        </Row>
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
                  setCOSOA({ ...cosoa, org_name: e.target.value });
                  setHasUnsavedChanges(true);
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
        <Row className='mt-1'>
            <Form.Group>
              <Form.Label>Your Description</Form.Label>
              <Form.Control 
                as="textarea" 
                maxLength="600"
                value={cosoa.mission}
                onChange={(e) => {
                  setCOSOA({ ...cosoa, mission: e.target.value });
                  setHasUnsavedChanges(true);
                }}
                placeholder="Enter the description of the organization..."
              />
              <Form.Text className="text-muted">
                {`${cosoa.mission ? cosoa.mission.length : 0} / 600 characters left`}
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
                value={cosoa.contact_number}
                onChange={(e) => {
                  setCOSOA({ ...cosoa, org_name: e.target.value });
                  setHasUnsavedChanges(true);
                }}
              />
            </InputGroup>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row className='mt-2'>
        <h3 className='mb-0 mt-3'>Social Media Profile</h3>
        <p className='text-gray2'>Update your social media links.</p>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Form.Group>
              <Form.Label>Social Link 1</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaFacebookF style={{color:'#1877F2'}}/></InputGroup.Text>
                <Form.Control 
                  type="url" 
                  placeholder="Profile link/url..." 
                  value={cosoa.social1}
                  onChange={(e) => {
                    setCOSOA({ ...cosoa, org_name: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Social Link 2</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaTwitter style={{color:'#1DA1F2'}}/></InputGroup.Text>
                <Form.Control 
                  type="url" 
                  placeholder="Profile link/url..." 
                  value={cosoa.social2}
                  onChange={(e) => {
                    setCOSOA({ ...cosoa, org_name: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Social Link 3</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaLinkedinIn style={{color:'#0077b5'}}/></InputGroup.Text>
                <Form.Control 
                  type="url" 
                  placeholder="Profile link/url..." 
                  value={cosoa.social3}
                  onChange={(e) => {
                    setCOSOA({ ...cosoa, org_name: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Social Link 4</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaInstagram style={{color:'#E1306C'}}/></InputGroup.Text>
                <Form.Control 
                  type="url" 
                  placeholder="Profile link/url..." 
                  value={cosoa.social4}
                  onChange={(e) => {
                    setCOSOA({ ...cosoa, org_name: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
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