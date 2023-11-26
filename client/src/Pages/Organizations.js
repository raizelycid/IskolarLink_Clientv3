import React, {useEffect, useState} from 'react'
import { HeroVariant } from '../components/HeroVariant/Hero';
import './Organizations.css';
import Accredited_Org from '../components/Accredited_Org'; 
import { Container, Row, InputGroup, Form, Button, Col, Pagination } from 'react-bootstrap';
import axios from 'axios';

function Organizations() {

  const [organizations, setOrganizations] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15); 

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
      <HeroVariant 
        h1Text="Accredited Organizations"
        pText="Discover our Accredited Organizations, the heart and soul of our vibrant campus community. Explore their achievements, activities, and the incredible impact they make on our campus life."
      />
      <Row className='m-4'>
        <Col xs={1}></Col>
        <Col>
          <Button variant="outline-secondary"><i class="fa-solid fa-filter"></i> Filter</Button>
        </Col>
        <InputGroup as={Col}>
          <Button variant="outline-secondary" id="button-addon2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Form.Control
            placeholder="Search"
            className="shadow-lg"
            type='text'
            onChange={handleSearch}
            value={search}
          />
        </InputGroup>
        <Col xs={1}></Col>
      </Row>

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
                      tags={[org.jurisdiction, org.subjurisdiction]}
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
