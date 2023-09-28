import React, { useState } from 'react';
import Hero from '../components/Hero';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import ContactBanner from '../components/ContactBanner';

import './LandingPage.css';


function LandingPage() {
  return (
    <main>
      <Hero />
      <Section1 />
      <Section2 />

      <ContactBanner />
      
    </main>
  );
}

export default LandingPage;
