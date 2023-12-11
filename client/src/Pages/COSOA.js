
import './COSOA.css';
import React, { useState,useEffect, useContext } from 'react';
import './COSOA_Portal/COSOA_Portal.css';
import { HeroVariant2 } from '../components/HeroVariant/Hero';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AnnouncementVariant } from '../components/AnnouncementVariant/AnnouncementCard';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AuthContext } from '../helpers/AuthContent';
import AddAnnouncement from '../components/COSOA_Home/AddAnnouncement';
import EventModal from '../components/COSOA_Home/EventModal';
import axios from 'axios';
 

function COSOA() {

  
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
  const [showModal, setShowModal] = useState(false);
  const [eventInfo, setEventInfo] = useState({});

  const openModal = () => {
    // Simulating an action that triggers the modal
    // For instance, a button click
    setEventInfo({
      date: '2023-12-18',
      title: 'Extension for Initial Requirements',
      description: 'The PUP SC COSOA en banc convened an urgent meeting with regard to the deadline extension of ACE AnR 2023-2024. Following this decision, it was resolved by a vote of 7-0-0 that the final and extended deadline shall be set on Monday, 18 December 2023, with the application of adjustments and exemptions on other requirements stipulated in the AnR process for initial submissions.',
      link: 'https://www.facebook.com/pup.sccosoa/posts/pfbid0J5MwDcurWHSEbEs47An3Fe4Xg7BX7RRtDd1TRgBao7mZbA225LYbNShXJJZye4c6l'
    });

    // Show the modal
    setShowModal(true);
  }
  
  const handleDateClick = (eventInfo) => {
    // Format date to YYYY-MM-DD
    let date = eventInfo.event.extendedProps.date;
    date = date.split('T')[0];

    // Set eventInfo state to display in the modal
    setEventInfo({
      date: date,
      title: eventInfo.event.title,
      description: eventInfo.event.extendedProps.description,
      link: eventInfo.event.extendedProps.link
    });

    // Show the modal
    setShowModal(true);
  }

  const handleCloseModal = () => {
    // Close the modal
    setShowModal(false);
  }
  {/*
  const handleDateClick = (eventInfo) => {
    
    let date = eventInfo.event.extendedProps.date;
    date = date.split('T')[0];

    // Alert the date, event title, event description, and event link
    console.log({date: date, title: eventInfo.event.title, description: eventInfo.event.extendedProps.description, link: eventInfo.event.extendedProps.link})
  }
*/}

  return (
    <div>
        <HeroVariant2 
        imgSrc={info.org_picture ? `${process.env.REACT_APP_BASE_URL}/cosoa/${info.org_picture}` : null}
        name="Commission on Student Organizations and Accreditation (COSOA)"
        webmail="pupcosoa.iskolarngbayan.pup.edu.ph"
        />
      <Container className='my-5'>
        <Row>
            <h2>Who We Are</h2>
            <p className='text-gray2'>PUP COSOA or known as Commission Of Student Organizations and Accreditation, is a commission under the PUP Central Student Council. They are the ones partnering with the Office of the Student Services in order to oversee the accreditation and revalidaiton process.</p>
        </Row>
      </Container>

      <Container className='text-center my-5'>
      {/*<button onClick={openModal}>Open Modal</button> TO TEST EVENT MODAL*/}

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
          <EventModal 
            show={showModal}
            handleClose={handleCloseModal}
            event = {eventInfo}/>
        </Row>
      </Container>

      {/*<Container className='my-5'>
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
        </Row>
      </Container>*/}
    </div>
  );
}

export default COSOA
