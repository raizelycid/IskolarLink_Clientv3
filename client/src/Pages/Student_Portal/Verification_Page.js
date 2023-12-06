import React, { useState } from 'react';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import Verification, {Verifying, VerifyFailed, Verified} from '../../components/Student Verification/Verification';
import { Container } from 'react-bootstrap';

function Verification_Page() {
  return (
  <>
  <HeroVariant
  h1Text="Verification"
  pText="Verify your student status to access features! "
  />
  <Container className='my-5'>
    <Verification/>
  </Container>

  </>
  )
}

export default Verification_Page;