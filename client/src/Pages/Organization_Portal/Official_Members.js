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
        <Row className='mt-4 mb-3'>
          <h1 className='text-red'>Accreditation and Revalidation Period</h1>
        </Row>
        <Row>
        <Form>
              <Form.Group>
                <Form.Check
                  type="switch"
                  id="anr-period-initial-toggle"
                  label="Membership"
                />
              </Form.Group>
              <Form.Label className='text-red'>
              Iskolars <strong>may now apply</strong>.
              </Form.Label>
            </Form>
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
                    <Button variant="outline-secondary" className="m-1"><i class="fa-solid fa-trash"></i> Remove</Button>
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
