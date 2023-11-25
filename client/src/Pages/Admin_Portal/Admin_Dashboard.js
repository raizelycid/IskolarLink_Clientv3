import React,{useState,useEffect} from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import Stat_Card from '../../components/Stat_Card';
import { Container, Row, Col, Button, InputGroup, Form, Image} from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import GiveFeedback from '../../components/Admin_Dashboard/GiveFeedback';
import './Admin_Portal.css'
import Add_Chairperson from '../../components/Add_Chairperson';


function Admin_Dashboard() {

  const [studentCount, setStudentCount] = useState(0);
  const [toVerifyCount, setToVerifyCount] = useState(0);
  const [chairperson, setChairperson] = useState({});
  const [studentsToVerify, setStudentsToVerify] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/admin/count_students').then((response) => {
      setStudentCount(response.data);
    });

    axios.get('http://localhost:3001/admin/count_students_to_verify').then((response) => {
      setToVerifyCount(response.data);
    });

    axios.get('http://localhost:3001/admin/get_chairperson').then((response) => {
      setChairperson(response.data);
    });

    axios.get('http://localhost:3001/admin/get_students_to_verify').then((response) => {
      setStudentsToVerify(response.data);
    });

    setRefresh(false);

  },[refresh])

  const handleVerify = (studentId, cor) => {
    try{
      axios.post(`${process.env.REACT_APP_BASE_URL}/admin/verify_student`, {studentId: studentId, cor: cor})
      .then((response) => {
        if(response.data.success){
          alert(response.data.success);
          setRefresh(true);
        }else{
          alert(response.data.error);
        }
      });
    }catch(err){
      console.log(err);
    }
  };
    

  return (
    <>
      <HeroVariant3
        h1Text="Admin Dashboard"
        pText="Check your users."
      />
      <Container>
        <Row className='mt-4 mb-3'>
          <h1 className='text-red'>Overview</h1>
          <h3>Academic Year 2023-2024</h3>
        </Row>
        <Row className='my-5 align-items-center'>
        <Stat_Card 
            imgSrc="/clipboard_icon.png"
            numcount="Ongoing"
            subtitle="AnR Period"
          />
          <Stat_Card 
            imgSrc="/check_icon.png"
            numcount={studentCount}
            subtitle="Iskolars"
          />
          <Stat_Card
            imgSrc="/time_icon2.png"
            numcount={toVerifyCount}
            subtitle="To Verify"
          />
        </Row>
        <Row>
          <h1 className='text-red'>User Management</h1>
        </Row>
        <Row className='ms-1 me-5 pe-3 pt-3 border'>  
          <Col xs={1} className='text-end'>
            {chairperson.user?.profile_picture ? <Image src={chairperson.user?.profile_picture} roundedCircle style={{width:"3rem"}}/> : <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-red"/>}
          </Col>
          <Col className="ms-0">
            <p className=' mb-0'><strong>{chairperson.student?.student_Fname + " " + chairperson.student?.student_Lname}</strong></p>
            <p className='text-red'>{chairperson.user?.email}</p>
          </Col>
          <Col className='text-end mt-1'>
            <Add_Chairperson />
          </Col>
        </Row>
        <Row className='text-center mt-5'>
          <h1 className='text-red'>List of Iskolar Users</h1>
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
      <Row className='m-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>COR</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentsToVerify.map((student) => {
              return(
                <tr>
                  <td>{student.student_Fname + " " + student.student_Lname}</td>
                  <td>{student.email}</td>
                  <td><span onClick={() => window.open(`${process.env.REACT_APP_BASE_URL}/${student.cor}`)} style={{color: "#007bff", cursor: "pointer"}}>View</span></td>
                  <td>{student.is_verified ? "Verified" : "Not Verified"}</td>
                  <td>{!student.is_verified && !student.cor_remarks ? <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => {handleVerify(student.id, student.cor)}}>Verify</Dropdown.Item>
                      <GiveFeedback studentId={student.id} cor={student.cor}/>
                      <Dropdown.Item href="#/action-2">Drop</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> : "Feedback Given"}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Row>
      </Container>
    </>
  );
}

export default Admin_Dashboard;
