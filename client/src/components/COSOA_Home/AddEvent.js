import { useState } from 'react';
import { Button, Modal, Form, Row, Col, CloseButton, Container} from 'react-bootstrap';
import './general.css';
import axios from 'axios';
import LoadingOverlay from '../LoadingOverlay'


function AddEvent({setRefreshEvents}) {
  const [showEvent, setShowEvent] = useState(false);
  const handleCloseEvent = () => setShowEvent(false);
  const handleShowEvent = () => setShowEvent(true);
  const [loading, setLoading] = useState(false);

  const [date, setDate] = useState(new Date());

  const [postEvent, setPostEvent] = useState({
    title:'',
    date: '',
    description: '',
    link: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa_ann/add_event`, postEvent).then((response) => {
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
      console.log(error);
    } finally {
      setLoading(false);
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
          <Modal.Header className="px-4 modal-header text-black mx-5 pb-0" closeButton>
            <Modal.Title id="announcement-popup" className="ms-auto Inter-b modal-title" style={{fontSize:'3em'}}>
              Publish an Event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="Inter-normal pt-0">
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formEventTitle">
                  <Form.Label className='Inter-med'><strong>Event Name</strong></Form.Label>
                  <Form.Control type="text" placeholder="Insert Title" className='Inter-normal' onChange={(e) => setPostEvent({...postEvent, title: e.target.value})}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formEventDate">
                  <Form.Label className='Inter-med'><strong>Event Date</strong></Form.Label>
                  <Form.Control type="date" placeholder="Insert Title/Headline" className='Inter-normal' onChange={(e) => setPostEvent({...postEvent, date: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEventDescription">
                  <Form.Label className='Inter-med'><strong>Event Description</strong></Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Insert Description" className='Inter-normal' onChange={(e) => setPostEvent({...postEvent, description: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEventLink">
                  <Form.Label className='Inter-med'><strong>Event Link</strong></Form.Label>
                  <Form.Control type="text" placeholder="Insert Link" className='Inter-normal' onChange={(e) => setPostEvent({...postEvent, link: e.target.value})}/>
                </Form.Group>

                <Row className="p-2 my-1">
                  <Button variant="primary" type="submit" className="Inter" onClick={handleSubmit}>
                  Publish
                  </Button>
                </Row>
                <Row className="p-2 my-1">
                  <Button variant="light" type="submit" className="Inter border" onClick={handleSubmit}>
                  Cancel
                  </Button>
                </Row>
                </Form>
            </div>
          </Modal.Body>
        </Container>
      </Modal>
      {loading && <LoadingOverlay title={"Adding an Event..."}/>}
    </>
  );
}

export default AddEvent;
