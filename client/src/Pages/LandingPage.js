import React,{useEffect} from 'react';
import Hero from '../components/HeroVariant/Hero';
import Section1 from '../components/Landing Page/Section1';
import Section2 from '../components/Landing Page/Section2';
import Section3 from '../components/Landing Page/Section3';
import Section4 from '../components/Landing Page/Section4';
import Section5 from '../components/Landing Page/Section5';
import './LandingPage.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';




function LandingPage() {

  useEffect(() => {
    axios.get(`https://iskolarlink-production.up.railway.app/luke/hello`).then((res) => {
      console.log(res.data);
      alert(res.data);
    })
  }, []);
  
  return (
    <main>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  );
}

export default LandingPage;
