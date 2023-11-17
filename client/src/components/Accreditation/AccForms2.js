import {React, useState} from 'react'
import './AccFinish.css';
import { Form, Image, ToggleButton, Row, Col, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

const AccForms2 = ({formData, setFormData,show,path,path2}) => {

  return (
    <>
    <form style={{display:show}}>
        <Container>
        <Image src="/3rd.png" alt="IskolarLink Logo"  fluid style={{ marginBottom: '40px' }}/>    
        <Row className="p-4">
        <Form.Group as={Row} controlId='AF001' className="mb-3">
            <Form.Label>Upload Signed Tracker Form <span className='accreditation-download' onClick={() => window.open(`http://localhost:3001/${path}`,'_blank','noopener')}>(Download Generated File Here)</span></Form.Label>
            <Form.Control type="file" placeholder='e.g. AF001.pdf' onChange={(e) => setFormData({...formData, AF001: e.target.files[0]})}/>
        </Form.Group>
        <Form.Group as={Row} controlId='AD009' className="mb-3">
            <Form.Label>Upload Signed Waver Form <span className='accreditation-download' onClick={() => window.open(`http://localhost:3001/${path2}`,'_blank','noopener')}>(Download Generated File Here)</span></Form.Label>
            <Form.Control type="file" placeholder='e.g. AD009.pdf' onChange={(e) => setFormData({...formData, AD009: e.target.files[0]})}/>
        </Form.Group>
        <Form.Group>
        <Form.Check
            type="checkbox"
            id="privacy-policy-toggle"
            variant="outline-primary"
            className="custom-checkbox"
            value="1"
            label={
            <>
                I agree to the <span className='accreditation-download'>Privacy Policy</span>
            </>
            }
            checked={formData.privacyPolicy}
            onChange={(e) => setFormData({...formData, privacyPolicy: e.target.checked})}
        />
        </Form.Group>
        </Row>
        </Container>
    </form>
    </>
  )
}

export default AccForms2
