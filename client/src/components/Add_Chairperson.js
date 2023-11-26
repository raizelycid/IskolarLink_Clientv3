import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';


const Add_Chairperson = ({setRefresh}) => {
  const [show, setShow] = useState(false);
  const [studentNumber, setStudentNumber] = useState('');
  const [pupWebmail, setPupWebmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDone = async () => {
    console.log('Student Number:', studentNumber);
    console.log('PUP Webmail:', pupWebmail);
  
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/admin/update_chairperson`, {
        student_num: studentNumber,
        email: pupWebmail,
      })
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          setRefresh(true);
          handleClose();
        } else if (res.status === 400) {
          alert(res.data.error); // Display the specific error message from the API
        } else {
          // Handle unexpected status codes or server errors here
          alert('Server error or unexpected response');
        }
      })
      .catch((error) => {
        // Handle network errors or other errors here
        console.error('API request failed with error:', error);
        alert('Failed to update chairperson');
      });
  };
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Chairperson
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className='text-center' style={{fontSize:'2em'}}>Update COSOA Chairperson</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pt-0'>
          <Form>
            <Form.Group controlId="studentNumber" className='mb-3'>
              <Form.Label><strong>Student Number</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="2021-XXXX-MN-0"
                value={studentNumber}
                onChange={(e) => setStudentNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="pupWebmail">
              <Form.Label><strong>PUP Webmail</strong></Form.Label>
              <Form.Control
                type="email"
                placeholder="xxxx@iskolarngbayan.pup.edu.ph"
                value={pupWebmail}
                onChange={(e) => setPupWebmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Row className='w-100'>
            <Col>
              <Button variant='primary' className='w-100 mb-3' onClick={handleDone}>
                Done
              </Button>
              <Button variant='light' className='w-100 border' onClick={handleDone}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add_Chairperson;
