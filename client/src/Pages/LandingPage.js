import React, { useState } from 'react';
import Hero from '../components/Hero';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import './LandingPage.css';


function LandingPage() {
  return (
    <main>
      <Hero />
      <Section1 />
      <Section2 />
    </main>
  );
}

export default LandingPage;
