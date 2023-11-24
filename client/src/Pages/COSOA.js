import React from 'react'
import { HeroVariant } from '../components/HeroVariant/Hero';
import { Container, Row, Col } from 'react-bootstrap';
import { AnnouncementVariant } from '../components/AnnouncementVariant/AnnouncementCard';
import './COSOA.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEffect, useState } from 'react';
import axios from 'axios';
 

function COSOA() {

  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_ann`).then((response) => {
        setAnnouncements(response.data);
      });
    }catch(err){
      console.log(err);
    }
  },[]);

  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_ann/get_events`).then((response) => {
        if(response.data.err){
          console.log(response.data.err);
        }else{
        setEvents(response.data);
        }
      });
    }catch(err){
      console.log(err);
    }
  },[]);

  const handleDateClick = (eventInfo) => {
    // Format date to YYYY-MM-DD
    let date = eventInfo.event.extendedProps.date;
    date = date.split('T')[0];

    // Alert the date, event title, event description, and event link
    console.log({date: date, title: eventInfo.event.title, description: eventInfo.event.extendedProps.description, link: eventInfo.event.extendedProps.link})

    alert(`${date}\n${eventInfo.event.title}\n${eventInfo.event.extendedProps.description}\n${eventInfo.event.extendedProps.link}`)
  }

  return (
    <div>
      <HeroVariant 
        h1Text="PUP Student Council Commission on Student Organizations and Accreditation (COSOA)"
        pText="COSOA plays a pivotal role in fostering a vibrant campus community by overseeing the recognition and accreditation of student organizations."
      />
      <Container className='my-5'>
        <Row>
          <Col>
            <h2>Description</h2>
            <p className='text-gray2'>The sole-accrediting body and an independent student body set to develop an effective working relationship between the Central Student Council, the Office of Student Services (OSS), and all student organizations at the Polytechnic University of the Philippines (PUP).</p>
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
      </Container>

      <Container className='my-5'>
        <Row className='text-center'>
          <h1 className='text-red'>Latest Announcements</h1>
          <p className='text-gray2'>Discover the latest announcement that will shape the future of PUP COSOA and elevate your student experience!</p>
        </Row>
        <Row>
          {
            announcements.map((announcement) => {
              return (
                <AnnouncementVariant 
                  key={announcement.cosoa_ann_id}
                  announcement={announcement}
                />
              )
            })
          }
        </Row>
      </Container>
        <Row className='text-center'>
            <h1 className='text-red'>The Core of Our Team</h1>
            <p className='text-gray2'>Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>
        </Row>
    </div>
  )
}

export default COSOA
