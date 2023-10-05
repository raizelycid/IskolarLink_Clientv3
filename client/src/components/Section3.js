import React from 'react';
import './general.css';
import { Row } from "react-bootstrap";

const Section3 = () => {
  return (
    <div>
      <Row className="text-center m-5">
        <h1 className="s3-h1 text-red Inter-b">Announcements</h1>
        <p className="s3-p text-gray2 Inter-normal">Discover the latest announcement that will shape the future of PUP COSOA and<br/>elevate your student experience!</p>
      </Row>
    </div>
  );
};

export default Section3;