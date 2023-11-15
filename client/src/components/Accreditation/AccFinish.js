import React from 'react'
import './AccFinish.css';
import { Form, ToggleButton, Row, Image, Col, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

const AccFinish = ({show}) => {
  return (
    <>
    <Container>
    <div className='accreditation-form-success-container' style={{display: show}}>
          <Image src="/4th.png" alt="IskolarLink Logo"  fluid style={{ marginBottom: '40px' }}/>   
            <div className="d-flex justify-content-center" style={{ marginBottom: '40px' }}>
              <Image src="/checkbox.png" alt="Accreditation Form Success" fluid />
            </div>
    <h2 className='accreditation-form-success-header'>Done! Excited to establish your organization</h2>
    <h5 className='accreditation-form-success-subheader'>
      Your application is now being reviewed by the COSOA. See status of your application in the Accreditation tab.</h5>
    </div>
    </Container>

</>
  )
}

export default AccFinish
