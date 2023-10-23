import { useState } from 'react';
import { Button, Modal, Form, Row, Col, CloseButton} from 'react-bootstrap';
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
      <Modal
        show={showLogin}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={true}
        size="lg"
        className="rounded-modal"
        centered
        animation
      >
        <div className="login-modal pt-5 " >
 
          <Modal.Header className="px-4 modal-header text-white mx-5" closeButton>
            <Modal.Title id="login-popup" className="ms-auto Inter-b modal-title mt-4">
              Welcome Back!
            </Modal.Title>
          </Modal.Header>
          <div>
              <p className="modal-subtitle Inter-normal text-center text-white pt-3 ">We're glad you want to connect!</p>
          </div>
          <Modal.Body className="Inter-normal text-white">
            <div className='login-form p-5 mx-auto  text-black shadow-lg'>
              
              <Form>
                <Form.Group className="mb-3" controlId="formLoginWebmail">
                  <Form.Label className='Inter-med'>Webmail address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your webmail" className='Inter-normal'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLoginPassword">
                  <Form.Label className='Inter-med'>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password"  className='Inter-normal'/>
                </Form.Group>

                <Row>
                  <Form.Group as={Col} controlId="formLoginCheckbox">
                    <Form.Check type="checkbox" label="Keep me logged in"  className='Inter-med'/>
                  </Form.Group>
                  <Button as={Col} variant="link" className="text-end no-decoration text-red Inter forgot-pw">
                    Forgot Password?
                  </Button>
                </Row>
                
                <Row className="p-2 my-1">
                  <Button variant="primary" type="submit" className="Inter login-b">
                  Log In
                  </Button>
                </Row>
                
                <Row classname="mb-3">
                      <p className='text-gray2 Inter-normal login-q'>Don't have an account?<span className='mx-3 text-yellow'>Register</span></p>             
                </Row>

                </Form>
            </div>
            
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default LoginPopup;
