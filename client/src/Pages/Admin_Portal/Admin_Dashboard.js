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
import Add_Chairperson from '../../components/Admin_Dashboard/Add_Chairperson';
import Update_WebAdmin from '../../components/Admin_Dashboard/Update_WebAdmin';


function Admin_Dashboard() {

  const [studentCount, setStudentCount] = useState(0);
  const [toVerifyCount, setToVerifyCount] = useState(0);
  const [chairperson, setChairperson] = useState({});
  const [webAdmin,setWebAdmin] = useState({})
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/admin/count_students`).then((response) => {
      setStudentCount(response.data);
    });

    axios.get(`${process.env.REACT_APP_BASE_URL}/admin/count_students_to_verify`).then((response) => {
      setToVerifyCount(response.data);
    });

    axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get_chairperson`).then((response) => {
      setChairperson(response.data);
    });

    axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get_students`).then((response) => {
      setStudents(response.data);
    });

    axios.get(`${process.env.REACT_APP_BASE_URL}/admin/get_web_admin`).then((response)=> {
      setWebAdmin(response.data)
    })

    setRefresh(false);

  },[refresh])

  const filteredItems = students.filter((student)=>{
    let fullName = student.student_Fname.concat(" ", student.student_Lname)
    const matchesSearch = search.toLowerCase() === "" || fullName.toLowerCase().includes(search.toLowerCase());

    let matchesStatus;
    if(statusFilter==="Submitted COR"){
      matchesStatus = student.cor !== null && student.is_verified === false
    }else if(statusFilter === "Verified"){
      matchesStatus = student.is_verified === true
    }else if(statusFilter === "Not Verified"){
      matchesStatus = student.is_verified === false
    }
    else{
      matchesStatus = statusFilter === ""
    }

    return matchesSearch && matchesStatus;
  })

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

  const handleNewSemester = async () => {
    const cont = window.confirm("Are you sure you want to start a new semester?")
    if(cont){
    await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/start_semester`).then((res)=>{
      if(res.data.err){
        alert(res.data.err)
      }else{
        alert(res.data.success)
      }
    })
  }
  }
    

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
        <Row className='my-3'>
          <h1 className='text-red'>Chairperson Management</h1>
        </Row>
        <Row className='ms-1 me-5 pe-3 pt-3 border'>  
          <Col xs={1} className='text-end'>
            {chairperson.user?.profile_picture ? <Image src={`${process.env.REACT_APP_BASE_URL}/images/${chairperson.user.profile_picture}`} roundedCircle style={{width:"3rem"}}/> : <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-red"/>}
          </Col>
          <Col className="ms-0">
            <p className=' mb-0'><strong>{chairperson.student?.student_Fname + " " + chairperson.student?.student_Lname}</strong></p>
            <p className='text-red'>{chairperson.user?.email}</p>
          </Col>
          <Col className='text-end mt-1'>
            <Add_Chairperson setRefresh={setRefresh}/>
          </Col>
        </Row>
        <Row className='my-3'>
          <h1 className='text-red'>Admin Management</h1>
        </Row>
        <Row className='ms-1 me-5 pe-3 pt-3 border'>  
          <Col xs={1} className='text-end'>
            {webAdmin.user?.profile_picture ? <Image src={`${process.env.REACT_APP_BASE_URL}/images/${webAdmin.user.profile_picture}`} roundedCircle style={{width:"3rem"}}/> : <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-red"/>}
          </Col>
          <Col className="ms-0">
            <p className=' mb-0'><strong>{webAdmin.admin?.student_Fname + " " + webAdmin.admin?.student_Lname}</strong></p>
            <p className='text-red'>{webAdmin.user?.email}</p>
          </Col>
          <Col className='text-end mt-1'>
            <Update_WebAdmin setRefresh={setRefresh}/>
          </Col>
        </Row>
        <Row className='my-3'>
          <h1 className='text-red'>Start a new semester</h1>
        </Row>
        <Row className='ms-1 me-5 pe-3 pt-3 border'>  
          <Col className='text-center my-2'>
            <Button variant='primary' onClick={handleNewSemester}>Start new semester</Button>
          </Col>
        </Row>
        
        <Row className='text-center mt-5'>
          <h1 className='text-red'>List of Iskolar Users</h1>
        </Row>
        <Row className='m-4'>
        <Col className='text-start'>
        <Form.Select 
          aria-label="Select Status" 
          onChange={(e) => setStatusFilter(e.target.value)}
          value={statusFilter} 
        >
          <option value="">All Students</option>
          <option value="Submitted COR">Submitted COR</option>
          <option value="Verified">Verified</option>
          <option value="Not Verified">Not Verified</option>
          {/* Add more status options as needed */}
        </Form.Select>
        </Col>
        <Col>
        </Col>
        <InputGroup as={Col} className="text-end">
          <Button variant="outline-secondary" id="button-addon2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Form.Control
            placeholder="Search"
            className="shadow-lg"
            onChange={(e)=>setSearch(e.target.value)}
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
              <th>Days</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (filteredItems.map((student) => {
              return(
                <tr>
                  <td>{student.student_Fname + " " + student.student_Lname}</td>
                  <td>{student.user.email}</td>
                  <td>{student.cor ? (<span onClick={() => window.open(`${process.env.REACT_APP_BASE_URL}/${student.cor}`)} style={{color: "#007bff", cursor: "pointer"}}>View</span>) :(!student.cor && student.is_verified) ? "Already Verified": "N/A"}</td>
                  <td>{student.days}</td>
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
                  </Dropdown> : student.is_verified ? "Verified for this Semester": "Feedback Given"}</td>
                </tr>
              )
            })): (
              <tr>
      <td colSpan="6" style={noResultsStyle}>No results found</td>
    </tr>
            )}
          </tbody>
        </Table>
      </Row>
      </Container>
    </>
  );
}

const noResultsStyle = {
  textAlign: 'center',
  padding: '20px',
  fontSize: '1.2rem',
  color: 'grey',
  fontStyle: 'italic'
};


export default Admin_Dashboard;
