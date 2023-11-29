import { useState } from 'react';
import { Button, Modal, Form, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './general.css';

import { Link } from 'react-router-dom';
function RegisterPopup() {

    const navigate = useNavigate();

    const Departments = [
        `College of Accountancy and Finance | CAF`,
`College of Architecture, Design, and Built Environment | CADBE`,
`College of Arts and Letters | CAL`,
`College of Business Administration | CBA`,
`College of Communication | COC`,
`College of Computer and Information Sciences | CCIS`,
`College of Education | COED`,
`College of Engineering | CE`,
`College of Human Kinetics | CHK`,
`College of Law | CL`,
`College of Political Science and Public Administration | CPSPA`,
`College of Social Sciences and Development | CSSD`,
`College of Science | CS`,
`College of Tourism, Hospitality, and Transportation Management | CTHTM`,
`Institute of Technology | ITECH`,
`Open University System | OUS`,
`Graduate School | GS`,
`Senior High School | SHS`
    ]

    const [showRegister, setShowRegister] = useState(false);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const [regDetails, setRegDetails] = useState({
        student_num: "",
        student_Lname: "",
        student_Fname: "",
        student_Mname: "",
        student_suffix: "",
        department: "",
        year_level: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(regDetails.password !== regDetails.confirmPassword){
            alert("Passwords do not match!");
        }else{
            if(regDetails.suffix === "N/A"){
                setRegDetails({...regDetails, student_suffix: ""});
            }
            axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, regDetails).then((response) => {
                if(response.data === "Student created!"){
                    alert("Registration successful!");
                    handleCloseRegister();  
                    navigate('/');
                }else{
                    alert(response.data);
                }
            });
        }
        
    }
  return (
    <>
        <Button variant="link" className="text-red link-button Inter" onClick={handleShowRegister}>
            Sign Up
        </Button>
    
        <Modal
        show={showRegister}
        onHide={handleCloseRegister}
        backdrop="static"
        keyboard={true}
        size="lg"
        className="rounded-modal"
        centered
        animation
        >
            <div className="register-modal pt-1">
                <Modal.Header closeButton className="modal-header text-white px-4 mx-5">
                    <Modal.Title id="register-popup" className="ms-auto Inter-b modal-title mt-4">
                    Sign Up!
                    </Modal.Title>
                </Modal.Header>
                <div>
                    <p className="modal-subtitle text-center Inter-normal text-white pt-3">Be part of our growing Iskolar Family!</p>
                </div>
                 <Modal.Body className="Inter-normal text-white">
                    <div className='register-form mb-5  p-5 mx-auto text-black shadow-lg'>
                        <div className='text-center'>
                            <Image src="Register_icon.png" roundedCircle/>
                            <h3 className="reg-h3 Inter text-red pb-3">Account</h3>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formRegisterStudentNum">
                                <Form.Label className="Inter-med">Student Number</Form.Label>
                                <Form.Control required type="text" placeholder="Enter your Student Number" value={regDetails.student_num} onChange={(e) => setRegDetails({...regDetails, student_num: e.target.value})}/>
                            </Form.Group>


                            <Col><Row>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterFname">
                                    <Form.Label className="Inter-med">First Name<span className="text-red">*</span></Form.Label>
                                    <Form.Control required type="text" placeholder="Enter your First Name" value={regDetails.student_Fname} onChange={(e) => setRegDetails({...regDetails, student_Fname: e.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterMname">
                                    <Form.Label className="Inter-med">Middle Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Middle Name" value={regDetails.student_Mname} onChange={(e) => setRegDetails({...regDetails, student_Mname: e.target.value})} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterLname">
                                    <Form.Label className="Inter-med">Last Name<span className="text-red">*</span></Form.Label>
                                    <Form.Control required type="text" placeholder="Enter your Last Name" value={regDetails.student_Lname} onChange={(e) => setRegDetails({...regDetails, student_Lname: e.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterSuffix">
                                    <Form.Label className="Inter-med">Suffix (N/A if Not Applicable)</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Suffix" value={regDetails.student_suffix} onChange={(e) => setRegDetails({...regDetails, student_suffix: e.target.value})} />
                                </Form.Group>
                            </Row>
                            </Col>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterDepartment">
                                    <Form.Label className="Inter-med">Department<span className="text-red">*</span></Form.Label>
                                    <Form.Select required defaultValue="Choose..." value={regDetails.department} onChange={(e) => setRegDetails({...regDetails, department: e.target.value})}>
                                        <option>Choose...</option>
                                        {Departments.map((department) => (
                                            <option key={department}>{department}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterYearLevel">
                                    <Form.Label className="Inter-med">Year Level<span className="text-red">*</span></Form.Label>
                                    <Form.Select required defaultValue="Choose..." value={regDetails.year_level} onChange={(e) => setRegDetails({...regDetails, year_level: e.target.value})}>
                                        <option>Choose...</option>
                                        <option>1st Year</option>
                                        <option>2nd Year</option>
                                        <option>3rd Year</option>
                                        <option>4th Year</option>
                                        <option>5th Year</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formRegisterWebmail">
                                <Form.Label className="Inter-med">PUP Webmail Address<span className="text-red">*</span></Form.Label>
                                <Form.Control required type="email" placeholder="Enter your PUP Webmail Address" value={regDetails.email} onChange={(e) => setRegDetails({...regDetails, email: e.target.value})}/>
                            </Form.Group>

                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterPassword">
                                    <Form.Label className="Inter-med">Password<span className="text-red">*</span></Form.Label>
                                    <Form.Control required type="password" placeholder="Enter your Password" value={regDetails.password} onChange={(e) => setRegDetails({...regDetails, password: e.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterPassword">
                                    <Form.Label className="Inter-med">Confirm Password<span className="text-red">*</span> </Form.Label>
                                    <Form.Control required type="password" placeholder="Confirm your Password" value={regDetails.confirmPassword} onChange={(e) => setRegDetails({...regDetails, confirmPassword: e.target.value})} />
                                </Form.Group>
                            </Row>
                            
                            <Form.Check required label={<p>I accept the <Link to="/terms" target="_blank" className='text-red'>Terms and Privacy Policy</Link></p>} className="Inter-med"></Form.Check>
                            <Row className="mt-5 mb-3   ">
                                <Col/>
                                <Button as={Col} xs={7} variant="primary" type="submit" onClick={handleSubmit}>
                                Register
                                </Button>
                                <Col/>
                            </Row>
                            
                            <Row classname="mb-3">
                                <p className='text-gray2 Inter-normal reg-q text-center'>Already have an account?<span className='mx-3 text-yellow'>Log in</span></p>             
                            </Row>
                        </Form>
                    </div> 
                </Modal.Body>
            </div>
        </Modal>
    </>
  )
}

export default RegisterPopup