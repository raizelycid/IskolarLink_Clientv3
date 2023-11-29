import React, { useCallback,  useEffect,  useState, useRef } from 'react';
import './Organization_Profile.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Form, Button, InputGroup, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import axios from 'axios';


function OrgSettings() {

    const [org, setOrg] = useState({});
    const [user, setUser] = useState({});
    const [socials, setSocials] = useState({});
    const fileInputRef = useRef(null);

    const handleContainerClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    
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

    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);


    const handleInputChange = (e) => {
      const { name, value } = e.target;
    
      // Function to handle input changes and set unsaved changes flag
      // Example for handling changes in organization name input
      setOrg({ ...org, [name]: value });
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
      <Form className='text-lightblack'>
      <Container className='my-5'>
      <h2 className='mb-0'>Organization Profile</h2>
      <p className='text-red'>Organization information is an uneditable section.</p>
      <Row>
        <Form.Group>
          <Form.Label>
          Name of Organization (Abbreviation/Initialism)
          </Form.Label>
          <Form.Control
          type="text" 
          //defaultValue={user.org_name} 
          //placeholder={user.org_name}
          onChange={(e) => setOrg({ ...org, org_name: e.target.value })}
          disabled
          readOnly
          />
        </Form.Group>
      </Row>
      <Row className='mt-2'>
        <Form.Group>
          <Form.Label>
          Classification of Jurisdiction
          </Form.Label>
          <Form.Select
          //defaultValue={user.org_name} 
          //placeholder={user.org_name}
          onChange={(e) => setOrg({ ...org, org_name: e.target.value })}
          disabled
          readOnly
          />
        </Form.Group>
      </Row>          
        <Row className='mt-2'>
          <Col>
            <Form.Group>
              <Form.Label>
              Nature / Type of Student Organization
              </Form.Label>
              <Form.Select
                //defaultValue={user.org_name} 
                //placeholder={user.org_name}
              //onChange={(e) => setOrg({ ...org, org_name: e.target.value })}
              disabled
              readOnly
              />
            </Form.Group>
          </Col>
          <Col>
          <Form.Group>
              <Form.Label>
              Sub-classification of Jurisdiction
              </Form.Label>
              <Form.Select
                //defaultValue={user.org_name} 
                //placeholder={user.org_name}
              //onChange={(e) => setOrg({ ...org, org_name: e.target.value })}
              disabled
              readOnly
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Form.Group>
            <Form.Label>
              Complete Name of Student Organization's Adviser(s)
            </Form.Label>
            <Form.Control
            type="text" 
            //defaultValue={user.org_name} 
            //placeholder={user.org_name}
            onChange={(e) => setOrg({ ...org, org_name: e.target.value })}
            disabled
            readOnly
            />
          </Form.Group>
        </Row>
        <Row className='mt-4'>
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
              onChange={(e) => {setUser({ ...user, profile_picture: e.target.files[0]});
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
            //value={org.mission}
            onChange={(e) => {
              setOrg({ ...org, mission: e.target.value });
              setHasUnsavedChanges(true);
            }}
            placeholder="Hi! Tell us something about your organization..."
            />
            <Form.Text className='text-muted'>
             {/* {`${org.mission ? org.mission.length : 0} / 600 characters left`}*/}
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
                //value={org.contact_number}
                onChange={(e) => {
                  setOrg({ ...org, org_name: e.target.value });
                  setHasUnsavedChanges(true);
                }}
              />
            </InputGroup>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row className='mt-4'>
          <h3 className='mb-0'>Password</h3>
          <p>Change your Password.</p>
        </Row>
        <Row>
          <Col>
            <Form.Group className='mb-3'>
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
               placeholder='Enter current password'
              //value={user.currentPassword}
              onChange={(e) => {
              setUser({ ...user, currentPassword: e.target.value });
              setHasUnsavedChanges(true);
              }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                //value={user.newPassword}
                onChange={(e) => {
                setUser({ ...user, newPassword: e.target.value });
                setHasUnsavedChanges(true);
                }}
              />
            </Form.Group>      
          </Col>
        </Row>
        <Button variant="primary" className='px-3 py-2 mb-3'>Send Verification Email</Button>
        <Row className='mt-1'>
        <h3 className='mb-0 mt-2'>Social Media Profile</h3>
        <p className="text-gray2">Update your Social Media Links</p>
        </Row>
        <Row>
          <Row>
            <Col>
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
            <Col>
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
          </Row>
          <Row>
            <Col>
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
            <Col>
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
        </Row>  
        <Row>
          <Col className="text-end mb-4 mt-2">
            <Button variant="secondary" onClick={handleSubmit} className='mx-3 px-4'>Save Changes</Button>
            <Button variant="light" className='border px-4'>Cancel</Button>
          </Col>
        </Row>
        </Container>
      </Form>
    </div>

  )
}


export default OrgSettings;