import React from 'react'
import Hero, { HeroVariant } from '../components/HeroVariant/Hero';
import './COSOA.css';
 

function COSOA() {
  return (
    <div>
      <HeroVariant 
        h1Text="PUP Student Council Commission on Student Organizations and Accreditation (COSOA)"
        pText="COSOA plays a pivotal role in fostering a vibrant campus community by overseeing the recognition and accreditation of student organizations."
      />
    </div>
  )
}

export default COSOA
