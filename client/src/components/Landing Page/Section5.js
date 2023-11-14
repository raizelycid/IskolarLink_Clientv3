import React from 'react';
import { Row } from 'react-bootstrap'
import '../general.css';
import FAQs_Accordion from '../FAQs_Accordion';

const Section5 = () => {
  return (
    <div className="m-5">
      <Row className="text-center">
        <h1 className="s5-h1 text-red Inter-b">Frequently Asked Questions</h1>
        <p className="s5-p text-gray2 Inter-normal">Do you have your questions? We may have your answer below.</p>
      </Row>
      <Row className='m-5 px-5'>
        <FAQs_Accordion/>
      </Row>
  </div>
  );
};

export default Section5;

