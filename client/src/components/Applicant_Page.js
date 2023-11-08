import React, { useEffect, useState } from 'react';
import { HeroVariant3 } from '../components/HeroVariant/Hero';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import './Applicant_Page.css'
import Table from 'react-bootstrap/Table'

function Applicant_Page() {

  const Actions = ['Proceed to IE2', 'Proceed to FE1', 'Proceed to FE2', 'Accredit', 'Revalidate', 'Give Feedback', 'Reject']

  const ActionLinks = (action) => {
    if(action === 'Proceed to IE2'){
      axios.post(`http://localhost:3001/cosoa/ie2/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully updated application to IE2');
        window.location.reload('false');
        }
      });
    }else if(action === 'Proceed to FE1'){
      axios.post(`http://localhost:3001/cosoa/fe1/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully updated application to FE1');
        window.location.reload('false');
        }
      });
    }else if(action === 'Proceed to FE2'){
      axios.post(`http://localhost:3001/cosoa/fe2/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully updated application to FE2');
        window.location.reload('false');
        }
      });
    }else if(action === 'Accredit'){
      axios.post(`http://localhost:3001/cosoa/accredit/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully accredited organization');
        navigate('/cosoa/dashboard')
        }
      });
    }else if(action === 'Revalidate'){
      axios.post(`http://localhost:3001/cosoa/accredit/${org_application.id}`).then((res) => {
        if(res.data.error){
          alert(res.data.error);
        }else{
        alert('Successfully revalidated organization');
        navigate('/cosoa/dashboard')
        }
      });
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

  useEffect(() => {
    axios.get(`http://localhost:3001/cosoa_dashboard/get_org/${id}`)
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

  return (
    <>
      <HeroVariant3
        h1Text="Revalidation and Accreditation Applicants"
        pText="Check your applicants."
      />
      <Container>
        <Row>
            <Col>
                <Image roundedCircle/>
            </Col>
        </Row>
      </Container>
    <Container className='applicant-header-container'>
      <Row>
        <Col>
        {user.profile_picture ? <img src={`http://localhost:3001/org_images/${user.profile_picture}`} alt="Profile Picture" width="100" height="100" className="rounded-circle" /> : <img src='http://localhost:3001/org_images/default-org-photo.jpg' alt="Profile Picture" width="100" height="100" className="rounded-circle" />
          }
        <span className='applicant-org-name'>{applicant.org_name}</span>
        </Col>
        <Col className='d-flex align-items-center justify-content-end'>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='applicant-actions'>
              {org_application.application_status}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
              org_application.application_status === 'Pending' ? <Dropdown.Item onClick={()=>ActionLinks(Actions[0])}>{Actions[0]}</Dropdown.Item> :
              org_application.application_status === 'IE1' ? <Dropdown.Item onClick={()=>ActionLinks(Actions[0])}>{Actions[0]}</Dropdown.Item> :
              org_application.application_status === 'IE2' ? <Dropdown.Item onClick={()=>ActionLinks(Actions[1])}>{Actions[1]}</Dropdown.Item> :
              org_application.application_status === 'FE1' ? <Dropdown.Item onClick={()=>ActionLinks(Actions[2])}>{Actions[2]}</Dropdown.Item> :
              org_application.application_status === 'FE2' && applicant.application_status === 'Accreditation' ? <Dropdown.Item onClick={()=>ActionLinks(Actions[3])}>{Actions[3]}</Dropdown.Item> :
              org_application.application_status === 'FE2' && applicant.application_status === 'Revalidation' ? <Dropdown.Item onClick={()=>ActionLinks(Actions[4])}>{Actions[4]}</Dropdown.Item> : null
            }
            <Dropdown.Item>{Actions[5]}</Dropdown.Item>
            <Dropdown.Item>{Actions[6]}</Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>
        </Col>
      </Row>

    </Container>
    <Container>
      
      <form>
        <Form.Group as={Col} controlId='jurisdiction'>
          <Form.Label>Classification of Jurisdiction</Form.Label>
          <Form.Control type='text' placeholder='Jurisdiction' value={applicant.jurisdiction} readOnly/>
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId='type'>
            <Form.Label>Nature / Type of Student Organization</Form.Label>
            <Form.Control type='text' placeholder='Type' value={applicant.type} readOnly/>
          </Form.Group>
          <Form.Group as={Col} controlId='subjurisdiction'>
            <Form.Label>Sub-classification of  Jurisdiction</Form.Label>
            <Form.Control type='text' placeholder='Sub-Jurisdiction' value={applicant.subjurisdiction} readOnly/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='advisers'>
            <Form.Label>Advisers</Form.Label>
            <Form.Control type='text' placeholder='Advisers' value={advisers} readOnly/>
          </Form.Group>
          <Form.Group as={Col} controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='text' placeholder='Email' value={user.email} readOnly/>
          </Form.Group>
        </Row>
      </form>

    </Container>
    <Container className='applicant-footer-container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Submitted</th>
            <th>Download Link</th>
          </tr>
        </thead>
        <tbody>
          {requirements.map((requirement, index) => {
            return(
              <tr key={index}>
                <td><span className='applicant-requirement-name'>{requirement.requirement_name}</span></td>
                {applicant.application_status === "Accreditation" ? 
                <td><span className='applicant-download-text' onClick={() => window.open(`http://localhost:3001/accreditation/${applicant.id}/${requirement.requirement_name}.pdf`,'_blank','noopener')}>Download</span></td>
                 : <td><span className='applicant-download-text' onClick={() => window.open(`http://localhost:3001/revalidation/${applicant.id}/${requirement.requirement_name}.pdf`,'_blank','noopener')}>Download</span></td>}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
    </>
  );
}

export default Applicant_Page;
