import React, {useEffect, useState, useRef } from 'react'
import axios from 'axios';
import './AccreditationStatus.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function AccreditationStatus() {

    const [org, setOrg] = useState([]);
    const [org_app, setOrgApp] = useState([]);
    const [advisers, setAdvisers] = useState([]);
    const [requirements, setRequirements] = useState([]);
    const [selectedFile, setSelectedFile] = useState('');
    const [selectedRequirementId, setSelectedRequirementId] = useState('');

    const hiddenFileInput = useRef(null);
    const handleClick = (event, requirement_name, requirement_id) => {
        setSelectedFile(requirement_name);
        setSelectedRequirementId(requirement_id);
        hiddenFileInput.current.click();
      };

    const handleChange = async event => {
    try{
        await axios.post(`http://localhost:3001/student/update_form/${org.id}/${selectedRequirementId}`, {file: event.target.files[0], requirement_name: selectedFile}, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
        }).then((res) => {
        if(res.data.error){
            alert(res.data.error);
        }else{
            alert('Successfully updated form');
            window.location.reload('false');
        }
        });
    }
    catch(err){
    console.log(err);
    }
    };

    const Forms = [ 'Certificate of Recognition', 'Official List', 'Officer\'s Profile', 'Letter of Concurrence', 'Letter of Concurrence-Sub', 'CBL 101', 'GPOA', 'Advocacy Plan','Tracker Form', 'Waiver of Responsibility']

    useEffect(() => {
        axios.get('http://localhost:3001/student/org_application_status').then((response) => {
            console.log(response.data);
            setOrg(response.data.org);
            setOrgApp(response.data.org_app);
            setRequirements(response.data.requirements);
            setAdvisers(response.data.advisers);
    });

    }, []);

    const DateConverter = (date) => {
        const newDate = new Date(date);
        return newDate.toDateString();
    }

    // A function that will push the Form names to the Requirements array
    useEffect(() => {
        pushNames();
    }, [requirements]);
    const pushNames = () => {
        for(let i = 0; i < requirements.length; i++){
            requirements[i].form_name = Forms[i];
        }
        console.log(requirements)
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
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {requirements.map((requirement) => {
                        return (
                            <tr>
                                <td>{requirement.requirement_name}</td>
                                <td>{requirement.form_name}</td>
                                <td>{requirement.status === 'Approved' ? <Button variant='success' disabled>Approved</Button>
                                : requirement.status === 'Revision' ? <><Button variant="warning" onClick={event => handleClick(event, requirement.requirement_name, requirement.id)}>Resubmit</Button> <input type="file" style={{display:'none'}} onChange={handleChange} ref={hiddenFileInput}/> </>
                                : <Button variant='primary' disabled>Resubmit</Button>}</td>
                                <td>{requirement.remarks}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    </>
  )
}

export default AccreditationStatus
