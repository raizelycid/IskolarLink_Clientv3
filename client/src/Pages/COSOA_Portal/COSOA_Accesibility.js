import React, { useState,useEffect } from 'react';
import { HeroVariant3 } from '../../components/HeroVariant/Hero';
import { Container, Row, Button, Col } from 'react-bootstrap';
import './COSOA_Portal.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Add_COSOA from '../../components/COSOA_Dashboard/Add_COSOA';
import Edit_COSOA from '../../components/COSOA_Dashboard/Edit_COSOA';

function COSOA_Accesibility() {

  const [members,setMembers] = useState([])
  const [userPosition, setUserPosition] = useState('');
  const [refresh,setRefresh] = useState(false)

  useEffect(() =>{
  axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_member/get_members`).then((response)=>
  {
    console.log(response.data)
    setMembers(response.data)
  })
  axios.get(`${process.env.REACT_APP_BASE_URL}/cosoa_member/get_user_position`).then((response) => {
    setUserPosition(response.data.position);
  });
  setRefresh(false)
  },[refresh])

  // Make an API request to update the position of a COSOA member
const updatePosition = async (memberId, newPosition) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/update_cosoa_member/${memberId}`, {
      position: newPosition,
    });
    console.log(response.data); // Success message
  } catch (error) {
    console.error(error);
    // Handle error
  }
};

// Make an API request to remove a COSOA member
const removeMember = async (memberId) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/cosoa_member/remove_cosoa_member/${memberId}`)
    .then((response)=>{console.log(response.data); // Success message
    setRefresh(!refresh)
    alert(response.data.success)
  });

  } catch (error) {
    console.error(error);
    // Handle error
  }
};

  return (
    <>
        <HeroVariant3 
          h1Text="Page Accessibility"
          pText="Assign permissions to COSOA Staff."
        />
        <Row className='text-center my-5'>
          <h1 className='text-red'>COSOA Members</h1>
          <p>Manage or View COSOA Members</p>
        </Row>

        <Container className='text-center my-5'>
        {/* Render the "Add New COSOA Officer" button based on user's position */}
        {userPosition === 'Chairperson' ||
        userPosition === 'Chairperson (Asst.)' ||
        userPosition === 'Vice Chairperson' ||
        userPosition === 'Vice Chairperson (Asst.)' ? (
          <Add_COSOA setRefresh={setRefresh}/>
        ) : (
          <Button variant="primary" disabled>
            + Add New COSOA Officer
          </Button>
        )}

          
        </Container>
      

        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>Name</th>
              <th>Position</th>
              <th >Action</th>
              </tr>
            </thead>
            <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  {member.profile_picture ? (
                      <img src={`${process.env.REACT_APP_BASE_URL}/images/${member.profile_picture}`}alt="Profile" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                    ) : (
                      <FontAwesomeIcon icon={faUser} style={{ fontSize: '30px', marginRight: '10px' }} />
                    )}
                    {member.name}
                  </div>
                </td>
                <td>{member.position}</td>
                <td>
                {/* Render the "Edit" and "Delete" buttons based on user's position */}
                {(  userPosition === 'Chairperson' ||
                  userPosition === 'Chairperson (Asst.)' ||
                    userPosition === 'Vice Chairperson' ||
                    userPosition === 'Vice Chairperson (Asst.)') ? (
                    <>
                    <Row className='px-0 mx-0 '>
                      <Col xs={3}>
                      <Edit_COSOA setRefresh={setRefresh} imgSrc={member.profile_picture} fullName={member.name} position={member.position} id={member.id}/><br/>
                      </Col>
                      <Col xs={5}>
                      <Button variant="primary" onClick={()=>removeMember(member.id)} disabled={member.position === "Chairperson"}>
                        Delete
                      </Button>
                      </Col>
                    </Row>
                      
                    </>
                  ) : (
                    <>
                      <Button variant="warning" style={{ padding: '5px 10px', marginRight: '5px' }} disabled>
                        Edit
                      </Button>
                      <Button variant="danger" style={{ padding: '5px 10px' }} disabled>
                        Delete
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}

            </tbody>
          </Table>
        </Container>
        
  </>
  );
};

export default COSOA_Accesibility;
