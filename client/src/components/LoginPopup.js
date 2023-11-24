import { useState, useContext } from 'react';
import { Button, Modal, Form, Row, Col, CloseButton} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './general.css';
import { AuthContext } from '../helpers/AuthContent';


function LoginPopup() {
  const [showLogin, setShowLogin] = useState(false);

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
    keepLoggedIn: false
  });

  const {auth, menu} = useContext(AuthContext);
  const {authState, setAuthState} = auth;
  const {activeMenu, setActiveMenu} = menu;
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetails);
    axios.post(`${process.env.REACT_APP_BASE_URL}:3001/auth/login`, loginDetails).then((response) => {
      console.log(response);
      if(response.data.error){
        alert(response.data.error);
      }else{
        alert('User logged in!');
        setAuthState({...authState, status: true});
        if(response.org){
          setActiveMenu('org');
          navigate('/organization/profile');
        }
        handleCloseLogin();
      }
    });
  }

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
        <div className="login-modal pt-1 " >
 
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
                  <Form.Control type="email" placeholder="Enter your webmail address" className='Inter-normal' onChange={(e) => setLoginDetails({...loginDetails, email: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLoginPassword">
                  <Form.Label className='Inter-med'>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" className='Inter-normal' onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})}/>
                </Form.Group>

                <Row>
                  <Form.Group as={Col} controlId="formLoginCheckbox">
                    <Form.Check type="checkbox" label="Keep me logged in" className='Inter-normal' onChange={(e) => setLoginDetails({...loginDetails, keepLoggedIn: e.target.value})}/>
                  </Form.Group>
                  <Button as={Col} variant="link" className="text-end no-decoration text-red Inter forgot-pw">
                    Forgot Password?
                  </Button>
                </Row>
                
                <Row className="p-2 my-1">
                  <Button variant="primary" type="submit" className="Inter login-b" onClick={handleSubmit}>
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
