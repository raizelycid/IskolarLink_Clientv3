import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './general.css';

function LoginPopup() {
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      <Button variant="primary" className="text-white ms-2 px-3 Inter" onClick={handleShowLogin}>
        Log In
      </Button>
      <Modal show={showLogin} onHide={handleCloseLogin} backdrop="static" keyboard={false} size="lg">

            <Modal.Header closeButton className="modal-header">
                <Modal.Title id="login-popup" className="ms-auto Inter modal-title">
                Welcome Back!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center Inter-normal">
                <p className="modal-subtitle">We're glad you want to connect!</p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Webmail address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                </Form>
            </Modal.Body>
       </Modal>

    </>
  );
}

export default LoginPopup;
