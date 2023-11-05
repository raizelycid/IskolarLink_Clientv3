import React, { useState } from 'react';
import { HeroVariant3 } from '../components/HeroVariant/Hero';
import { Container, Row, Col, Image, Form} from 'react-bootstrap';
import './general.css'

export default function Applicant_Page() {
    const [selectedValue, setSelectedValue] = useState("1");
    const [field, setField] = useState([]);

    const handleChange = (e) => {
      setSelectedValue(e.target.value);
    };
  
    const getSelectClass = () => {
      switch (selectedValue) {
        case "1":
          return 'option-pending text-center';
        case "2":
          return 'option-approve text-center';
        case "3":
          return 'option-return text-center';
        case "4":
          return 'option-reject text-center';
        default:
          return '';
      }
    };

    return (
        <div>
        <HeroVariant3
            h1Text="Revalidation and Accreditation Applicants"
            pText="Check your applicants."
        />
        <Container className='p-5'>
            <Row>
                <Col xs={2} lg={1}>
                    <Image fluid roundedCircle src="/tpg-icon.png"/>
                </Col>
                <Col xs={8} className='pt-4'>
                    <h2>PUP The Programmers' Guild</h2>
                </Col>
                <Col className="text-end pt-4">
                    <Form.Select size="lg" className={getSelectClass()} onChange={handleChange} value={selectedValue}>
                        <option value="1">Pending</option>
                        <option value="2">Approve</option>
                        <option value="3">Return</option>
                        <option value="4">Reject</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className='mt-5 pt-3 mb-3'>
                <Form.Group>
                    <Form.Label>Classification of Jursidiction</Form.Label>
                    <Form.Control type="text" placeholder="Local Student Organization or University-Wide Student Organization" className='Inter-normal' />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Nature / Type of Student Organization</Form.Label>
                    <Form.Control as="select">
                        <option value="1">Multiselect</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Sub-classification of  Jurisdiction</Form.Label>
                    <Form.Control as="select">
                        <option value="1">College of Accountancy and Finance | CAF</option>
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col}>
                    <Form.Label>Complete Name of Student Organization’s Adviser(s)</Form.Label>
                    <Form.Control type="text" placeholder="e.g. Instructor III Juan S. Dela Cruz"></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Please input your email"></Form.Control>
                </Form.Group>
            </Row>
        </Container>
        
        <Container className='text-center my-3 pb-4'>
            <Row>
                <h1 className='text-red'>Submitted Documents</h1>
            </Row>
            <Row>
                <p>Byron Insert Here the Table for Requirements</p>
            </Row>
        </Container>
        </div>
    );
}

