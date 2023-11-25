import React, {useState,useEffect} from 'react'
import { Button, Modal, Form, Row, Col, CloseButton} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import axios from 'axios';


function GiveFeedback({studentId, cor}) {
    axios.defaults.withCredentials = true;
    const [showFeedback, setShowFeedback] = useState(false);

    const handleCloseFeedback = () => setShowFeedback(false);
    const handleShowFeedback = () => setShowFeedback(true);

    const [feedback, setFeedback] = useState('');

    const handleSubmit = async event => {
        try{
            await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/give_feedback`, { studentId: studentId, feedback: feedback, cor:cor }).then((response) => {
                if(response.data.error){
                    alert(response.data.error);
                }else{
                    alert('Feedback given!');
                    handleCloseFeedback();
                    window.location.reload();
                }
            });
        }catch(err){
            console.log(err);
        }
    }
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
