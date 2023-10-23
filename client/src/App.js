import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Navbar, Container, Nav, Button, Row, Col, Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import COSOA from './Pages/COSOA';
import Organizations from './Pages/Organizations';
import AppDocs from './Pages/AppDocs';
import FAQs from './Pages/FAQs';
import LandingPage from './Pages/LandingPage';
import { useState} from 'react';
import LoginPopup from './components/LoginPopup';
import RegisterPopup from './components/RegisterPopup';



function App() {

  return (
    <Router>
      
      <Navbar expand="lg">
        <Container>
          <LinkContainer to="/">
          <Nav.Link>
          <Navbar.Brand className="Urbanist navbar-brand">
            <span className="text-red">Iskolar</span>
            <span className="text-yellow">Link</span>
          </Navbar.Brand>
          </Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto Inter p-3">
              <LinkContainer to="/cosoa">
              <Nav.Link href="#" className="text-dark nav-link ms-4">
                PUP COSOA
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/organizations">
              <Nav.Link href="#" className="text-dark nav-link ms-4">
                Accredited Organizations
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/appdocs">
              <Nav.Link href="#" className="text-dark nav-link ms-4">
                Application Documents
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faqs">
              <Nav.Link href="#" className="text-dark nav-link ms-4">
                FAQs
              </Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav className="ms-auto ">
              <RegisterPopup />
              <LoginPopup />
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/cosoa" exact element={<COSOA />} />
        <Route path="/organizations" exact element={<Organizations />} />
        <Route path="/appdocs" exact element={<AppDocs />} />
        <Route path="/faqs" exact element={<FAQs />} />
        <Route path="/" exact element={<LandingPage />} />
      </Routes>

      <footer className="footer bg-dark text-white py-4 border-bottom Inter">
        <Container>
          <Row className="align-items-center flex-column flex-md-row"> {/* Use flex classes */}
            <Col xs={12} md={3} className="text-center">
              {/* Logo */}
              <Navbar.Brand className="footer-brand text-white Urbanist" href="#">
                <img src={require('./logo.svg').default} alt="Logo" width="40" height="40" />
                IskolarLink
              </Navbar.Brand>
            </Col>
            <Col xs={12} md={6} className="text-center mt-3 mt-md-0">
              {/* Footer Navigation Links (Vertical for small screens) */}
              <ul className="nav d-flex flex-column flex-md-row" style={{ listStyleType: 'none' }}>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="#">
                    PUP COSOA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="#">
                    Accredited Organizations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="#">
                    Application Documents
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="#">
                    FAQs
                  </a>
                </li>
                {/* Add more navigation links as needed */}
              </ul>
            </Col>
            <Col xs={12} md={3} className="text-center mt-3 mt-md-0">
              {/* Social Media Icons */}
              <div className="social-icons d-flex justify-content-center justify-content-md-end">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook text-white fa-lg"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fas fa-envelope text-white fa-lg"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter text-white fa-lg"></i>
                </a>
                <a href="#" className="me-1">
                  <i className="fab fa-instagram text-white fa-lg"></i>
                </a>
              </div>
            </Col>
          </Row>
          <hr className="bg-muted flex-grow-1" />
          <Row>
            <Col xs={12} md={6} className="text-center text-md-left">
              {/* Copyright */}
              <div className="footer-copyright bg-dark text-muted py-2 text-center text-md-left ms-1">
                &copy; 2023 IskolarLink All Rights Reserved.
              </div>
            </Col>
            <Col xs={12} md={6} className="text-center text-md-right mt-3 mt-md-0">
              {/* Privacy Policy and Terms & Conditions Links */}
              <div className="data-footer d-flex justify-content-center justify-content-md-end">
                <a className="nav-link text-muted" href="#">
                  Privacy Policy
                </a>
                <a className="nav-link text-muted ms-2 me-1" href="#">
                  Terms & Conditions
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </Router>
  );
}

export default App;

 