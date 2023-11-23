import React, { useState } from 'react';
import { HeroVariant } from '../components/HeroVariant/Hero';
import { Table, Container, Nav, Row, Tab } from 'react-bootstrap';
import './AppDocs.css';
import { ContactBanner1 } from '../components/ContactBanner';

function AppDocs() {
  const [activeKey, setActiveKey] = useState('accredit');
  
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
        <Row className="m-5 px-5">
          <Tab.Container defaultActiveKey="accredit">
            <Nav variant="pills" fill className='mx-5 px-5 rounded-3  align-items-center d-flex'>
              <Nav.Item className='border-top border-bottom border-start rounded-start-3 border-primary  p-1'>
                <Nav.Link
                  eventKey="accredit"
                  className={activeKey === 'accredit' ? 'bg-red' : 'text-gray2'}
                  onClick={() => setActiveKey('accredit')}
                >
                  Accreditation
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='border-top border-bottom border-end rounded-end-3 border-primary p-1'>
                <Nav.Link
                  eventKey="reval"
                  className={activeKey === 'reval' ? 'bg-red' : 'text-gray2'}
                  onClick={() => setActiveKey('reval')}
                >
                  Revalidation
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="my-5">
              <Tab.Pane eventKey="accredit">
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th className='text-red'>Requirement</th>
                      <th className='text-red'>Code</th>
                      <th className='text-red'>File Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Tracker Form</th>
                      <th>AF001</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Certificate of Recognition from Central/Local Student Council</th>
                      <th>AD001</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Official List of Officers and Adviser(s) with signatures over printed names, and list of members <i>(at least 15 members including the officers/executives)</i></th>
                      <th>AD002</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Officers' Profile with 1st Semester Certificate of Registration <i>*alternatives, e.g., Confirmation Slip/Certificate of Enrollment</i></th>
                      <th>AD003</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Advier(s)'s Letter of Concurrence with scanned copy of their University-issued ID</th>
                      <th>AD004</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Student Organization's Constitution and Bylaws (CBL)</th>
                      <th>AD005</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>General Plan of Activities with Budgetary Outlay</th>
                      <th>AD006</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Advocacy Plan</th>
                      <th>AD007</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Certificate of Clearance from PUP Student Council Commission on Audit (PUP SC COA)</th>
                      <th>AD008</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Waiver of Responsibility</th>
                      <th>AD009</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                  </tbody>
                </Table>  
              </Tab.Pane>
              <Tab.Pane eventKey="reval">
              <Table responsive bordered>
                  <thead>
                    <tr>
                      <th className='text-red'>Requirement</th>
                      <th className='text-red'>Code</th>
                      <th className='text-red'>File Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Tracker Form</th>
                      <th>RF001</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Certificate of Recognition from Central/Local Student Council</th>
                      <th>RD001</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Scanned Copy of the Latest Certificate of Accreditation/Revalidation</th>
                      <th>RD002</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Official List of Officers and Adviser(s) with signatures over printed names, and list of members</th>
                      <th>RD003</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Officers' Profile with 1st Semester Certificate of Registration <i>*alternatives, e.g., Confirmation Slip/Certificate of Enrollment</i></th>
                      <th>RD004</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Advier(s)'s Letter of Concurrence with scanned copy of their University-issued ID</th>
                      <th>RD005</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Student Organization's Constitution and Bylaws (CBL)</th>
                      <th>RD006</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>General Plan of Activities with Budgetary Outlay</th>
                      <th>RD007</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Advocacy Plan</th>
                      <th>RD008</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Accomplishment Report</th>
                      <th>RD009</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Financial Statements</th>
                      <th>RD010</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Certificate of Clearance from PUP Student Council Commission on Audit (PUP SC COA)</th>
                      <th>RD011</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Turnover of Assets and Funds</th>
                      <th>RD012</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Waiver of Responsibility</th>
                      <th>RD013</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                  </tbody>
                </Table> 
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Row>
      </Container>
      <ContactBanner1/>
    </div>
  )
}

export default AppDocs
