import React, { useState,useEffect } from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Button, InputGroup, Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Stat_Card from '../../components/Stat_Card';

function Official_Members() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_BASE_URL}/org_portal/organization/members`)
      .then((response) => {
        setMembers(response.data);
      });
    }catch(err){
      console.log(err);
    }
  }, []);

  const handleRemove = (studentId) => {
    try{
      axios.post(`${process.env.REACT_APP_BASE_URL}/membership/remove_member`, {studentId: studentId})
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
        h1Text="Official Members"
        pText="Keep track of your members."
      />
      <Container>
      <Row className='mt-4 mb-3'>
          <h1 className='text-red'>Overview</h1>
          <h3>Academic Year 2023-2024</h3>
        </Row>
          <Row className='m-4'>
        <Col className='text-start'>
          <Button variant="outline-secondary"><i class="fa-solid fa-filter"></i> Filter</Button>
        </Col>
        <Col>
        </Col>
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
              <th>Members</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              return(
                <tr>
                  <td>
                    <Row>
                      <Col xs={2}>
                        <FontAwesomeIcon icon={faUser} size="2x" />
                      </Col>
                      <Col>
                        <p>{member.details.student_Lname}, {member.details.student_Fname}</p>
                      </Col>
                    </Row>
                  </td>
                  <td>{member.details.department}</td>
                  <td>
                    <Button variant="outline-secondary" className="m-1" onClick={() => handleRemove(member.details.id)}><i class="fa-solid fa-trash" ></i></Button>
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

export default Official_Members;
