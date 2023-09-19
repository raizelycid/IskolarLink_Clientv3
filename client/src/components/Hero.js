import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './general.css';

const Hero = () => {
    return (
      <div className="hero-bg vh-100 d-flex align-items-center">
        <Container>
          <h1 className="hero-h1 Inter text-white">Your Campus Journey <br/> Matters to Us.</h1>
          <p className="hero-p Inter-normal text-white pt-2 pb-3">Revolutionize student organization management with <b>IskolarLink</b>:<br/>
          Your one-stop solution for streamlining COSOA applications and<br/>
          student membership management online!</p>
          <Button variant="secondary py-2 px-3 Inter">Get Started</Button>
        </Container>
      </div>
    );
  };
  
  export default Hero;