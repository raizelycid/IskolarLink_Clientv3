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
                animation
            >
                <div className="register-modal pt-1">
                    <Modal.Header closeButton className="modal-header text-white px-4 mx-5 text-center">
                        <Modal.Title id="register-popup2" className="ms-auto Inter-b modal-title mt-4">
                            Sign Up!
                        </Modal.Title>
                    </Modal.Header>
                    <div>
                        <p className="modal-subtitle text-center Inter-normal text-white pt-3">Be part of our growing Iskolar Family!</p>
                    </div>
                    <Modal.Body className="Inter-normal text-white">
                        <div className='register-form p-5 mx-auto text-black shadow-lg text-center'>
                            <div className='text-center'>
                                <Image src="Register_icon.png" roundedCircle/>
                                <h3 className="reg-h3 Inter text-red pb-3">Second Step Verification</h3>
                            </div>
                            <Image src="Phone.png" className="my-4"/>
                            <div>
                                <p className='Inter-normal reg2-p mb-5'>Enter the verification code we sent to <br/> <strong>XXXX@iskolarngbayan.pup.edu.ph</strong></p>
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
                            <Row classname="mb-3">
                                <p className='text-gray2 Inter-normal reg-q text-center'>Didn't get the code?<span className='mx-3 text-yellow'>Resend</span></p>             
                            </Row>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}

export default RegisterPopup2;
