import React, {useEffect, useState, useContext} from 'react'
import { HeroVariant7 } from '../components/HeroVariant/Hero';
import './Organizations.css';
import Accredited_Org from '../components/Accredited_Org'; 
import { Container, Row, InputGroup, Form, Button, Col, Pagination, Dropdown, Image } from 'react-bootstrap';
import axios from 'axios';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


function Organizations() {

  axios.defaults.withCredentials = true;

  const [organizations, setOrganizations] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15); 
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [buttonWidth, setButtonWidth] = useState(0);

  const handleSelectItem = (itemName) => {
    if (selectedFilters.includes(itemName)) {
      const updatedFilters = selectedFilters.filter((item) => item !== itemName);
      setSelectedFilters(updatedFilters); // Remove the item from state
    } else {
      setSelectedFilters([...selectedFilters, itemName]); // Add the selected item to state
    }
  };

  const handleRemoveFilter = (itemName) => {
    const updatedFilters = selectedFilters.filter((item) => item !== itemName);
    setSelectedFilters(updatedFilters);
  };
  
  const nature = ['Academic',
    'Advocacy',
    'Cultural/Arts/Dance',
    'Fraternities and Sororities',
    'Political',
    'Religious',
    'Scholars',
    'Socio-civic',
    'Special Interest',
    'Sports'];

  const jurisdiction = ['Uni-wide',
    'CAF',
    'CADBE',
    'CAL',
    'CBA',
    'COC',
    'CCIS',
    'COED',
    'CE',
    'CHK',
    'CL',
    'CPSPA',
    'CSSD',
    'CS',
    'CTHTM',
    'ITECH',
    'OUS',
    'GS',
    'SHS']
  

  useEffect(() => {
    const dropdownButton = document.querySelector('.dropdown-toggle');

    if (dropdownButton) {
      setButtonWidth(dropdownButton.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const endpoint = search === ''
          ? `${process.env.REACT_APP_BASE_URL}/org/show_accredited_orgs?page=${currentPage}&limit=${itemsPerPage}`
          : `${process.env.REACT_APP_BASE_URL}/org/show_accredited_orgs/${search}?page=${currentPage}&limit=${itemsPerPage}`;

        const response = await axios.get(endpoint);
        setOrganizations(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Debounce the search input
    const debounceTimeout = setTimeout(() => {
      fetchOrganizations();
    }, 500); // Adjust the debounce timeout as needed (e.g., 500 milliseconds)

    // Clear timeout on unmount or when the search value changes
    return () => clearTimeout(debounceTimeout);
  }, [search, currentPage, itemsPerPage]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

// Pagination Logic
const totalPages = Math.ceil(organizations.length / itemsPerPage);

  return (
    <div>
      <HeroVariant7 
        h1Text="Accredited Organizations"
        pText={
          <>Discover our Accredited Organizations, the heart and soul of our vibrant campus community. <br/>
        Explore their achievements, activities, and the incredible impact they make on our campus life.
        </>}
      />
      <Container>
      <Row className='my-4 text-center '>
      <Col xs={3} className=' text-start'>
      <Dropdown>
  <Dropdown.Toggle variant='primary' className="d-flex align-items-center">
    <Image src='/Dropdown/groups.png' className="me-2"/> Organization Type
  </Dropdown.Toggle>
  <Dropdown.Menu className='p-3 responsive-dropdown'>
    {nature.map((option, index) => (
      <Form.Check
        key={index}
        type='checkbox'
        label={option}
        onChange={(e) => handleSelectItem(e.target.value)}
        value={option}
        checked={selectedFilters.includes(option)}
      />
    ))}
  </Dropdown.Menu>
</Dropdown>
      </Col>

      <Col xs={4} className=' text-start'>
      
  <Dropdown>
    <Dropdown.Toggle variant='secondary' className="d-flex align-items-center">
      <Image src='/Dropdown/flagpin.png' className="me-2"/> Jurisdiction
    </Dropdown.Toggle>
    <Dropdown.Menu style={{ width: `${buttonWidth}px`, maxHeight: '200px', overflowY: 'auto' }} className='p-3'>
      {jurisdiction.map((option, index) => (
        <Form.Check
          key={index}
          type='checkbox'
          label={option}
          onChange={(e) => handleSelectItem(e.target.value)}
          value={option}
          checked={selectedFilters.includes(option)}
        />
      ))}
    </Dropdown.Menu>
  </Dropdown>


      </Col>

      <Col className='  text-end'>
        <InputGroup>
          <Button variant="outline-secondary" id="button-addon2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Form.Control
            placeholder="Search"
            
            type='text'
            onChange={handleSearch}
            value={search}
          />
        </InputGroup>
      </Col>
    </Row>
    
    <hr/>
    <Row className='my-2'>
    <Col>
      {selectedFilters.map((filter, index) => (
        <Button
          key={index}
          variant='light'
          onClick={() => handleRemoveFilter(filter)}
          style={{
            border: '1px solid #ced4da',
            padding: '5px 10px',
            margin: '5px',
            display: 'inline-block', // Change display to inline-block
          }}
        >
          {filter} <span className='p'><i className="fa-solid fa-xmark"></i></span>
        </Button>
      ))}
    </Col>
  </Row>


    </Container>      

     <Container className='mx-auto mb-5'>
        <Row className='mx-4'>
          {organizations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((org) => {
              return (
                <>
                {org.User.role !== 'student' &&
                  <Col xs={12} md={4} className='mb-4'>
                    <Accredited_Org 
                      imageSrc={org.User.profile_picture ? `${process.env.REACT_APP_BASE_URL}/org_images/${org.User.profile_picture}` : `${process.env.REACT_APP_BASE_URL}/org_images/default-org-photo.jpg`}
                      title={org.org_name}
                      description={org.User.description ? org.User.description : 'No description'}
                      tags={[org.type, org.subjurisdiction]}
                      orgId={org.id}
                    />
                  </Col>
                }
                </>
              )
          })}
        </Row>

        <Pagination className="justify-content-center pagination-red">
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
        
      </Container>
    </div>
  )
}

export default Organizations;