import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import '../general.css';

/* When they are verified */
const Verification = () => {
    return (
        <Container className="my-5">
        <Row>
          <h2>Account Verification</h2>
          <p className="text-muted">In order to remain compliant to regulatory requirements and to ensure that our platform is not misused for illicit or fraudulent activities, we aim to complete the verification procedure and approve your verified status within <strong>48 hours of submission</strong>. The information collected will be permanently deleted after the verification process is completed and will only be used for the purpose of student identification.</p>
        </Row>
        <hr className='my-0'/>
        <Row className="text-center">
          <Col className='text-muted mt-3'>
          <p>Iskolar Link is <strong className="text-yellow">exclusively</strong> available to students of the <strong>Polytechnic University of the Philippines</strong>.
          <br/>To unlock full access to our features, please verify your account by uploading your <strong className='text-red'>Certificate of Registration</strong>.</p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
          <Form className='mx-5 px-5'>
          <Form.Group controlId="formFile" className="mb-3 ">
            <Form.Label>Upload Current Certificate of Registration</Form.Label>
            <Form.Control type="file" className='text-muted'/>
          </Form.Group>
          <Row className='mt-4 mb-0'>
            <Col></Col>
            <Col xs={8}>
            <Form.Check
            type="checkbox"
            label={<p>I accept Iskolar Link’s <strong>Terms</strong> and <strong>Privacy Policy</strong>"</p>}
          />
            </Col>
            <Col></Col>
          </Row>
          <div className='text-center'>
          <Button variant="primary" className='px-4'>Verify Account</Button>

          </div>
        </Form>
          </Col>
          <Col></Col>
        </Row>
        
        </Container>
    );
  };
  
  const Verifying = () => {
    return (
      <Container className="my-5">
        <Row>
          <h2>Account Verification</h2>
          <p className="text-muted">In order to remain compliant to regulatory requirements and to ensure that our platform is not misused for illicit or fraudulent activities, we aim to complete the verification procedure and approve your verified status within <strong>48 hours of submission</strong>. The information collected will be permanently deleted after the verification process is completed and will only be used for the purpose of student identification.</p>
        </Row>
        <Row className="text-center justify-content-md-center">
          <Col>
          <h3>Processing your verification.</h3>
          <p className='text-muted'>Exciting updates on your verification status are on the way.<br/>Your cooperation with our requirements is truly appreciated!</p>
          <Image src="/processing-icon.png" />
          </Col>
         
        </Row>
      </Container>
    );
  };

  const Verified = () => {
    return (
      <Container className="my-5">
        <Row>
          <h2>Account Verification</h2>
          <p className="text-muted">Account verification occurs <strong className='text-red'>every semester </strong>. Please bear with us and comply for the best experience and security for your campus journey.</p>
        </Row>
        <Row className="text-center justify-content-md-center">
          <Col>
          <h3>You are verified.</h3>
          <p className='text-muted'>Thanks you for meeting our requirement.<br/>Now, go ahead and make the most of your campus journey!</p>
          <Image src="/shield-check.png" />
          </Col>
         
        </Row>
      </Container>
    );
  };

  const VerifyFailed = () => {
    return (
      <Container className="my-5">
        <Row>
          <h2>Account Verification</h2>
          <p className="text-muted">In order to remain compliant to regulatory requirements and to ensure that our platform is not misused for illicit or fraudulent activities, we aim to complete the verification procedure and approve your verified status within <strong>48 hours of submission</strong>. The information collected will be permanently deleted after the verification process is completed and will only be used for the purpose of student identification.</p>
        </Row>
        <hr className='my-0'/>
        <Row className="text-center">
          <Col className='text-muted mt-3'>
          <h2 className='text-red'>Verification Failed.</h2>
          <p>Iskolar Link is <strong className="text-yellow">exclusively</strong> available to students of the <strong>Polytechnic University of the Philippines</strong>.
          <br/>To unlock full access to our features, please verify your account by uploading your <strong className='text-red'>Certificate of Registration</strong>.</p>
          </Col>
        </Row>
        <Row className='mx-5 text-muted'>
          <Col xs={2}></Col>
          <Col xs={8}>
          <p className='my-2'>Here are some of the reason why your verification <strong className='text-red'>failed</strong>.</p>
          <ol className='mb-3'>
            <li>You uploaded a wrong document. (ex. Certificate of Registration is not your current semester)</li>
            <li>You are currently not enrolled on Polytechnic University of the Philippines.</li>
          </ol>
          <p>If 1 or 2 is correct, please try verifying your account again by uploading the correct requirement.</p>
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            
          <Form className='mx-5 px-5'>
          <Form.Group controlId="formFile" className="mb-3 ">
            <Form.Label>Upload Current Certificate of Registration</Form.Label>
            <Form.Control type="file" className='text-muted'/>
          </Form.Group>
          <Row className='mt-4 mb-0'>
            <Col></Col>
            <Col xs={8}>
            <Form.Check
            type="checkbox"
            label={<p>I accept Iskolar Link’s <strong>Terms</strong> and <strong>Privacy Policy</strong>"</p>}
          />
            </Col>
            <Col></Col>
          </Row>
          <div className='text-center'>
          <Button variant="primary" className='px-4'>Verify Account</Button>

          </div>
        </Form>
          </Col>
          <Col></Col>
        </Row>
        
      </Container>
    );
  };


  export default Verification;

  export {Verified, Verifying, VerifyFailed};