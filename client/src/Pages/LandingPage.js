import React, { useState } from 'react';
import Hero from '../components/HeroVariant/Hero';
import Section1 from '../components/Landing Page/Section1';
import Section2 from '../components/Landing Page/Section2';
import Section3 from '../components/Landing Page/Section3';
import Section4 from '../components/Landing Page/Section4';
import Section5 from '../components/Landing Page/Section5';
import ContactBanner from '../components/ContactBanner';
import './LandingPage.css';


function LandingPage() {
  return (
    <main>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <ContactBanner />
    </main>
  );
}

export default LandingPage;
