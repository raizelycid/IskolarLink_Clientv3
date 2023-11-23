import React from 'react';
import { Button, Row, Container } from 'react-bootstrap';
import '../general.css';
import DocumentCard from '../DocumentCard';

const Section4 = () => {
  const type1Data = {
    title: 'Accreditation Application',
    subtitle: 'To accredit an organization, you first need to be:',
    list_req: [
      'Registered Student',
      'Verified Student Account',
    ],
    userType: 'student',
    documents: [
      {
        imageSrc: '/studentorg.png',
        caption: 'Document 1 Caption',
      },
      {
        imageSrc: '/image1.png', 
        caption: 'Document 2 Caption',
      },
      // Add more documents as needed
    ],
  };

  const type2Data = {
    title: 'Revalidation Application',
    subtitle: 'To revalidate an organization, you first need to be:',
    list_req: ['Accredited Organization'],
    userType: 'organization',
    documents: [
      {
        imageSrc: '/image1.png', 
        caption: 'Document 1 Caption',
      },
      {
        imageSrc: '/studentorg.png', 
        caption: 'Document 2 Caption',
      },
    ],
  };

  return (
    <div className="bg-red text-white s4">
      <div className="p-4">
        <Row className="text-center">
          <h1 className="s4-h1 Inter-b">Application Documents</h1>
          <p className="s4-p Inter-normal">Here is a brief overview of the Accreditation and Revalidation Requirements.</p>
        </Row>
      </div>

      <Container className="d-flex justify-content-around">
        <DocumentCard {...type1Data}/>
        <DocumentCard {...type2Data} />
      </Container>

      <Container className="text-center p-5">
        <Button variant="secondary" className=' py-3' style={{minWidth:'55vh'}}>Learn More</Button>
      </Container>
    </div>
  );
};

export default Section4;
