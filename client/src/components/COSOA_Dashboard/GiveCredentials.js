import React, {useState,useEffect} from 'react'
import { Button, Modal, Form, Row, Col, CloseButton} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function GiveCredentials({role, applicationStatus, orgId}) {
    
    const [showCredentials, setShowCredentials] = useState(false);

    const handleCloseCredentials = () => setShowCredentials(false);
    const handleShowCredentials = () => setShowCredentials(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/auth/add_org/${orgId}`, { email: email, password: password }).then((response) => {
            if(response.data.error){
                alert(response.data.error);
            }else{
                alert('Credentials given!');
                handleCloseCredentials();
            }
        });
    }


    axios.defaults.withCredentials = true;

  return (
    <>
        {(role === "student" && applicationStatus === "Accredited") ? <Button variant="outline-secondary" size="sm" onClick={handleShowCredentials}>Give Credentials</Button> : <Button variant="outline-secondary" size="sm" disabled>Give Credentials</Button>}
        <Modal
        show={showCredentials}
        onHide={handleCloseCredentials}
        backdrop="static"
        keyboard={true}
        size="lg"
        className="rounded-modal"
        centered
        animation
        >
            <Modal.Header className="px-4 modal-header text-black mx-5" closeButton>
                <Modal.Title id="give-credentials-popup" className="ms-auto Inter-b modal-title mt-4">
                    Give Credentials
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4 mx-5">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        </Col>
                    </Form.Group>
                </Form>
                    <Button as='Col' variant="outline-secondary" className="text-black ms-2 px-3 Inter" onClick={handleCloseCredentials}>Cancel</Button>
                    <Button as='Col' variant="primary" className="text-black ms-2 px-3 Inter" onClick={handleSubmit}>Submit</Button>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default GiveCredentials
