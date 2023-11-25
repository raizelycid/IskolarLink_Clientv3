import React, { useState, useEffect } from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Button, InputGroup, Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function O_Membership() {

  const [members, setMembers] = useState([]);
  const [org, setOrg] = useState({});

  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_BASE_URL}/org_portal/organization/membership`)
      .then((response) => {
        setMembers(response.data.members);
        setOrg(response.data.organization);

      });
    }catch(err){
      console.log(err);
    }
  }, []);

  const handleAccept = (studentId) => {
    try{
      axios.post(`${process.env.REACT_APP_BASE_URL}/membership/membership`, {studentId: studentId, status: 'Accepted', orgId: org.id})
      .then((response) => {
        if(response.data.success){
          alert(response.data.success);
          window.location.reload();
        }else{
          alert(response.data.error);
        }
      });
    }catch(err){
      console.log(err);
    }
  }

  const handleDecline = (studentId) => {
    try{
      axios.post(`${process.env.REACT_APP_BASE_URL}/membership/membership`, {studentId: studentId, status: 'Declined', orgId: org.id})
      .then((response) => {
        if(response.data.success){
          alert(response.data.success);
          window.location.reload();
        }else{
          alert(response.data.error);
        }
      });
    }catch(err){
      console.log(err);
    }
  }


  return (
    <div>
      <HeroVariant3
        h1Text="Membership"
        pText="Check your applicants."
      />
      <Container>
      <Row className='m-4'>
        <Col xs={1}></Col>
        <Col>
          <Button variant="outline-secondary"><i class="fa-solid fa-filter"></i> Filter</Button>
        </Col>
        <InputGroup as={Col}>
          <Button variant="outline-secondary" id="button-addon2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Form.Control
            placeholder="Search"
            className="shadow-lg"
          />
        </InputGroup>
        <Col xs={1}></Col>
      </Row>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Members</th>
              <th>Email</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              return(
                <tr>
                  <td><Row>
                      <Col xs={2}>
                        <FontAwesomeIcon icon={faUser} size="2x" />
                      </Col>
                      <Col>
                        <p>{member.details.student_Lname}, {member.details.student_Fname}</p>
                      </Col>
                    </Row></td>
                  <td>{member.email}</td>
                  <td>{member.details.department}</td>
                  <td>
                    <Button variant="outline-success" className="m-1" onClick={() => handleAccept(member.details.id)}>Accept</Button>
                    <Button variant="outline-danger" className="m-1" onClick={() => handleDecline(member.details.id)}>Decline</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default O_Membership;
