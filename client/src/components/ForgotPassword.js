import { useState, useContext } from 'react';
import { Button, Modal, Form, Row, Col, CloseButton} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './general.css';
import { AuthContext } from '../helpers/AuthContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure you have FontAwesome imported
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import the eye icons
import RegisterPopup from './RegisterPopup'

function ForgotPassword({setShowLogin, showForgotPassword, setShowForgotPassword}) {
    const [forgotPasswordDetails, setForgotPasswordDetails] = useState({
        email: '',
    });
    const {auth, menu} = useContext(AuthContext);
    const {authState, setAuthState} = auth;
    const {activeMenu, setActiveMenu} = menu;
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;


    const handleCloseForgotPassword = () => setShowForgotPassword(false);
    const handleShowForgotPassword = () => {
        setShowForgotPassword(true);
        setShowLogin(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    

  return (
    <div>
        <Modal show={showForgotPassword} onHide={handleCloseForgotPassword} centered>
            <Modal.Header>
                <Modal.Title className="Inter">Forgot Password</Modal.Title>
                <CloseButton onClick={handleCloseForgotPassword}/>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} controlId="formEmail">
                        <Form.Label column sm={3} className="text-end Inter">Email</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setForgotPasswordDetails({...forgotPasswordDetails, email: e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="Inter">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

      
    </div>
  )
}



export default ForgotPassword
