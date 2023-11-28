import React, {useState} from 'react';
import { Container, Col, Row, Image, Button , Carousel} from 'react-bootstrap';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../helpers/AuthContent'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';

  const Hero = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/organizations');
    };
  

    const backgroundImages = [
      'url(/Media/1.png)',
      'url(/Media/2.png)',
      'url(/Media/3.png)',
      'url(/Media/4.png)',
      'url(/Media/5.png)',
      'url(/Media/6.png)',
      'url(/Media/7.png)',
      'url(/Media/8.png)',
      'url(/Media/9.png)',
      'url(/Media/22.png)',
      'url(/Media/23.png)',
      'url(/Media/24.png)',
    ];

    const slides = backgroundImages.map((image, idx) => (
      <Carousel.Item key={idx}>
        <div className="hero-bg d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundImage: image }}>
          <Container className="px-5">
            <Col xs={6}>
            <h1 className="hero-h1 Inter text-white">Your Campus Journey Matters to Us.</h1>
            </Col>
            <p className="hero-p Inter-normal text-white pt-2 pb-3">
              Revolutionize student organization management with <b>IskolarLink</b>:<br />
              Your one-stop solution for streamlining COSOA applications and<br />
              student membership management online!
            </p>
            <Button variant="secondary py-2 px-3 Inter" onClick={handleButtonClick}>Get Started</Button>
          </Container>
        </div>
      </Carousel.Item>
    ));

    return (
      <div className="vh-100">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          slide={true}
          controls={false}
          fade={true}
          indicators={false}
          interval={500}
        >
          {slides}
        </Carousel>
      </div>
    );
  };

const HeroVariant = ({ h1Text, pText }) => {
    return (
        <div className="herovariant-bg d-flex align-items-center">
            <Container className="text-center">
                <h1 className="hero-h1 Inter-b text-white">{h1Text}</h1>
                <p className="hero-p Inter-normal text-white pt-2 pb-3">{pText}</p>
            </Container>
        </div>
    );
};

const HeroVariant1 = ({ h1Text, pText }) => {
  return (
      <div className="herovariant-bg2 d-flex align-items-center">
          <Container className="text-center">
              <h1 className="hero-h1 Inter-b text-white">{h1Text}</h1>
              <p className="hero-p Inter-normal text-white pt-2 pb-3">{pText}</p>
          </Container>
      </div>
  );
};


const HeroVariant2 = ({ imgSrc, name, webmail }) => {

  const {auth, menu} = useContext(AuthContext);
  const {authState, setAuthState} = auth;
  const {activeMenu, setActiveMenu} = menu;
  const navigate = useNavigate();

  const handleEditProfile = () => {
    if(activeMenu === 'main'){
      navigate('/student/settings');
    }else if(activeMenu === 'org'){
      navigate('/organization/settings');
    }else if(activeMenu === 'cosoa'){
      navigate('/cosoa/settings');
    }
  }
    

  return (
      <div className="herovariant-bg d-flex align-items-center">
          <Container>
            <Row>
            <Col md={1} className="mb-3 pe-0 mx-4">
              {
                imgSrc ? <Image src={imgSrc} roundedCircle fluid /> : <FontAwesomeIcon icon={faUserCircle} size="6x" className="text-white" />
              }
            </Col>
            <Col md={6}>
              <h2 className="Inter-b text-white">{name}</h2>
              <p className="hero-p Inter-normal text-white pt-2 pb-3">{webmail}</p>
            </Col>
            <Col className="text-end">
              <Button variant="secondary" onClick={handleEditProfile} >Edit Profile</Button>
                </Col>

            </Row>
          </Container>
      </div>
  );
};

const HeroVariant3 = ({  h1Text, pText  }) => {
  return (
      <div className="herovariant-bg d-flex align-items-center">
        <Container className="text-center">
          <h1 className="hero-h1 Inter-b text-white">{h1Text}</h1>
          <p className="hero-p Inter-normal text-white pt-2 pb-3">{pText}</p>
        </Container>
      </div>
  );
};

const HeroVariant4 = ({  h1Text  }) => {
  return (
      <div className="herovariant-bg d-flex align-items-center">
        <Container className="text-start">
          <Col xs={6}>
          <h1 className="hero-h1 Inter-b text-white">{h1Text}</h1>
          </Col>
          <Col xs={9}>
          </Col>
        </Container>
      </div>
  );
};

const HeroVariant5 = ({ h1Text, pText }) => {
  return (
      <div className="herovariant-bg5 d-flex align-items-center">
          <Container className="text-center">
              <h1 className="hero-h1 Inter-b text-white">{h1Text}</h1>
              <p className="hero-p Inter-normal text-white pt-2 pb-3">{pText}</p>
          </Container>
      </div>
  );
};

const HeroVariant6 = ({ h1Text, pText }) => {
  return (
      <div className="herovariant-bg6 d-flex align-items-center">
          <Container className="text-center">
              <h1 className="hero-h1 Inter-b text-white">{h1Text}</h1>
              <p className="hero-p Inter-normal text-white pt-2 pb-3">{pText}</p>
          </Container>
      </div>
  );
};

const HeroVariant7 = ({ h1Text, pText }) => {
  return (
      <div className="herovariant-bg7 d-flex align-items-center">
          <Container className="text-center">
              <h1 className="hero-h1 Inter-b text-white">{h1Text}</h1>
              <p className="hero-p Inter-normal text-white pt-2 pb-3">{pText}</p>
          </Container>
      </div>
  );
};


export default Hero;
export {HeroVariant, HeroVariant1, HeroVariant2, HeroVariant3, HeroVariant4, HeroVariant5, HeroVariant6, HeroVariant7};