import React,{useEffect,useState} from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Button, InputGroup, Form, Image} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import './Admin_Portal.css'
import Pagination from 'react-bootstrap/Pagination';


function User_Feedback() {

  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 5;
  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/feedback/get`)
      .then(res => {
        setFeedbacks(res.data);
      })
      .catch(err => {
        console.log(err);
      });

      setRefresh(false);
  },[refresh]);

  const currentFeedbacks = feedbacks.slice((currentPage - 1) * feedbacksPerPage, currentPage * feedbacksPerPage);

  let paginationItems = [];

  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <HeroVariant3
        h1Text="User Feedback"
      />
      <Container>
        <Row className='mt-4 mb-3'>
          <h1 className='text-red'>Feedbacks</h1>
        </Row>
        <Row className='m-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentFeedbacks.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.fullName}</td>
                <td>{feedback.email}</td>
                <td>{feedback.subject}</td>
                <td>{feedback.message.length > 50 ? feedback.message.substring(0, 50) + '...' : feedback.message}</td>
                <td><Button variant="danger" onClick={() => {
                  axios.delete(`${process.env.REACT_APP_BASE_URL}/feedback/delete/${feedback.id}`)
                    .then(res => {
                      alert(res.data.success);
                      setRefresh(true);
                    })
                    .catch(err => {
                      alert(err.response.data.error);
                    });
                }}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
          </Table>
      </Row>
      <Pagination className='justify-content-center'>{paginationItems}</Pagination>
      </Container>
    </>
  );
}

export default User_Feedback;
