import { useState } from 'react';
import {Button, Modal, Image, Row, Container} from 'react-bootstrap';

const NotificationAlert = ({feature,item}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch Modal
      </Button>

      <Modal show={show} onHide={handleClose} className='rounded-5'>
        <Container>
        <Modal.Header className='d-flex justify-content-center'>
            <Row>
            <Image src="/information.png" className='me-3'alt="Confirmation Alert"/>
            </Row>
        </Modal.Header>
        <Row className='text-center'>
            <Modal.Title style={{fontSize:'1.5rem'}} className='text-capitalize'>{feature} Successfully!</Modal.Title>
        </Row>
        <Modal.Body className='text-center'>We have successfully <span className='text-lowercase'><strong>{feature}</strong></span> your <span className='text-lowercase'>{item}</span>!</Modal.Body>
        <Modal.Footer className='d-flex justify-content-center align-items-center'>
            <Button variant="primary" onClick={handleClose} className='px-5' as={Row}>
            Done
          </Button>
        </Modal.Footer>
        </Container>
      </Modal>
    </>
  );
}

export default NotificationAlert;