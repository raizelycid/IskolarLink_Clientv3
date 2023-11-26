import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Container } from 'react-bootstrap';

const FeedbackForm = () => {
  const [show, setShow] = useState(false);
  const [studentNumber, setStudentNumber] = useState('');
  const [pupWebmail, setPupWebmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDone = () => {
    console.log('Student Number:', studentNumber);
    console.log('PUP Webmail:', pupWebmail);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Feedback
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static" size='lg' >
      <Modal.Header closeButton className="d-flex justify-content-center align-items-center mb-0 pb-0 mx-4">
        <Modal.Title className="text-center mt-3" style={{ fontSize: '2em', width: '100%' }}>
        {<div>
          <h2>Feedback Form</h2>
          <h4 className=''>ID: 100081273173</h4>
        </div>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-4'>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type='text'/>
              </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email'/>
              </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type='date'/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control type='text'/>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3}/>
            </Form.Group>
          </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Row className='w-100'>
            <Button variant='primary' className='mb-3' onClick={handleDone}>
              Submit
            </Button>
              
              <Button variant='light' className=' border' onClick={handleDone}>
                Cancel
              </Button>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FeedbackForm;
