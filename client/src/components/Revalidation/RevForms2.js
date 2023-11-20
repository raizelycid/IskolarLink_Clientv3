import {React, useState} from 'react'
import './RevFinish.css';
import { Form, ToggleButton, Row, Image, Col, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

const RevForms2 = ({formData, setFormData,show,path,path2}) => {

    const [checked, setChecked] = useState(false);
  return (
    <>
    <form style={{display:show}}>
    <Container>
    <Image src="/3rd.png" alt="IskolarLink Logo"  fluid style={{ marginBottom: '40px' }}/>    
        <Row className="p-4">
        <Form.Group as={Row} controlId='RF001' className="mb-3">
            <Form.Label>Upload Signed Tracker Form <span className='accreditation-download' onClick={() => window.open(`http://localhost:3001/${path}`,'_blank','noopener')}>(Download Generated File Here)</span></Form.Label>
            <Form.Control type="file" placeholder='e.g. RF001.pdf' onChange={(e) => setFormData({...formData, AF001: e.target.files[0]})}/>
        </Form.Group>
        <Form.Group as={Row} controlId='RD009' className="mb-3">
            <Form.Label>Upload Signed Waver Form <span className='accreditation-download' onClick={() => window.open(`http://localhost:3001/${path2}`,'_blank','noopener')}>(Download Generated File Here)</span></Form.Label>
            <Form.Control type="file" placeholder='e.g. RD009.pdf' onChange={(e) => setFormData({...formData, AD009: e.target.files[0]})}/>
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
            checked={checked}
            onChange={(e) => setChecked(e.currentTarget.checked)}
        />
        </Form.Group>
        </Row>
    </Container>
    </form>
    </>
  )
}

export default RevForms2
