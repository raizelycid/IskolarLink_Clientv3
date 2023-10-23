import { useState } from 'react';
import { Button, Modal, Form, Row, Col, Image } from 'react-bootstrap';
import './general.css';

function RegisterPopup2() {
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
            >
                <div className="register-modal"  style={{ maxHeight: '100vh', overflowY: 'auto' }}>
                    <Modal.Header closeButton className="modal-header text-white px-5 mx-5 text-center">
                        <Modal.Title id="register-popup" className="ms-auto Inter modal-title mt-4">
                            Sign Up!
                        </Modal.Title>
                    </Modal.Header>
                    <div>
                        <p className="modal-subtitle text-center text-white pt-3">Be part of our growing Iskolar Family!</p>
                    </div>
                    <Modal.Body className="Inter-normal text-white p-3 align-items-center">
                        <div className='register-form p-5 mx-5 text-black text-center'>
                            <div className='text-center'>
                                <Image src="Register_icon.png" roundedCircle/>
                                <h3 className="text-red">Second Step Verification</h3>
                            </div>
                            <Image src="Phone.png" className="my-5"/>
                            <div>
                                <p>Enter the verification code we sent to <br/> XXXX@iskolarngbayan.pup.edu.ph</p>
                            </div>
                            <Row className="justify-content-center Poppins text-center">
                                <Form.Group as={Col} className="mb-3" md={2} controlId="formOTP1">
                                    <Form.Control type="text" className="p-4 bg-lightgray"/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" md={2} controlId="formOTP2">
                                    <Form.Control type="text" className="p-4 bg-lightgray"/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" md={2} controlId="formOTP3">
                                    <Form.Control type="text" className="p-4 bg-lightgray"/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" md={2} controlId="formOTP4">
                                    <Form.Control type="text" className="p-4 bg-lightgray"/>
                                </Form.Group>
                            </Row>

                            <Row className="mt-5 mb-3">
                                <Col/>
                                <Button as={Col} xs={7} variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Col/>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group className='text-center'>
                                    <Form.Label>Didn't get the code?</Form.Label>
                                    <Form.Label className="px-4 text-yellow">Resend</Form.Label>
                                </Form.Group>
                            </Row>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}

export default RegisterPopup2;
