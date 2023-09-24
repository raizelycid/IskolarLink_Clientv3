import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
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
                {/* Additional content can be added here */}
            </Modal.Body>
       </Modal>

    </>
  );
}

export default LoginPopup;
