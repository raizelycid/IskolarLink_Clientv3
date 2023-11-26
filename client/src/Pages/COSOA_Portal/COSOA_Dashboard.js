import React, { useState,useEffect } from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import Stat_Card from '../../components/Stat_Card';
import { Container, Row, Col, Button, InputGroup, Form} from 'react-bootstrap';
import './COSOA_Portal.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table'
import {useNavigate} from 'react-router-dom'
import GiveCredentials from '../../components/COSOA_Dashboard/GiveCredentials';


function COSOA_Dashboard() {

  axios.defaults.withCredentials = true;

  const [orgs, setOrgs] = useState([]);
  const navigate = useNavigate();
  const [cosoa, setCOSOA] = useState({});

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

    useEffect(() => {
      try{
        if(cosoa.application_period){
          // set application period switch to true
          document.getElementById("anr-period-initial-toggle").checked = true;
        }else{
          // set application period switch to false
          document.getElementById("anr-period-initial-toggle").checked = false;
        }
      }catch(err){
        console.log(err);
      }
    }, [cosoa.application_period]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_dashboard/get_orgs`)
    .then((response) => {
      console.log(response.data);
      setOrgs(response.data);
    });
  }, [])

  const [countApproved, setCountApproved] = useState(0);
  const [countPending, setCountPending] = useState(0);
  const [countSubmission, setCountSubmission] = useState(0);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_dashboard/count_active_orgs`)
    .then((response) => {
      console.log(response.data);
      setCountApproved(response.data);
    });

    axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_dashboard/count_pending_orgs`)
    .then((response) => {
      console.log(response.data);
      setCountPending(response.data);
    });

    axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_dashboard/count_org_application`)
    .then((response) => {
      console.log(response.data);
      setCountSubmission(response.data);
    });
  }, [])


  return (
    <>
      <HeroVariant3
        h1Text="COSOA Dashboard"
        pText="See your organization analytics"
      />
      <Container>
        <Row className='mt-4 mb-3'>
          <h1 className='text-red'>Overview</h1>
          <h3>Academic Year 2023-2024</h3>
        </Row>
        <Row className='my-5 align-items-center'>
          <Stat_Card 
            imgSrc="/check_icon.png"
            numcount={countApproved}
            subtitle="Approved"
          />
          <Stat_Card
            imgSrc="/time_icon.png"
            numcount={countPending}
            subtitle="Pending"
          />
          <Stat_Card 
            imgSrc="/clipboard_icon.png"
            numcount={countSubmission}
            subtitle="Submission"
          />
        </Row>
        <Row className='mt-4 mb-3'>
          <h1 className='text-red'>Accreditation and Revalidation Period</h1>
        </Row>
        <Row>
        <Form>
              <Form.Group>
                <Form.Check
                  type="switch"
                  id="anr-period-initial-toggle"
                  label={cosoa.application_period ? "Accreditation and Revalidation Period is now open" : "Accreditation and Revalidation Period is now closed"}
                  checked={cosoa.application_period}
                  onChange={(e) => setCOSOA({ ...cosoa, application_period: e.target.checked })}
                />
              </Form.Group>
              <Form.Label className="text-red">
              {cosoa.application_period
              ? "Student organizations and Student Representatives may now submit their applications."
              : "The COSOA will not be accepting any applications anymore"}
              </Form.Label>
            </Form>
        </Row>
        <Row className="my-2">
        </Row>
        <Row className='m-4'>
          {/*
        <Col className='text-start'>
          <Button variant="outline-secondary"><i class="fa-solid fa-filter"></i> Filter</Button>
        </Col>
        <Col>
  </Col>*/}
        <InputGroup as={Col} className="text-end">
          <Button variant="outline-secondary" id="button-addon2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Form.Control
            placeholder="Search"
            className="shadow-lg"
          />
        </InputGroup>
      </Row>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Organizations</th>
              <th>Representative</th>
              <th>Status</th>
              <th>Classification</th>
              <th>Action</th>
              <th>Credentials</th>
            </tr>
          </thead>
          <tbody>
            {orgs.map((org, index) => {
              return(
                <tr key={index}>
                  <td>{org.org_name}</td>
                  <td>{org.representative.photo ? <img src={`${process.env.REACT_APP_BASE_URL}/images/${org.photo}`} alt="Profile Picture" width="40" height="40" className="rounded-circle" /> : <FontAwesomeIcon icon={faUser} size='2xl'/>} {org.representative}</td>
                  <td>{org.application?.application_status === "Revalidated" && org.application_status === "Revalidation" ? "Revalidation" : org.application.application_status}</td>
                  <td><span className='cs-dashboard-jurisdiction'>{org.subjurisdiction}<br/>{org.type}</span></td>
                  <td><FontAwesomeIcon icon={faArrowRight} size="lg" onClick={() => {
                    navigate(`/cosoa/applicant/${org.id}`)
                  }}/></td>
                  <td>
                    <GiveCredentials role={org.role} applicationStatus={org.application.application_status} orgId={org.id}/>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default COSOA_Dashboard;
