import { useState, useContext } from 'react';
import { Button, Modal, Form, Row, Col, CloseButton, Container} from 'react-bootstrap';
import './general.css';


function AddAnnouncement() {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const handleCloseAnnouncement = () => setShowAnnouncement(false);
  const handleShowAnnouncement = () => setShowAnnouncement(true);

  return (
    <>
        <Button variant="primary">+ Add Announcement</Button>
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
        <Container fluid className="pt-1" >
          <Modal.Header className="px-4 modal-header text-white mx-5" closeButton>
            <Modal.Title id="announcement-popup" className="ms-auto Inter-b modal-title mt-4">
              Publish an Announcement
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="Inter-normal">
            <div className='p-5'>
              <Form>
                <Form.Group className="mb-3" controlId="formAnnouncementTitle">
                  <Form.Label className='Inter-med'>Title/Headline</Form.Label>
                  <Form.Control type="text" placeholder="Insert Title/Headline" className='Inter-normal' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAnnouncementImg">
                  <Form.Label className='Inter-med'>Upload Photo</Form.Label>
                  <Form.Control type="file" className='Inter-normal'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAnnouncementDesc">
                  <Form.Label className='Inter-med'>Description</Form.Label>
                  <Form.Control type="text" className='Inter-normal' placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAnnouncementUrl">
                  <Form.Label className='Inter-med'>Website Url</Form.Label>
                  <Form.Control type="url" className='Inter-normal' placeholder="Profile link/url..."/>
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

export default AddAnnouncement;
