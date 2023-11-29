import React, { useEffect, useState,useRef } from 'react';
import { HeroVariant3 } from '../HeroVariant/Hero';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import './Applicant_Page.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import GiveFeedback from './GiveFeedback';
import { Alert } from 'react-bootstrap'

function Applicant_Page() {

  axios.defaults.withCredentials = true;

  const Actions = ['Proceed to IE2', 'Proceed to FE1', 'Proceed to FE2', 'Accredit', 'Revalidate', 'Give Feedback', 'Reject']

  const ActionLinks = (action) => {
    if(action === 'Proceed to IE2'){
      axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/ie2/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully updated application to IE2');
        window.location.reload('false');
        }
      });
    }else if(action === 'Proceed to FE1'){
      axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/fe1/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully updated application to FE1');
        window.location.reload('false');
        }
      });
    }else if(action === 'Proceed to FE2'){
      axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/fe2/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully updated application to FE2');
        window.location.reload('false');
        }
      });
    }else if(action === 'Accredit'){
      axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/accredit/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully accredited organization');
        navigate('/cosoa/dashboard')
        }
      });
    }else if(action === 'Revalidate'){
      axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/accredit/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully revalidated organization');
        navigate('/cosoa/dashboard')
        }
      });
    }else if(action === 'Reject'){
      axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/reject/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully rejected organization');
        navigate('/cosoa/dashboard')
        }
      });
    }
  }

  const showApprovedAlert = () => {
    if(showAlert){
    return(
      <Alert variant='success' onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Requirement/s Approved</Alert.Heading>
        <p>
          You have successfully approved a requirement/s.
        </p>
      </Alert>
    )
    }
  }

  const location = useLocation();
  const {id} = useParams();
  const navigate = useNavigate();

  const [applicant, setApplicant] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [advisers, setAdvisers] = useState([]);
  const [user, setUser] = useState([]);
  const [org_application, setOrg_Application] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_dashboard/get_org/${id}`)
    .then((response) => {
      // check if error first
      if(response.data.error){
        navigate('/cosoa/dashboard');
        alert(response.data.error);
      }else{
        setApplicant(response.data.org);
        setRequirements(response.data.organized_requirements);
        setAdvisers(response.data.adviser_names);
        setUser(response.data.user);
        setOrg_Application(response.data.org_application);
      }
    });
  }, [location.pathname])

  const hiddenFileInput = useRef(null);

  const handleClick = (event, requirement_name) => {
    setSelectedFile(requirement_name);
    hiddenFileInput.current.click();
  };

  const handleChange = async event => {
    try{
      await axios.post(`${process.env.REACT_APP_BASE_URL}/org/update_form/${applicant.id}/${applicant.application_status}`, {file: event.target.files[0], requirement_name: selectedFile}, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
          alert('Successfully updated form');
          window.location.reload('false');
        }
      });
    }
    catch(err){
    console.log(err);
  }
  };


  const handleApprove = async requirementId => {
    try{
      if(org_application.application_status === 'IE1' || org_application.application_status === 'Pending'){
        await axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/ie2/${org_application.id}/${requirementId}`).then((res) => {
          if(res.data.error){
            alert(res.data.error);
          }
          else{
            // Change the status of the requirement to approved
            setRequirements(requirements.map((requirement) => {
              if(requirement.id === requirementId){
                requirement.status = 'Approved';
              }
              return requirement;
            }))
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        });
      }else if(org_application.application_status === 'IE2'){
        await axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/fe1/${org_application.id}/${requirementId}`).then((res) => {
          if(res.data.error){
            alert(res.data.error);
          }
          else{
            setRequirements(requirements.map((requirement) => {
              if(requirement.id === requirementId){
                requirement.status = 'Approved';
              }
              return requirement;
            }))
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        });
      }else if(org_application.application_status === 'FE1'){
        await axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/fe2/${org_application.id}/${requirementId}`).then((res) => {
          if(res.data.error){
            alert(res.data.error);
          }
          else{
            setRequirements(requirements.map((requirement) => {
              if(requirement.id === requirementId){
                requirement.status = 'Approved';
              }
              return requirement;
            }))
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        });
      }else if(org_application.application_status === 'FE2'){
        await axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/acc/${org_application.id}/${requirementId}`).then((res) => {
          if(res.data.error){
            alert(res.data.error);
          }
          else{
            setRequirements(requirements.map((requirement) => {
              if(requirement.id === requirementId){
                requirement.status = 'Approved';
              }
              return requirement;
            }))
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        });
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleApproveAll = async () => {
    try{
      console.log("Attempting to approve all..")
      if(org_application.application_status === 'IE1' || org_application.application_status === 'Pending'){
        await axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/ie2/${org_application.id}/1`, {all:true}).then((res) => {
          if(res.data.error){
            alert(res.data.error);
          }
          else{
            // Change the status of the requirement to approved
            setRequirements(requirements.map((requirement) => {
              requirement.status = 'Approved';
              return requirement;
            }))
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        });
      }else if(org_application.application_status === 'IE2'){
        await axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/fe1/${org_application.id}/1`, {all:true}).then((res) => {
          if(res.data.error){
            alert(res.data.error);
          }
          else{
            setRequirements(requirements.map((requirement) => {
              requirement.status = 'Approved';
              return requirement;
            }))
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        });
      }else if(org_application.application_status === 'FE1'){
        await axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/fe2/${org_application.id}/1`, {all:true}).then((res) => {
          if(res.data.error){
            alert(res.data.error);
          }
          else{
            setRequirements(requirements.map((requirement) => {
              requirement.status = 'Approved';
              return requirement;
            }))
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        });
      }else if(org_application.application_status === 'FE2'){
        await axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/acc/${org_application.id}/1`, {all:true}).then((res) => {
          if(res.data.error){
            alert(res.data.error);
          }
          else{
            setRequirements(requirements.map((requirement) => {
              requirement.status = 'Approved';
              return requirement;
            }))
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        });
      }
    }
    catch(err){
      console.log(err);
    }
  }
    

  return (
    <>
      <HeroVariant3
        h1Text="Revalidation and Accreditation Applicants"
        pText="Check your applicants."
      />
      <Container>
        <Row>
          <Col>
            <Image roundedCircle />
          </Col>
        </Row>
      </Container>
      <Container className="applicant-header-container">
        <Row>
          <Col>
            {user.profile_picture && user.role === "organization" ? (
              <img
                src={`${process.env.REACT_APP_BASE_URL}/org_images/${user.profile_picture}`}
                alt="Profile Picture"
                width="100"
                height="100"
                className="rounded-circle"
              />
            ) : (
              <img
                src={`${process.env.REACT_APP_BASE_URL}/org_images/default-org-photo.jpg`}
                alt="Profile Picture"
                width="100"
                height="100"
                className="rounded-circle"
              />
            )}
            <span className="applicant-org-name">{applicant.org_name}</span>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="applicant-actions">
                {org_application.application_status}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {org_application.application_status === "Pending" ||
                org_application.application_status === "Revalidation" ? (
                  <Dropdown.Item onClick={() => ActionLinks(Actions[0])}>
                    {Actions[0]}
                  </Dropdown.Item>
                ) : org_application.application_status === "IE1" ? (
                  <Dropdown.Item onClick={() => ActionLinks(Actions[0])}>
                    {Actions[0]}
                  </Dropdown.Item>
                ) : org_application.application_status === "IE2" ? (
                  <Dropdown.Item onClick={() => ActionLinks(Actions[1])}>
                    {Actions[1]}
                  </Dropdown.Item>
                ) : org_application.application_status === "FE1" ? (
                  <Dropdown.Item onClick={() => ActionLinks(Actions[2])}>
                    {Actions[2]}
                  </Dropdown.Item>
                ) : org_application.application_status === "FE2" &&
                  applicant.application_status === "Accreditation" ? (
                  <Dropdown.Item onClick={() => ActionLinks(Actions[3])}>
                    {Actions[3]}
                  </Dropdown.Item>
                ) : org_application.application_status === "FE2" &&
                  applicant.application_status === "Revalidation" ? (
                  <Dropdown.Item onClick={() => ActionLinks(Actions[4])}>
                    {Actions[4]}
                  </Dropdown.Item>
                ) : null}
                <Dropdown.Item onClick={()=> ActionLinks(Actions[6])}>{Actions[6]}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      <Container>
        <form>
          <Form.Group as={Col} controlId="jurisdiction">
            <Form.Label>Classification of Jurisdiction</Form.Label>
            <Form.Control
              type="text"
              placeholder="Jurisdiction"
              value={applicant.jurisdiction}
              readOnly
            />
          </Form.Group>
          <Row>
            <Form.Group as={Col} controlId="type">
              <Form.Label>Nature / Type of Student Organization</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type"
                value={applicant.type}
                readOnly
              />
            </Form.Group>
            <Form.Group as={Col} controlId="subjurisdiction">
              <Form.Label>Sub-classification of Jurisdiction</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sub-Jurisdiction"
                value={applicant.subjurisdiction}
                readOnly
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="advisers">
              <Form.Label>Advisers</Form.Label>
              <Form.Control
                type="text"
                placeholder="Advisers"
                value={advisers}
                readOnly
              />
            </Form.Group>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                value={user.email}
                readOnly
              />
            </Form.Group>
          </Row>
        </form>
      </Container>
      {showApprovedAlert()}
      <Container className="applicant-footer-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>File Submitted</th>
              <th>Download Link</th>
              <th>Submit Signed Form</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requirements.map((requirement, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span className="applicant-requirement-name">
                      {requirement.requirement_name}
                    </span>
                  </td>
                  {applicant.application_status === "Accreditation" ? (
                    <td>
                      <span
                        className="applicant-download-text"
                        onClick={() =>
                          window.open(
                            `${process.env.REACT_APP_BASE_URL}/accreditation/${applicant.id}/${requirement.requirement_name}.pdf`,
                            "_blank",
                            "noopener"
                          )
                        }
                      >
                        Download
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span
                        className="applicant-download-text"
                        onClick={() =>
                          window.open(
                            `${process.env.REACT_APP_BASE_URL}/revalidation/${applicant.id}/${requirement.requirement_name}.pdf`,
                            "_blank",
                            "noopener"
                          )
                        }
                      >
                        Download
                      </span>
                    </td>
                  )}
                  <td>
                    <Button
                      variant="primary"
                      onClick={(event) =>
                        handleClick(event, requirement.requirement_name)
                      }
                    >
                      Update
                    </Button>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                      ref={hiddenFileInput}
                    />
                  </td>
                  <td>
                    {requirement.status !== "Approved" &&
                    requirement.status !== "Revision" ? (
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="primmary"
                          id="requirement-status"
                        >
                          {requirement.status}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={(event) => handleApprove(requirement.id)}
                          >
                            Approve
                          </Dropdown.Item>
                          <GiveFeedback
                            org_applicationId={org_application.id}
                            requirementId={requirement.id}
                            orgApplicationStatus={
                              org_application.application_status
                            }
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : requirement.status === "Approved" ? (
                      <span className="applicant-approved-text">
                        {requirement.status}
                      </span>
                    ) : requirement.status === "Revision" ? (
                      <span className="applicant-revision-text">
                        Revision needed
                      </span>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Row>
          <Col className="d-flex align-items-center justify-content-end">
            <Button variant="primary" onClick={handleApproveAll}>
              Approve All
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Applicant_Page;
