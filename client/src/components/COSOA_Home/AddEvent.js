import { useState } from 'react';
import { Button, Modal, Form, Row, Col, CloseButton, Container} from 'react-bootstrap';
import './general.css';
import axios from 'axios';


function AddEvent({setRefreshEvents}) {
  const [showEvent, setShowEvent] = useState(false);
  const handleCloseEvent = () => setShowEvent(false);
  const handleShowEvent = () => setShowEvent(true);

  const [date, setDate] = useState(new Date());

  const [postEvent, setPostEvent] = useState({
    title:'',
    date: '',
    description: '',
    link: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(`http://localhost:3001/cosoa_ann/add_event`, postEvent).then((response) => {
        if(response.data.error){
          alert(response.data.error);
        }else{
          alert('Successfully added event!');
          setRefreshEvents(true);
          handleCloseEvent();

        }
      });
      console.log(postEvent)
      
    } catch (error) {
      
    }
  }

  return (
    <>
        <Button variant="primary" onClick={handleShowEvent}>+ Add Event</Button>
        <Modal
            show={showEvent}
            onHide={handleCloseEvent}
            backdrop="static"
            keyboard={true}
            size="lg"
            className="rounded-modal"
            centered
            animation
        >
        <Container fluid className="pt-1" >
          <Modal.Header className="px-4 modal-header text-black mx-5" closeButton>
            <Modal.Title id="announcement-popup" className="ms-auto Inter-b modal-title mt-4">
              Publish an Event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="Inter-normal">
            <div className='p-5'>
              <Form>
                <Form.Group className="mb-3" controlId="formEventTitle">
                  <Form.Label className='Inter-med'>Event Name</Form.Label>
                  <Form.Control type="text" placeholder="Insert Title" className='Inter-normal' onChange={(e) => setPostEvent({...postEvent, title: e.target.value})}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formEventDate">
                  <Form.Label className='Inter-med'>Event Date</Form.Label>
                  <Form.Control type="date" placeholder="Insert Title/Headline" className='Inter-normal' onChange={(e) => setPostEvent({...postEvent, date: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEventDescription">
                  <Form.Label className='Inter-med'>Event Description</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Insert Description" className='Inter-normal' onChange={(e) => setPostEvent({...postEvent, description: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEventLink">
                  <Form.Label className='Inter-med'>Event Link</Form.Label>
                  <Form.Control type="text" placeholder="Insert Link" className='Inter-normal' onChange={(e) => setPostEvent({...postEvent, link: e.target.value})}/>
                </Form.Group>

                <Row className="p-2 my-1">
                  <Button variant="primary" type="submit" className="Inter" onClick={handleSubmit}>
                  Publish
                  </Button>
                </Row>
                <Row className="p-2 my-1">
                  <Button variant="light" type="submit" className="Inter" onClick={handleSubmit}>
                  Cancel
                  </Button>
                </Row>
                </Form>
            </div>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
}

export default AddEvent;
