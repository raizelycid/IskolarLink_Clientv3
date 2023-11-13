import React, { useState,useEffect } from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import Stat_Card from '../../components/Stat_Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './COSOA_Portal.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table'
import {useNavigate} from 'react-router-dom'


function COSOA_Dashboard() {

  axios.defaults.withCredentials = true;

  const [orgs, setOrgs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/cosoa_dashboard/get_orgs')
    .then((response) => {
      console.log(response.data);
      setOrgs(response.data);
    });
  }, [])


  return (
    <>
      <HeroVariant3
        h1Text="COSOA Dashboard"
        pText="See your organization analytics"
      />
      <Container>
        <Row className='my-5 align-items-center'>
          <Stat_Card 
            imgSrc="/check_icon.png"
            numcount="60"
            subtitle="Approved"
          />
          <Stat_Card
            imgSrc="/time_icon.png"
            numcount="23"
            subtitle="Pending"
          />
          <Stat_Card 
            imgSrc="/cross_icon.png"
            numcount="43"
            subtitle="Rejected"
          />
          <Stat_Card 
            imgSrc="/clipboard_icon.png"
            numcount="126"
            subtitle="Submission"
          />
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
            </tr>
          </thead>
          <tbody>
            {orgs.map((org, index) => {
              return(
                <tr key={index}>
                  <td>{org.org_name}</td>
                  <td>{org.representative.photo ? <img src={`http://localhost:3001/images/${org.representative.photo}`} alt="Profile Picture" width="40" height="40" className="rounded-circle" /> : <FontAwesomeIcon icon={faUser} size='2xl'/>} {org.representative.username}</td>
                  <td>{org.application.application_status}</td>
                  <td><span className='cs-dashboard-jurisdiction'>{org.subjurisdiction}<br/>{org.type}</span></td>
                  <td><FontAwesomeIcon icon={faArrowRight} size="lg" onClick={() => {
                    navigate(`/cosoa/applicant/${org.id}`)
                  }}/></td>
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
