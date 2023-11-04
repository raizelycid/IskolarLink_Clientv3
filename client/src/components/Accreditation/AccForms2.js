import {React, useState} from 'react'
import { Form, ToggleButton, Row, Col, Button } from 'react-bootstrap'

const AccForms2 = ({formData, setFormData,show,path,path2}) => {

    const [checked, setChecked] = useState(false);
  return (
    <form style={{display:show}}>
        <Form.Group as={Row} controlId='AF001' className="mb-3">
            <Form.Label>Upload Signed Tracker Form <span className='accreditation-download' onClick={() => window.open(`http://localhost:3001/${path}`,'_blank','noopener')}>(Download Generated File Here)</span></Form.Label>
            <Form.Control type="file" placeholder='e.g. AF001.pdf' onChange={(e) => setFormData({...formData, AF001: e.target.files[0]})}/>
        </Form.Group>
        <Form.Group as={Row} controlId='AD009' className="mb-3">
            <Form.Label>Upload Signed Waver Form <span className='accreditation-download' onClick={() => window.open(`http://localhost:3001/${path2}`,'_blank','noopener')}>(Download Generated File Here)</span></Form.Label>
            <Form.Control type="file" placeholder='e.g. AD009.pdf' onChange={(e) => setFormData({...formData, AD009: e.target.files[0]})}/>
        </Form.Group>

        <ToggleButton
            id="privacy-policy-toggle"
            type="checkbox"
            variant="outline-primary"
            checked={checked}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
        />
        <Form.Label>I agree to the <span className='accreditation-download'>Privacy Policy</span></Form.Label>
    </form>
  )
}

export default AccForms2
