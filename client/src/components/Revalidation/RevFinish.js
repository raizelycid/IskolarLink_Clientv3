import React from 'react'
import './RevFinish.css';
import { Form, ToggleButton, Row, Image, Col, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

const RevFinish = ({show}) => {
  return (
    <>
    <Container>
          <div className='accreditation-form-success-container' style={{display: show}}>
          <Image src="/4th.png" alt="IskolarLink Logo"  fluid style={{ marginBottom: '40px' }}/>   
            <div className="d-flex justify-content-center" style={{ marginBottom: '40px' }}>
              <Image src="/checkbox.png" alt="Accreditation Form Success" fluid />
            </div>
            <h2 className='accreditation-form-success-header'>Done! Excited to Continue Connecting with Your Fellow Iskolars.</h2>
              <h4 className='accreditation-form-success-subheader'>
               Click the submit button and wait for any updates from <span className="bold-text red-text">COSOA</span>.
              </h4>
          </div>
        </Container>

    </>
  )
}

export default RevFinish
