import React from 'react';
import {Button, Row} from 'react-bootstrap'
import './general.css';

const Section4 = () => {
  return (
    <div className="bg-red text-white s4">
      <div className="p-5">
        <Row className="text-center">
          <h1 className="s4-h1 Inter-b">Application Documents</h1>
          <p className="s4-p Inter-normal">Here is a brief overview of the Accreditation and Revalidation Requirements.</p>
        </Row>
      </div>
      <div className="text-center p-5">
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  );
};


export default Section4;