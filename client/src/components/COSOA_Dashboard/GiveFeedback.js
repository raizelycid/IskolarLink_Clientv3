import React, {useState,useEffect} from 'react'
import { Button, Modal, Form, Row, Col, CloseButton} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import axios from 'axios';

function GiveFeedback({org_applicationId, requirementId, orgApplicationStatus}) {
    
    const [showFeedback, setShowFeedback] = useState(false);

    const handleCloseFeedback = () => setShowFeedback(false);
    const handleShowFeedback = () => setShowFeedback(true);

    const [feedback, setFeedback] = useState('');

    const handleSubmit = async event => {
        try{
        if(orgApplicationStatus === 'IE1' || orgApplicationStatus === 'Pending'){
            await axios.post(`http://localhost:3001/cosoa/ie2/${org_applicationId}/${requirementId}`, { feedback: feedback }).then((response) => {
                if(response.data.error){
                    alert(response.data.error);
                }else{
                    alert('Feedback given!');
                    handleCloseFeedback();
                    window.location.reload();
                }
            });
        }else if(orgApplicationStatus === 'IE2'){
            await axios.post(`http://localhost:3001/cosoa/fe1/${org_applicationId}/${requirementId}`, { feedback: feedback }).then((response) => {
                if(response.data.error){
                    alert(response.data.error);
                }else{
                    alert('Feedback given!');
                    handleCloseFeedback();
                    window.location.reload();
                }
            });
        }else if(orgApplicationStatus === 'FE1'){
            await axios.post(`http://localhost:3001/cosoa/fe2/${org_applicationId}/${requirementId}`, { feedback: feedback }).then((response) => {
                if(response.data.error){
                    alert(response.data.error);
                }else{
                    alert('Feedback given!');
                    handleCloseFeedback();
                    window.location.reload();
                }
            });
        }else if(orgApplicationStatus === 'FE2'){
            await axios.post(`http://localhost:3001/cosoa/acc/${org_applicationId}/${requirementId}`, { feedback: feedback }).then((response) => {
                if(response.data.error){
                    alert(response.data.error);
                }else{
                    alert('Feedback given!');
                    handleCloseFeedback();
                    window.location.reload();
                }
            });
        }
    }catch(err){
            console.log(err);
        }
    }


    axios.defaults.withCredentials = true;

  return (
    <>
        <DropdownItem onClick={handleShowFeedback}>Give Feedback</DropdownItem>
        <Modal
        show={showFeedback}
        onHide={handleCloseFeedback}
        backdrop="static"
        keyboard={true}
        size="lg"
        className="rounded-modal"
        centered
        animation
        >
            <Modal.Header className="px-4 modal-header text-black mx-5" closeButton>
                <Modal.Title id="give-credentials-popup" className="ms-auto Inter-b modal-title mt-4">
                    Give Feedback
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4 mx-5">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextFeedback">
                        <Form.Label column sm="2">
                            Feedback
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Feedback" onChange={(e) => {setFeedback(e.target.value)}}/>
                        </Col>
                    </Form.Group>
                </Form>
                    <Button as='Col' variant="outline-secondary" className="text-black ms-2 px-3 Inter" onClick={handleCloseFeedback}>Cancel</Button>
                    <Button as='Col' variant="primary" className="text-black ms-2 px-3 Inter" onClick={handleSubmit}>Submit</Button>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default GiveFeedback
