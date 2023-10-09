import React from 'react';
import { Button, Row } from 'react-bootstrap';
import './general.css';

// Import the DocumentCard component
import DocumentCard from './DocumentCard'; // Replace with the actual path to your DocumentCard component

const Section4 = () => {
  // Define the data for Type 1 and Type 2
  const type1Data = {
    title: 'Accreditation Application',
    subtitle: 'To accredit an organization, you first need to be:',
    list_req: [
      'Registered Student',
      'Verified Student Account',
    ],
    documents: [
      {
        imageSrc: '/studentorg.png', // Reference image from the public folder
        caption: 'Document 1 Caption',
      },
      {
        imageSrc: '/image 1.png', // Reference image from the public folder
        caption: 'Document 2 Caption',
      },
      // Add more documents as needed
    ],
  };

  const type2Data = {
    title: 'Revalidation Application',
    subtitle: 'To revalidate an organization, you first need to be:',
    list_req: ['Accredited Organization'],
    documents: [
      {
        imageSrc: '/image 1.png', // Reference image from the public folder
        caption: 'Document 1 Caption',
      },
      {
        imageSrc: '/studentorg.png', // Reference image from the public folder
        caption: 'Document 2 Caption',
      },
      // Add more documents as needed
    ],
  };

  return (
    <div className="bg-red text-white s4">
      <div className="p-5">
        <Row className="text-center">
          <h1 className="s4-h1 Inter-b">Application Documents</h1>
          <p className="s4-p Inter-normal">Here is a brief overview of the Accreditation and Revalidation Requirements.</p>
        </Row>
      </div>

      <div className="d-flex justify-content-around">
        {/* Render Type 1 DocumentCard */}
        <DocumentCard {...type1Data} />

        {/* Render Type 2 DocumentCard */}
        <DocumentCard {...type2Data} />
      </div>

      <div className="text-center p-5">
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  );
};

export default Section4;
