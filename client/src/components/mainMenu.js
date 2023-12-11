import {React, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../helpers/AuthContent'
import { useNavigate } from 'react-router-dom'
import {Navbar, Container, Offcanvas, Row, Col, Image, Nav, ListGroup, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useAccreditationStatus } from '../helpers/AccreditationStatusContext'
import { useApplicationPeriod } from '../helpers/ApplicationPeriodContext'
import './general.css';

const MainMenu = ({imgSrc, username}) => {

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const {auth, menu} = useContext(AuthContext);
    const {authState, setAuthState} = auth;
    const {activeMenu, setActiveMenu} = menu;

    const {accreditationStatus} = useAccreditationStatus();
    const {period} = useApplicationPeriod();
    


    const changeMainMenu = () => {
        setActiveMenu('main');
        axios.post(`${process.env.REACT_APP_BASE_URL}/menu/`, {menu: 'main'})
      }
    
      const changeCosoaMenu = () => {
        setActiveMenu('cosoa');
        axios.post(`${process.env.REACT_APP_BASE_URL}/menu/`, {menu: 'cosoa'})
      }
    
      const changeWebAdminMenu = () => {
        setActiveMenu('webadmin');
        axios.post(`${process.env.REACT_APP_BASE_URL}/menu/`, {menu: 'webadmin'})
      }

      const switchCosoa = (e) => {
        e.preventDefault();
        setActiveMenu('cosoa');
        changeCosoaMenu();
        navigate('/cosoa/home');
    }

    const switchWebAdmin = (e) => {
        e.preventDefault();
        setActiveMenu('webadmin');
        changeWebAdminMenu();
        navigate('/admin/dashboard');
    }


    return(
    <NavDropdown title={<>{imgSrc ? <img src={`${process.env.REACT_APP_BASE_URL}/images/${imgSrc}`} alt="Profile Picture" width="40" height="40" className="rounded-circle" /> : <FontAwesomeIcon icon={faUser}/>} <span className='text-dark'>Hi, {username}!</span></>} id="basic-nav-dropdown" className="text-dark" renderMenuOnMount={true}>
        <NavDropdown.Item onClick={() => navigate('/student/profile')}>Profile</NavDropdown.Item>
        {
  authState.is_verified 
    ? (
        accreditationStatus 
          ? 
          <NavDropdown.Item onClick={() => navigate('/accreditation/status')}>Accreditation Status</NavDropdown.Item> 
          : period && !authState.has_created ? <NavDropdown.Item onClick={() => navigate('/accreditation')}>Create an Organization</NavDropdown.Item> : null
      )
    : null
      }
        {authState.is_cosoa && <NavDropdown.Item onClick={switchCosoa}>Switch to COSOA</NavDropdown.Item>}
        {authState.is_web_admin && <NavDropdown.Item href="/web_admin_home"  onClick={switchWebAdmin}>Switch to Web Admin</NavDropdown.Item>}
        <NavDropdown.Item onClick={() => navigate('/student/verification')}>Verify</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/student/settings')}>Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => {navigate('/student/feedback')}}>Feedback</NavDropdown.Item>
        <NavDropdown.Item onClick={() => {
            axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout`)
            .then((response) => {
                if(response.data.error){
                    alert(response.data.error);
                }
                else{
                    alert('User logged out!');
                    // set authState.status to false
                    setAuthState({...authState, status: false});
                    navigate('/');
                }
            });
        }}>Log Out</NavDropdown.Item>
    </NavDropdown>
)}






const MainMenu1 = ({ imgSrc, username, webmail }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const { auth, menu } = useContext(AuthContext);
  const { authState, setAuthState } = auth;
  const {activeMenu, setActiveMenu} = menu;

  const { accreditationStatus } = useAccreditationStatus();
  const { period } = useApplicationPeriod();

  const changeMainMenu = () => {
    setActiveMenu('main');
    axios.post(`${process.env.REACT_APP_BASE_URL}/menu/`, {menu: 'main'})
  }

  const changeCosoaMenu = () => {
    setActiveMenu('cosoa');
    axios.post(`${process.env.REACT_APP_BASE_URL}/menu/`, {menu: 'cosoa'})
  }

  const changeWebAdminMenu = () => {
    setActiveMenu('webadmin');
    axios.post(`${process.env.REACT_APP_BASE_URL}/menu/`, {menu: 'webadmin'})
  }

  const switchCosoa = (e) => {
    e.preventDefault();
    setActiveMenu('cosoa');
    changeCosoaMenu();
    navigate('/cosoa/home');
}

const switchWebAdmin = (e) => {
    e.preventDefault();
    setActiveMenu('webadmin');
    changeWebAdminMenu();
    navigate('/admin/dashboard');
}

  const handleToggleSidebar = () => setShowSidebar(!showSidebar);

  const logoutUser = () => {
      axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout`)
          .then((response) => {
              if (response.data.error) {
                  alert(response.data.error);
              } else {
                  alert('User logged out!');
                  setAuthState({ ...authState, status: false });
                  navigate('/');
              }
          });
  };

  const sidebarStyles = {
    width: '360px',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const navItemStyles = {
    color: 'black',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    border: 'none !important',
    cursor: 'pointer'
  };

  const bottomItemStyles = {
    ...navItemStyles,
    marginTop: 'auto', // pushes the logout to the bottom
  };

  const profileSummaryStyles = {
    ...navItemStyles,
    justifyContent: 'space-between', // aligns the arrow to the right
  };

  const bottomDivStyles = {
    marginTop: 'auto', // Remove marginTop to prevent additional space
    width: '100%', // Ensures the div takes the full width of the sidebar
    position: 'absolute', // Position the element absolutely within the sidebar
    bottom: '0', // Align the element to the bottom of the sidebar
    left: '0', // Position the element from the left edge
    right: '0', // Position the element from the right edge
    outline: 'none !important',
    boxShadow: 'none !important',
    border: 'none !important',
  };

  return (
    <>
    <Nav.Item onClick={handleToggleSidebar} style={{ cursor: 'pointer' }}>
        {imgSrc ? (
            <img src={`${process.env.REACT_APP_BASE_URL}/images/${imgSrc}`} alt="Profile" width="40" height="40" className="rounded-circle" />
        ) : (
            <FontAwesomeIcon icon={faUser} size="lg" />
        )}
        <span className='text-dark'> Hi, {username}!</span>
    </Nav.Item>

    <Offcanvas show={showSidebar} onHide={handleToggleSidebar} placement='end' style={sidebarStyles}>
        <Offcanvas.Header closeButton>
 
        <Offcanvas.Title>    
        <Row className="align-items-center">
          <Col xs="auto"> {/* Auto width for the column based on content size */}
            <Image src='/favicon.ico' roundedCircle style={{ width: '35px', height: '35px' }} /> {/* Explicitly set size */}
          </Col>
          <Col> {/* Remaining space for the username */}
            <h5 className='mb-0'> {username}</h5>
          </Col>
        </Row>
      </Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body>
            <ListGroup variant="flush" >

                <ListGroup.Item  style={navItemStyles}                 
                onClick={() => navigate('/student/profile')}>
                <FontAwesomeIcon icon="fa-solid fa-user" size="lg" className="me-2" />
                    <p className='m-0'>Profile</p>
                </ListGroup.Item>

                <ListGroup.Item  style={navItemStyles}                 
                onClick={() => navigate('/student/verification')}>
                <FontAwesomeIcon icon="fa-solid fa-user-check" size="lg" className="me-2" />
                    <p className='m-0'>Verify</p>
                </ListGroup.Item>

                <ListGroup.Item style={{navItemStyles}}  onClick={() => navigate('/student/feedback')}>
                    <FontAwesomeIcon icon="fa-solid fa-comment" size="lg" className="me-2"  />
                    Feedback
                </ListGroup.Item>
                {authState.is_verified && (
                      accreditationStatus ? (
                        <ListGroup.Item style={navItemStyles} onClick={() => navigate('/accreditation/status')}>
                          <FontAwesomeIcon icon="fa-solid fa-bell" size="lg" className="me-2" />
                          Accreditation Status
                        </ListGroup.Item>
                      ) : (
                        period && !authState.has_created && (
                          <ListGroup.Item style={navItemStyles} onClick={() => navigate('/accreditation')}>
                            <FontAwesomeIcon icon="fas fa-user-plus" size="lg" className="me-2" />
                            Create an Organization
                          </ListGroup.Item>
                        )
                      )
                    )}

                  {authState.is_cosoa && (
                      <ListGroup.Item className="nav-item-hover" style={navItemStyles} onClick={switchCosoa}>
                        <FontAwesomeIcon icon="fas fa-user-shield" size="lg" className="me-2" />
                        Switch to COSOA
                      </ListGroup.Item>
                    )}

                    {authState.is_web_admin && (
                      <ListGroup.Item style={navItemStyles} href="/web_admin_home" onClick={switchWebAdmin}>
                        <FontAwesomeIcon icon="fas fa-crown" size="lg" className="me-2" />
                        Switch to Web Admin
                      </ListGroup.Item>
                    )}

                <div style={bottomDivStyles} >
                <ListGroup.Item className="no-border nav-item-hover" style={navItemStyles} onClick={() => navigate('/whoweare')}>
                    <FontAwesomeIcon icon='"fas fa-user-secret' size="lg" className="me-2" />
                    Who are we
                </ListGroup.Item>
                <ListGroup.Item className="no-border" style={navItemStyles} onClick={() => navigate('/student/settings')}>
                    <FontAwesomeIcon icon={faCog} size="lg" className="me-2" />
                    Settings
                </ListGroup.Item>
               
                <ListGroup.Item className="no-border" style={profileSummaryStyles} onClick={logoutUser}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={imgSrc || "path/to/default/avatar.jpg"} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                <div>
                  <div><strong style={{ fontSize: '.9rem' }}>{username}</strong></div>
                  <div style={{ fontSize: '.7rem' }}>{webmail || 'email@example.com'}</div> {/* Add a default or use the user's email */}
                </div>
              </div>
                <ListGroup.Item className="list-group-item-no-outline" style={bottomItemStyles} onClick={logoutUser}>
                <FontAwesomeIcon icon={faSignOutAlt} className=" icon-no-background me-2" />
                </ListGroup.Item>
            </ListGroup.Item>
            </div>
            </ListGroup>
        </Offcanvas.Body>
    </Offcanvas>
</>
  );
};













const MainMenu2 = () => {
    const [scrolling, setScrolling] = useState(false);
    const [initialScroll, setInitialScroll] = useState(true);
    const [scrollTimeout, setScrollTimeout] = useState(null);
  
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setScrolling(scrolled);
  
      if (scrolled) {
        setInitialScroll(false);
      } else {
        setInitialScroll(true);
      }
  
      clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => {
        setScrolling(false);
      }, 500);
  
      setScrollTimeout(timeout);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }, [scrollTimeout]);
  
    const navbarClass = initialScroll ? 'solid-navbar' : scrolling ? 'fixed-top transparent-navbar' : 'fixed-top solid-navbar';
  
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleOffcanvas = () => setShowOffcanvas((prev) => !prev);
    return (
    <Navbar key={false} expand={false} className={navbarClass}>
          <Container fluid>
          <Navbar.Brand className="Urbanist navbar-brand">
            <span className="text-red">Iskolar</span>
            <span className="text-yellow">Link</span>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
              className="mx-auto Inter p-3"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`} className="Urbanist navbar-brand">
                  <Row className='d-flex align-items-center'>
                  <Col xs={4} md={4}>
                  <Image src='favicon.ico' roundedCircle fluid/>
                  </Col>
                  <Col>
                  <h4>Username</h4>
                  </Col>
                  </Row>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex flex-column h-100">
              <Nav className="flex-grow-1 pe-3">
                {/* COSOA Portal */}
                <LinkContainer to="/cosoa/profile">
                  <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3 mb-1'>
                        <FontAwesomeIcon icon="fa-solid fa-house" size='lg' />
                      </Col>
                      <Col>
                        <p className='m-0'>Profile</p>
                      </Col>
                    </Row>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/cosoa/dashboard">
                  <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3 mb-1'>
                        <FontAwesomeIcon icon="fa-solid fa-chart-line" size='lg'/>
                      </Col>
                      <Col>
                        <p className='m-0'>Dashboard</p>
                      </Col>
                    </Row>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/cosoa/applicants">
                  <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3'>
                        <FontAwesomeIcon icon="fa-solid fa-file-lines" size='lg'/>
                      </Col>
                      <Col>
                        <p className='m-0'>Applicants</p>
                      </Col>
                    </Row>
                  </Nav.Link>
                </LinkContainer>

                {/* Org Portal */}
                <LinkContainer to="/organization/profile">
                  <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3 mb-1'>
                        <FontAwesomeIcon icon="fa-solid fa-house" size='lg' />
                      </Col>
                      <Col>
                        <p className='m-0'>Profile</p>
                      </Col>
                    </Row>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/organization/members">
                  <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3 mb-1'>
                        <FontAwesomeIcon icon="fa-solid fa-users" />
                      </Col>
                      <Col>
                        <p className='m-0'>Official Members</p>
                      </Col>
                    </Row>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/organization/membership">
                  <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3 mb-1'>
                        <FontAwesomeIcon icon="fa-solid fa-user-plus" />
                      </Col>
                      <Col>
                        <p className='m-0'>Membership</p>
                      </Col>
                    </Row>
                  </Nav.Link>
                </LinkContainer>
                  <LinkContainer to="/organization/revalidation">
                  <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3'>
                        <FontAwesomeIcon icon="fa-solid fa-file-lines" size='lg'/>
                      </Col>
                      <Col>
                        <p className='m-0'>Revalidation</p>
                      </Col>
                    </Row>
                  </Nav.Link>
                </LinkContainer>
                   
                {/* Student Portal */}
                <LinkContainer to="/student/profile">
                  <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3 mb-1'>
                        <FontAwesomeIcon icon="fa-solid fa-house" size='lg' />
                      </Col>
                      <Col>
                        <p className='m-0'>Profile</p>
                      </Col>
                    </Row>
                  </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/student/membership">
                    <Nav.Link href="#" className="text-dark nav-link ms-4">
                      <Row className='align-items-center'>
                        <Col xs={1} className='pe-3 mb-1'>
                          <FontAwesomeIcon icon="fa-solid fa-user-plus" />
                        </Col>
                        <Col>
                          <p className='m-0'>Membership</p>
                        </Col>
                      </Row>
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/organization/accreditation">
                    <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3'>
                        <FontAwesomeIcon icon="fa-solid fa-file-lines" size='lg'/>
                      </Col>
                      <Col>
                        <p className='m-0'>Create An Organization</p>
                      </Col>
                    </Row>
                  </Nav.Link>
                  </LinkContainer>
                  {/* Settings for bottom */}
                  </Nav>
                  <Nav className="mt-auto">
                  <LinkContainer to="/settings">
                    <Nav.Link href="#" className="text-dark nav-link ms-4">
                    <Row className='align-items-center'>
                      <Col xs={1} className='pe-3'>
                      <FontAwesomeIcon icon="fa-solid fa-gear" size='lg'/>
                      </Col>
                      <Col>
                        <p className='m-0'>Settings</p>
                      </Col>
                    </Row>
                    </Nav.Link>
                  </LinkContainer>
                  <hr/>
                  <Row className='align-items-center'>
                    <Col md={2} className="mb-3 pe-0">
                      <Image src='favicon.ico' roundedCircle fluid />
                    </Col>
                    <Col xs={7}>
                      <h6 className='Inter-b' style={{ fontSize: '14px' }}>Username</h6>
                      <p className="Inter" style={{ fontSize: '12px', wordWrap: 'break-word' }}>
                        <span>@samplename.iskolarngbayan.pup.edu.ph</span>
                      </p>
                    </Col>
                    <Col>
                      <a href="#" className='text-black'><FontAwesomeIcon icon={("right-from-bracket")} className="ms-2" size='lg'/></a>
                    </Col>
                  </Row>
                 </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    );
}

export default MainMenu1;
export { MainMenu, MainMenu2 };
