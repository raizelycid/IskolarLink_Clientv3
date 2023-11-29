import React, { useState, useEffect, useContext } from 'react';
import './general.css';
import { HeroVariant } from '../components/HeroVariant/Hero';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { AnnouncementVariant2 } from '../components/AnnouncementVariant/AnnouncementCard';
import OfficerCard from '../components/OfficerCard';
import ContactBanner from '../components/ContactBanner';
import ContactBanner2 from '../components/ContactBanner2';
import { FaCheckCircle } from 'react-icons/fa';
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../helpers/AuthContent';
import LoadingOverlay from './LoadingOverlay'


function Org_Profile() {

  const {auth, menu, handleMenuChange} = useContext(AuthContext);
  const {authState, setAuthState} = auth;
  const {activeMenu, setActiveMenu} = menu;

  const [org, setOrg] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const { orgId} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [applied,setApplied] = useState(false)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    if(authState.status){
      axios.get(`${process.env.REACT_APP_BASE_URL}/accredited/org/has_joined/${orgId}`).then((res)=>{
        setApplied(res.data.applied)
        console.log(res.data.applied)
      })
    }
    setLoading(false)
  },[authState.status])


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/accredited/org/${orgId}`)
    .then((response) => {
      if(response.data.error){
        navigate('/404');
      }else{
      setOrg(response.data);
      }
    })
    .catch((err) => {
      console.log(err);
    })

  }, [location.pathname])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/accredited/org/get_announcements/${orgId}`)
    .then((response) => {
      if(response.data.error){
        navigate('/404');
      }else{
      console.log(response.data)
      setAnnouncements(response.data);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }, [location.pathname])

  

  const handleApply = () => {
    try{
      axios.post(`${process.env.REACT_APP_BASE_URL}/membership/apply`, { orgId:orgId, strict:org.organization.strict })
      .then((response) => {
        if(response.data.error){
          alert(response.data.error);
        }else{
          alert(response.data.success);
          setApplied(true)
        }
      })
    }catch(err){
      console.log(err);
    }
  }

  const handleCancel = async () => {
    if(window.confirm("Are you sure you want to cancel/remove your membership from this organization?")=== true){
      axios.post(`${process.env.REACT_APP_BASE_URL}/accredited/org/delete_membership/${orgId}`).then((res)=>{
        alert(res.data.success)
        window.location.reload()
    }) 
  }
  }


  return (
    <div>
        <HeroVariant
        h1Text={org.organization?.org_name ? org.organization.org_name : 'Organization Name'}
        />
      <Container className='my-5'>
        <Row>
        <Row className="mb-0 align-items-center">
          <Col xs={12} md={8} lg={9} className='mb-3'>
            <div className="d-flex align-items-center">
              <div className="ml-3">
                {org.organization?.org_name ? <h1 className='text-red mb-0'>{org.organization.org_name}</h1> : <h1 className='text-red mb-0'>Organization Name</h1>}
                {org.organization?.strict ?
                (<p className='text-gray2 mb-0'>Open only to students in <br/>{org.organization?.subjurisdiction ? org.organization.subjurisdiction : 'Undefined'}</p>) 
                : (<p className='text-gray2 mb-0'>Open to all</p>)}
                <Badge bg="success">
                      <FaCheckCircle className="mr-1" /> Active
                    </Badge>
              </div>
            </div>
          </Col>
          {authState.status &&
          <Col xs={12} md={4} lg={3} className="text-md-right text-end mt-3 mt-md-0">

            {org.organization?.membership_period ?
            <Button variant="warning"  className="apply-now-btn apply" onClick={handleApply}>Apply Now</Button>
            :
            <Button variant="warning"  className="apply-now-btn" disabled>Closed Membership</Button>
            {org.organization?.membership_period && !applied ?
            <Button variant="warning"  className="apply-now-btn" onClick={handleApply} disabled={!authState.is_verified}>Apply Now</Button>
            : org.organization?.membership_period && applied ?
              <Button variant="danger" className='apply-now-btn' onClick={handleCancel} disabled={!authState.is_verified}>Cancel Membership</Button>
            :<Button variant="warning"  className="apply-now-btn" disabled>Membership Period Closed</Button>
            }
          </Col>
          }
        </Row>
          {org.organization?.mission ?
          <Col>
            <h2>Our Mission</h2>
            <p className='text-gray2'>{org.organization?.mission}</p>
          </Col>
          :null}
          {org.organization?.vision ? 
          <Col>
            <h2>Our Vision</h2>
            <p className='text-gray2'>{org.organization?.vision}</p>
          </Col>
          :null}
        </Row>
      </Container>

      <Container className='my-5'>
        <Row className='text-center'>
          <h1 className='text-red'>Latest Announcements</h1>
          <p className='text-gray2'>Discover the latest announcement that will shape the future of PUP COSOA and elevate your student experience!</p>
        </Row>
        {
          announcements.map((announcement) => {
            return (
              <AnnouncementVariant2 
                announcement={announcement}
              />
            )
          })
        }
        
      </Container>
      {loading &&
      <LoadingOverlay title={"Loading Organization Data"}/>
      }
    </div>
  );
}



export default Org_Profile;
