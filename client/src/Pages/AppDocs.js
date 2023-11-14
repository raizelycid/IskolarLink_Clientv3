import React from 'react'
import { HeroVariant } from '../components/HeroVariant/Hero';
import { Table, Container, Nav, Row, Tab } from 'react-bootstrap';
import './AppDocs.css';
 

function AppDocs() {
  return (
    <div>
      <HeroVariant 
        h1Text="Application Documents"
        pText="Find all the essential forms and resources you need to start your journey towards accreditation or other important processes."
      />
      <Container className="text-center">
        <Row className='m-5'>
          <h2>Requirements</h2>
          <p>Please ensure that you carefully follow the instructions provided with each document to streamline the application process. We look forward to having you as an integral part of our campus community and wish you every success in your endeavors.</p>
        </Row>
        <Row className="m -5 px-5">
          <Tab.Container defaultActiveKey="accredit">
            <Nav variant="pills" fill className='mx-5 px-5'>
              <Nav.Item>
                <Nav.Link eventKey="accredit">Accreditation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reval">Revalidation</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="my-5">
              <Tab.Pane eventKey="accredit">
                <Table>
                  <thead>
                    <tr>
                      <th>Requirement</th>
                      <th>Code</th>
                      <th>File Template Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Tracker Form</th>
                      <th>AF001</th>
                      <th>View</th>
                    </tr>
                  </tbody>
                </Table>  
              </Tab.Pane>
              <Tab.Pane eventKey="reval">
                <Table>
                    <thead>
                      <tr>
                        <th>Requirement</th>
                        <th>Code</th>
                        <th>File Template Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Tracker Form</th>
                        <th>RF001</th>
                        <th>View</th>
                      </tr>
                    </tbody>
                  </Table>  
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Row>
        
      </Container>
    </div>
  )
}

export default AppDocs
