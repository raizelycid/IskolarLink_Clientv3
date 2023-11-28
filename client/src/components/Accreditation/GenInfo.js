import React from 'react'
import {Col, Row, Form, Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './AccFinish.css';

const GenInfo = ({formData, setFormData, show}) => {

    const orgTypes = [
        'Academic Organization',
        'Advocacy Organization',
        'Cultural/Arts/Dance Organization',
        'Fraternities and Sororities', 
        'Political Organization',
        'Religious Organization',
        'Scholars Organization' ,
        'Socio-civic Organization',
        'Special Interest Organization',
        'Sports Organization',
    ]

    const Departments = [
        `College of Accountancy and Finance | CAF`,
        `College of Architecture, Design, and Built Environment | CADBE`,
        `College of Arts and Letters | CAL`,
        `College of Business Administration | CBA`,
        `College of Communication | COC`,
        `College of Computer and Information Sciences | CCIS`,
        `College of Education | COED`,
        `College of Engineering | CE`,
        `College of Human Kinetics | CHK`,
        `College of Law | CL`,
        `College of Political Science and Public Administration | CPSPA`,
        `College of Social Sciences and Development | CSSD`,
        `College of Science | CS`,
        `College of Tourism, Hospitality, and Transportation Management | CTHTM`,
        `Institute of Technology | ITECH`,
        `Open University System | OUS`,
        `Graduate School | GS`,
        `Senior High School | SHS`,
        `University-Wide`
    ]

  return (
    <>
    <form style={{display:show}}>
        <Container>
        <Image src="/1st.png" alt="IskolarLink Logo"  fluid style={{ marginBottom: '40px' }}/>    
        <Row className="p-3">
            <Form.Group as={Col} controlId="orgName" className="mb-3">
                <Form.Label>Complete Name of Student Organization (Abbreviation/Initialisim)</Form.Label>
                <Form.Control type="text" placeholder="e.g. Association of Concerned Students (ACS)" onChange={(e) => setFormData({...formData, orgName: e.target.value})} value={formData.orgName}/>
            </Form.Group>

            <Form.Group as={Col} controlId="jurisdiction" className="mb-3">
                <Form.Label>Classification of Jurisdiction</Form.Label>
                <Form.Select aria-label='Jurisdiction' onChange={(e) => setFormData({...formData, jurisdiction: e.target.value})} value={formData.jurisdiction}>
                    <option>Choose...</option>
                    <option>Local Student Organization</option>
                    <option>University-Wide Student Organization</option>
                </Form.Select>
            </Form.Group>
        </Row>
        <Row className="p-3">
            <Form.Group as={Col} controlId="orgType" className="mb-3">
                <Form.Label>Nature/Type of Student Organization</Form.Label>
                <Form.Select aria-label='OrgType' onChange={(e) => setFormData({...formData, orgType: e.target.value})} value={formData.orgType}>
                    <option>Choose...</option>
                    {orgTypes.map((orgType) => (
                        <option key={orgType}>{orgType}</option>
                    ))}

                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="subjurisdiction" className="mb-3">
                <Form.Label>Sub-Jurisdiction</Form.Label>
                <Form.Select aria-label='SubJurisdiction' onChange={(e) => setFormData({...formData, subjurisdiction: e.target.value})} value={formData.subjurisdiction}>
                    <option>Choose...</option>
                    {Departments.map((department) => (
                        <option key={department}>{department}</option>
                    ))}
                </Form.Select>
            </Form.Group>
        </Row>
        <Row className="p-3">
            <Form.Group as={Col} controlId="advisers" className="mb-3">
                <Form.Label>Complete Name of Student Organization Adviser(s) (Separated by comma)</Form.Label>
                <Form.Control type="text" placeholder="e.g. Juan Dela Cruz, Pedro Penduko" onChange={(e) => setFormData({...formData, advisers: e.target.value})} value={formData.advisers}/>
            </Form.Group>
        </Row>
        </Container>
    </form>
    </>
  )
}

export default GenInfo
