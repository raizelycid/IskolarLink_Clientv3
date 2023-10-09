import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './general.css'; 

library.add(faChevronRight, faChevronLeft, faCheckCircle);

const DocumentCard = ({ title, subtitle, list_req, documents }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="document-card with-border p-4 rounded" style={{ height: '695px', width: '592px' }}> 
      <div className="document-info">
        <div className='border-bottom'>
          <h3 className="Inter dc-title">{title}</h3>
          <p className="Inter-normal dc-subtitle">{subtitle}</p>
        </div>

        <div className="requirements pt-3 mb-3">
          {list_req.map((req, index) => (
            <div key={index} className="d-flex align-items-center mb-1">
              <FontAwesomeIcon icon="check-circle" className="darkyellow-icon" />
              <div style={{ width: '12px' }}></div>
              <span className="Inter-normal req">{req}</span>
            </div>
          ))}
        </div>

        <p className="Inter-med dc-p"> If all of those are met, the organization can now submit the following:</p>
      </div>
        {/* Will redo the carousel */}
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        {documents.map((document, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <img
                className="img-top custom-img"
                src={document.imageSrc}
                alt={`Document ${index + 1}`}
              />
            </div>
            <div className="text-center">
              <p>{document.caption}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex justify-content-between align-items-center p-3">
        <button
          className="carousel-control-prev darkyellow-icon"
          onClick={() => handleSelect(index - 1)}
          disabled={index === 0}
        >
        <FontAwesomeIcon icon={faChevronLeft} className="darkyellow-icon" />
        </button>
        <button
          className="carousel-control-next darkyellow-icon"
          onClick={() => handleSelect(index + 1)}
          disabled={index === documents.length - 1}
        >
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "var(--darkyellow)" }} />
        </button>
      </div>
    </div>
  );
};

export default DocumentCard;
