import React, {useEffect, useState } from 'react'
import axios from 'axios';
import './AccreditationStatus.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function AccreditationStatus() {

    const [org, setOrg] = useState([]);
    const [org_app, setOrgApp] = useState([]);
    const [advisers, setAdvisers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/student/org_application_status').then((response) => {
            setOrg(response.data.org);
            setOrgApp(response.data.org_app);
            setAdvisers(response.data.advisers);
    });
    }, []);

    const DateConverter = (date) => {
        const newDate = new Date(date);
        return newDate.toDateString();
    }

  return (
    <>
        <h2 className='text-center'>Accreditation Status</h2>
        <div className='ac-container'>
            <div className='ac-left-container'>
                <h3>Organization Details</h3>
                    <span className='ac-left-text'>Organization Name:</span>
                    <span className='ac-left-text'>{org.org_name}</span>
                    <span className='ac-left-text'>Jurisdiction:</span>
                    <span className='ac-left-text'>{org.jurisdiction}</span>
                    <span className='ac-left-text'>Sub-Jurisdiction:</span>
                    <span className='ac-left-text'>{org.subjurisdiction}</span>
                    <span className='ac-left-text'>Organization Type:</span>
                    <span className='ac-left-text'>{org.type}</span>
                    <span className='ac-left-text'>Adviser(s):</span>                                     
                    <span className='ac-left-text'>{advisers.map((adviser) => {
                        return (
                            <>
                                {adviser.adviser_name}
                                <br/>
                            </>
                        );
                    })}</span>
            </div>
            <div className='ac-right-container'>
                <h3>Application Details</h3>
                    <span className='ac-right-text'>Application Status:</span>
                    <span className='ac-right-text'>{org_app.application_status}</span>
                    <span className='ac-right-text'>Application Date:</span>
                    <span className='ac-right-text'>{DateConverter(org_app.createdAt)}</span>
                    <span className='ac-right-text'>Feedback:</span>
                    
                    
                    <span className='ac-right-text'>{org_app.feedback}</span>
            </div>
        </div>
        <div className='ac-bottom-container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Form Code</th>
                        <th>Form Name</th>
                        <th>Resubmission</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AF001</td>
                        <td>Tracker Form</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                    <tr>
                        <td>AD001</td>
                        <td>Certificate of Recognition</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                    <tr>
                        <td>AD002</td>
                        <td>Official List</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                    <tr>
                        <td>AD003</td>
                        <td>Officer's Profile</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                    <tr>
                        <td>AD004</td>
                        <td>Letter of Concurrence</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                    <tr>
                        <td>AD005</td>
                        <td>Letter of Concurrence-Sub</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                    <tr>
                        <td>AD006</td>
                        <td>CBL 101</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                    <tr>
                        <td>AD007</td>
                        <td>GPOA</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                    <tr>
                        <td>AD008</td>
                        <td>Advocacy Plan</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                    <tr>
                        <td>AD009</td>
                        <td>Waiver of Responsibility</td>
                        <td><Button variant="primary" disabled>Resubmit</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </>
  )
}

export default AccreditationStatus
