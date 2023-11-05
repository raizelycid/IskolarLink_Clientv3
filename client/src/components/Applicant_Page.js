import React, { useState } from 'react';
import { HeroVariant3 } from '../components/HeroVariant/Hero';
import { Container, Row, Col, Image} from 'react-bootstrap';

function Applicant_Page() {
  return (
    <div>
      <HeroVariant3
        h1Text="Revalidation and Accreditation Applicants"
        pText="Check your applicants."
      />
      <Container>
        <Row>
            <Col>
                <Image roundedCircle/>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Applicant_Page;
