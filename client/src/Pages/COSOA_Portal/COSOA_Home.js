import React, { useState,useEffect, useContext } from 'react';
import './COSOA_Portal.css';
import { HeroVariant2 } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AnnouncementVariant } from '../../components/AnnouncementVariant/AnnouncementCard';
import OfficerCard from '../../components/OfficerCard';
import ContactBanner from '../../components/ContactBanner';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AuthContext } from '../../helpers/AuthContent';
import AddAnnouncement from '../../components/COSOA_Home/AddAnnouncement';
import axios from 'axios';
import AddEvent from '../../components/COSOA_Home/AddEvent';
import { render } from '@fullcalendar/core/preact';

function COSOA_Home() {

  const {auth, menu} = useContext(AuthContext);
    const {authState, setAuthState} = auth;
    const {activeMenu, setActiveMenu} = menu;

  const [refreshAnnouncement, setRefreshAnnouncement] = useState(false);
  const [refreshEvents, setRefreshEvents] = useState(false);

  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_profile/get_cosoa_details`).then((response) => {
        setInfo(response.data);
      });
    }catch(err){
      console.log(err);
    }
  },[]);

  
  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_ann`).then((response) => {
        setAnnouncements(response.data);
        setRefreshAnnouncement(false)
      });
    }catch(err){
      console.log(err);
    }
  },[refreshAnnouncement]);

  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_ann/get_events`).then((response) => {
        if(response.data.err){
          console.log(response.data.err);
        }else{
        setEvents(response.data);
        setRefreshEvents(false)
        }
      });
    }catch(err){
      console.log(err);
    }
  },[refreshEvents]);

  const handleDateClick = (eventInfo) => {
    // Format date to YYYY-MM-DD
    let date = eventInfo.event.extendedProps.date;
    date = date.split('T')[0];

    // Alert the date, event title, event description, and event link
    console.log({date: date, title: eventInfo.event.title, description: eventInfo.event.extendedProps.description, link: eventInfo.event.extendedProps.link})
  }


  return (
    <div>
        <HeroVariant2 
        imgSrc={info.org_picture ? `${process.env.REACT_APP_BASE_URL}/cosoa/${info.org_picture}` : null}
        name="Commission on Student Organizations and Accreditation (COSOA)"
        webmail="pupcosoa.iskolarngbayan.pup.edu.ph"
        />
      <Container className='my-5'>
        <Row>
          <Col>
            <h2>Our Mission</h2>
            <p className='text-gray2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Col>
          <Col>
            <h2>Our Vision</h2>
            <p className='text-gray2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Col>
        </Row>
      </Container>

      <Container className='text-center my-5'>
        <Row>
          <h1 className='text-red'>COSOA Calendar</h1>
          <p className='text-gray2'>Discover the latest announcement that will shape the future of PUP COSOA and elevate your student experience!</p>
        </Row>
        <Row>
          <FullCalendar 
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          events={events.map((event) => {
            return(
              {
                id: event.id,
                title: event.title,
                date: event.date,
                extendedProps: {
                  date: event.date,
                  description: event.description,
                  link: event.link,
                }
              }
            );
          })}
          eventClick={handleDateClick}
          displayEventTime={false}
          />
        </Row>
        <Col className='text-center my-5'>
         <AddEvent setRefreshEvents={setRefreshEvents}/>
        </Col>
      </Container>

      <Container className='my-5'>
        <Row className='text-center'>
          <h1 className='text-red'>Latest Announcements</h1>
          <p className='text-gray2'>Discover the latest announcement that will shape the future of PUP COSOA and elevate your student experience!</p>
        </Row>
        {announcements.map((announcement, index) => {
          return(
            <AnnouncementVariant
              key={index}
              announcement={announcement}
            />
          );
        }
        )}
        <Row className='text-center'>
        <Col>
        <AddAnnouncement setRefreshAnnouncement = {setRefreshAnnouncement}/>
        </Col>
        </Row>
        
      </Container>
        <Row className='text-center'>
            <h1 className='text-red'>The Core of Our Team</h1>
            <p className='text-gray2'>Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>
        </Row>
      <Container>
        <OfficerCard 
          imageSrc="/Officer.png"
          imageSrc2="/Officer.png"
          imageSrc3="/Officer.png"
          name="John Doe"
          name2="James Doe"
          name3="Joe Doe"
          role="President"
          role2="Vice President"
          role3="Secretary"
        />
        <OfficerCard 
          imageSrc="/Officer.png"
          imageSrc2="/Officer.png"
          imageSrc3="/Officer.png"
          name="Jared Doe"
          name2="Jerald Doe"
          name3="Jest Doe"
          role="Head for Membership"
          role2="Vice President for Finance"
          role3="Head for Creatives"
        />
        <Row className='text-center my-5'>
        <Col>
        <Button variant="primary">Modify</Button>
        </Col>
        </Row>
      </Container>
      <ContactBanner />
    </div>
  );
  
}



export default COSOA_Home;
