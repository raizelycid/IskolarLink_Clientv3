import React from 'react'
import { Form, Row, Col, Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import './AccFinish.css';

const AccForms1 = ({formData, setFormData, show}) => {

  return (
    <>
    <form style={{display:show}}>
    <Container>
    <Image src="/2nd.png" alt="IskolarLink Logo"  fluid style={{ marginBottom: '40px' }}/>    
        <Row className="p-4">
        <Col>
            <Form.Group as={Row} controlId='AD001' className="mb-3 form-group-spacing">
                <Form.Label>Upload Certificate of Recognition from Central/Local Student Council</Form.Label>
                <Form.Control type="file" placeholder='e.g. AD001.pdf' onChange={(e) => setFormData({...formData, AD001: e.target.files[0]})}/>
            </Form.Group>
            <Form.Group as={Row} controlId='AD003' className="mb-3 form-group-spacing">
                <Form.Label>Upload Officers' Profile with Proof of Enrollment</Form.Label>
                <Form.Control type="file" placeholder='e.g. AD003.pdf' onChange={(e) => setFormData({...formData, AD003: e.target.files[0]})}/>
            </Form.Group>
            <Form.Group as={Row} controlId='AD005' className="mb-3 form-group-spacing">
                <Form.Label>Upload Constitution and Bylaws</Form.Label>
                <Form.Control type="file" placeholder='e.g. AD005.pdf' onChange={(e) => setFormData({...formData, AD005: e.target.files[0]})}/>
            </Form.Group>
            <Form.Group as={Row} controlId='AD007' className="mb-3 form-group-spacing">
                <Form.Label>Upload Advocacy Plan</Form.Label>
                <Form.Control type="file" placeholder='e.g. AD007.pdf' onChange={(e) => setFormData({...formData, AD007: e.target.files[0]})}/>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group as={Row} controlId='AD002' className="mb-3">
                <Form.Label>Upload Official List of Officers, Members, and Adviser(s)</Form.Label>
                <Form.Control type="file" placeholder='e.g. AD002.pdf' onChange={(e) => setFormData({...formData, AD002: e.target.files[0]})}/>
            </Form.Group>
            <Form.Group as={Row} controlId='AD004' className="mb-3">
                <Form.Label>Upload Letter of Concurrence</Form.Label>
                <Form.Control type="file" placeholder='e.g. AD004.pdf' onChange={(e) => setFormData({...formData, AD004: e.target.files[0]})}/>
            </Form.Group>
            <Form.Group as={Row} controlId='AD006' className="mb-3">
                <Form.Label>Upload General Plan of Action</Form.Label>
                <Form.Control type="file" placeholder='e.g. AD006.pdf' onChange={(e) => setFormData({...formData, AD006: e.target.files[0]})}/>
            </Form.Group>
            <Form.Group as={Row} controlId='AD008' className="mb-3">
                <Form.Label>Upload Certificate of Clearance from PUP Student Council COA</Form.Label>
                <Form.Control type="file" placeholder='e.g. AD008.pdf' onChange={(e) => setFormData({...formData, AD008: e.target.files[0]})}/>
            </Form.Group>
        </Col>
        </Row>
        </Container>
    </form>
    </>
  )
}

export default AccForms1
