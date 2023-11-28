import React, { useState, useEffect } from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import Stat_Card from '../../components/Stat_Card';
import { Container, Row, Col, Button, InputGroup, Form, Pagination, Table } from 'react-bootstrap';
import './COSOA_Portal.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import GiveCredentials from '../../components/COSOA_Dashboard/GiveCredentials';

function COSOA_Dashboard() {
  axios.defaults.withCredentials = true;

  const [orgs, setOrgs] = useState([]);
  const navigate = useNavigate();
  const [cosoa, setCOSOA] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust this value as needed

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orgs.slice(indexOfFirstItem, indexOfLastItem);
  const [search, setSearch] = useState('')


  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orgs.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  

  const handleToggle = () => {
    try {
      axios.post(`${process.env.REACT_APP_BASE_URL}/cosoa/application_period`)
        .then((response) => {
          if (response.data.success) {
            alert(response.data.success);
            setCOSOA({ ...cosoa, application_period: response.data.period });
          } else {
            alert(response.data.error);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_profile/get_cosoa_details`)
        .then((response) => {
          console.log(response.data);
          setCOSOA(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      if (cosoa.application_period) {
        document.getElementById("anr-period-initial-toggle").checked = true;
      } else {
        document.getElementById("anr-period-initial-toggle").checked = false;
      }
    } catch (err) {
      console.log(err);
    }
  }, [cosoa.application_period]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_dashboard/get_orgs`)
      .then((response) => {
        console.log(response.data);
        setOrgs(response.data);
      });
  }, []);

  const [countApproved, setCountApproved] = useState(0);
  const [countPending, setCountPending] = useState(0);
  const [countSubmission, setCountSubmission] = useState(0);
  const [statusFilter, setStatusFilter] = useState(''); // Possible values: '', 'Approved', 'Pending', etc.


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_dashboard/count_active_orgs`)
      .then((response) => {
        console.log(response.data);
        setCountApproved(response.data);
      });

    axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_dashboard/count_pending_orgs`)
      .then((response) => {
        console.log(response.data);
        setCountPending(response.data);
      });

    axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_dashboard/count_org_application`)
      .then((response) => {
        console.log(response.data);
        setCountSubmission(response.data);
      });
  }, []);


  const filteredItems = orgs.filter((org) => {
    const matchesSearch = search.toLowerCase() === "" || org.org_name.toLowerCase().includes(search.toLowerCase());
  
    let matchesStatus;
    if (statusFilter === "Accredited0") {
      // Special case for Accredited0
      matchesStatus = org.application.application_status === "Accredited" && org.role === "student";
    } else if (statusFilter === "Revalidated") {
      // Special case for Revalidated
      matchesStatus = org.application.application_status === "Revalidated" && org.application_status === "Revalidated"
    } else if(statusFilter === "Revalidation"){
      matchesStatus = org.application_status === "Revalidation"

    }else if(statusFilter === "Accreditation"){
      matchesStatus = org.application_status === "Accreditation"
    }else {
      // General case for other statuses
      matchesStatus = statusFilter === "" || org.application.application_status === statusFilter;
    }
  
    return matchesSearch && matchesStatus;
  });
  
  

  return (
    <>
      <HeroVariant3
        h1Text="COSOA Dashboard"
        pText="See your organization analytics"
      />
      <Container>
        <Row className="mt-4 mb-3">
          <h1 className="text-red">Overview</h1>
          <h3>Academic Year 2023-2024</h3>
        </Row>
        <Row className="my-5 align-items-center">
          <Stat_Card
            imgSrc="/check_icon.png"
            numcount={countApproved}
            subtitle="Approved"
          />
          <Stat_Card
            imgSrc="/time_icon.png"
            numcount={countPending}
            subtitle="Pending"
          />
          <Stat_Card
            imgSrc="/clipboard_icon.png"
            numcount={countSubmission}
            subtitle="Submission"
          />
        </Row>
        <Row className="mt-4 mb-3">
          <h1 className="text-red">Accreditation and Revalidation Period</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Check
                type="switch"
                id="anr-period-initial-toggle"
                label={
                  cosoa.application_period
                    ? "Accreditation and Revalidation Period is now open"
                    : "Accreditation and Revalidation Period is now closed"
                }
                checked={cosoa.application_period}
                onChange={(e) =>
                  setCOSOA({ ...cosoa, application_period: e.target.checked })
                }
              />
            </Form.Group>
            <Form.Label className="text-red">
              {cosoa.application_period
                ? "Student organizations and Student Representatives may now submit their applications."
                : "The COSOA will not be accepting any applications anymore"}
            </Form.Label>
          </Form>
        </Row>
        <Row className="my-2"></Row>
        <Row className="m-4">
        <InputGroup as={Col} className='text-start'>
        <Form.Select 
          aria-label="Select Status" 
          onChange={(e) => setStatusFilter(e.target.value)}
          value={statusFilter} 
        >
          <option value="">All Statuses</option>
          <option value="Accreditation">Accreditation</option>
          <option value="Accredited0">Need Credentials</option>
          <option value="Revalidation">Revalidation</option>
          <option value="Accredited">Accredited</option>
          <option value="Revalidated">Revalidated</option>
          {/* Add more status options as needed */}
        </Form.Select>
        </InputGroup>
          <InputGroup as={Col} className="text-end">
            <Button variant="outline-secondary" id="button-addon2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </Button>
            <Form.Control
              placeholder="Search"
              className="shadow-lg"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </Row>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Organizations</th>
              <th>Representative</th>
              <th>Status</th>
              <th>Classification</th>
              <th>Action</th>
              <th>Credentials</th>
            </tr>
          </thead>
          <tbody>
          {filteredItems.length > 0 ? (
    filteredItems.map((org, index) => (
      <tr key={index}>
        <td>{org.org_name}</td>
        <td>
          {org.representative.photo ? (
            <img
              src={`${process.env.REACT_APP_BASE_URL}/images/${org.photo}`}
              alt="Profile Picture"
              width="40"
              height="40"
              className="rounded-circle"
            />
          ) : (
            <FontAwesomeIcon icon={faUser} size="2xl" />
          )}
          {org.representative}
        </td>
        <td>
          {org.application?.application_status === "Revalidated" &&
          org.application_status === "Revalidation"
            ? "Revalidation"
            : org.application.application_status}
        </td>
        <td>
          <span className="cs-dashboard-jurisdiction">
            {org.subjurisdiction}
            <br />
            {org.type}
          </span>
        </td>
        <td>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="lg"
            onClick={() => {
              navigate(`/cosoa/applicant/${org.id}`);
            }}
          />
        </td>
        <td>
          <GiveCredentials
            role={org.role}
            applicationStatus={org.application.application_status}
            orgId={org.id}
          />
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6" style={noResultsStyle}>No results found</td>
    </tr>
  )}
          </tbody>
        </Table>
        <Pagination className="justify-content-center pagination-red">
          {pageNumbers.map((number) => (
            <Pagination.Item
              key={number}
              active={number === currentPage}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </>
  );
}

const noResultsStyle = {
  textAlign: 'center',
  padding: '20px',
  fontSize: '1.2rem',
  color: 'grey',
  fontStyle: 'italic'
};

export default COSOA_Dashboard;

