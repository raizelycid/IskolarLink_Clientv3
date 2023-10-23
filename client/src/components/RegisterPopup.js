import { useState } from 'react';
import { Button, Modal, Form, Row, Col, Image } from 'react-bootstrap';
import './general.css';

function RegisterPopup() {

    const [showRegister, setShowRegister] = useState(false);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);
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
            <div className="register-modal pt-5">
                <Modal.Header closeButton className="modal-header text-white px-4 mx-5">
                    <Modal.Title id="register-popup" className="ms-auto Inter-b modal-title mt-4">
                    Sign Up!
                    </Modal.Title>
                </Modal.Header>
                <div>
                    <p className="modal-subtitle text-center Inter-normal text-white pt-3">Be part of our growing Iskolar Family!</p>
                </div>
                 <Modal.Body className="Inter-normal text-white">
                    <div className='register-form p-5 mx-auto text-black shadow-lg'>
                        <div className='text-center'>
                            <Image src="Register_icon.png" roundedCircle/>
                            <h3 className="reg-h3 Inter text-red pb-3">Account</h3>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formRegisterStudentNum">
                                <Form.Label className="Inter-med">Student Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Student Number" className="Inter-normal"></Form.Control >
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formRegisterName">
                                <Form.Label className="Inter-med">Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Full Name"></Form.Control >
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formRegisterWebmail">
                                <Form.Label className="Inter-med">Webmail*</Form.Label>
                                <Form.Control type="email" placeholder="Please enter your PUP Webmail Address" />
                            </Form.Group>

                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterPassword">
                                    <Form.Label className="Inter-med">Password*</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterPassword">
                                    <Form.Label className="Inter-med">Confirm Password* </Form.Label>
                                    <Form.Control type="password" placeholder="Passwords need to match" />
                                </Form.Group>
                            </Row>
                            
                            <Form.Check label="I accept the Terms and Privacy Policy" className="Inter-med"></Form.Check>

                            <Row className="mt-5 mb-3   ">
                                <Col/>
                                <Button as={Col} xs={7} variant="primary" type="submit">
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