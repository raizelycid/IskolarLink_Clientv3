import React, { useState } from 'react';
import { HeroVariant } from '../components/HeroVariant/Hero';
import { Table, Container, Nav, Row, Tab } from 'react-bootstrap';
import './AppDocs.css';
import { ContactBanner1 } from '../components/ContactBanner';
import { saveAs } from 'file-saver';

function AppDocs() {
  const [activeKey, setActiveKey] = useState('reval');


  const downloadAF001 = () => {
    saveAs(`http://localhost:3001/accreditation/${'AF001-TRACKER FORM.docx'}`, 'AF001-TRACKER FORM.docx');
  }

  const downloadAD001 = () => {
    saveAs(`http://localhost:3001/accreditation/${'AD001-CERTIFICATE OF RECOGNITION.docx'}`, 'AD001-CERTIFICATE OF RECOGNITION.docx');
  }

  const downloadAD002 = () => {
    saveAs(`http://localhost:3001/accreditation/${'AD002-OFFICIAL LIST.docx'}`, 'AD002-OFFICIAL LIST OF OFFICERS AND ADVISERS.docx');
  }

  const downloadAD003 = () => {
    saveAs(`http://localhost:3001/accreditation/${'AD003-OFFICERS\' PROFILE.docx'}`, 'AD003-OFFICERS PROFILE.docx');
  }

  const downloadAD004 = () => {
    saveAs(`http://localhost:3001/accreditation/${'AD004-LETTER OF CONCURRENCE.docx'}`, 'AD004-ADVIER LETTER OF CONCURRENCE.docx');
  }

  const downloadAD005 = () => {
    saveAs(`http://localhost:3001/accreditation/${'AD005-CBL 101.docx'}`, 'AD005-CONSTITUTION AND BYLAWS.docx');
  }

  const downloadAD006 = () => {
    saveAs(`http://localhost:3001/accreditation/${'AD006-GPOA.docx'}`, 'AD006-GENERAL PLAN OF ACTIVITIES.docx');
  }

  const downloadAD007 = () => {
    saveAs(`http://localhost:3001/accreditation/${'AD007-ADVOCACY PLAN.docx'}`, 'AD007-ADVOCACY PLAN.docx');
  }

  const downloadAD009 = () => {
    saveAs(`http://localhost:3001/accreditation/${'AD009-WAIVER OF RESPONSIBILITY.docx'}`, 'AD009-WAIVER OF RESPONSIBILITY.docx');
  }

  const downloadRF001 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RF001-TRACKER FORM.docx'}`, 'RF001-TRACKER FORM.docx');
  }

  const downloadRD001 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD001-CERTIFICATE OF RECOGNITION.docx'}`, 'RD001-CERTIFICATE OF RECOGNITION.docx');
  }

  const downloadRD003 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD002-OFFICIAL LIST.docx'}`, 'RD003-OFFICIAL LIST OF OFFICERS AND ADVISERS.docx');
  }

  const downloadRD004 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD003-OFFICERS\' PROFILE.docx'}`, 'RD004-OFFICERS PROFILE.docx');
  }

  const downloadRD005 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD004-LETTER OF CONCURRENCE.docx'}`, 'RD005-ADVIER LETTER OF CONCURRENCE.docx');
  }

  const downloadRD006 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD005-CBL-TABLE-OF-AMENDMENTS.docx'}`, 'RD006-CONSTITUTION AND BYLAWS.docx');
  }

  const downloadRD007 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD006-GPOA.docx'}`, 'RD007-GENERAL PLAN OF ACTIVITIES.docx');
  }

  const downloadRD008 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD007-ADVOCACY PLAN.docx'}`, 'RD008-ADVOCACY PLAN.docx');
  }

  const downloadRD009 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD008-ACCOMPLISHMENT REPORT.docx'}`, 'RD009-ACCOMPLISHMENT REPORT.docx');
  }

  const downloadRD012 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD010-TURNOVER-OF-ASSETS-AND-FUNDS.docx'}`, 'RD010-FINANCIAL STATEMENTS.docx');
  }

  const downloadRD013 = () => {
    saveAs(`http://localhost:3001/revalidation/${'RD011-WAIVER OF RESPONSIBILITY.docx'}`, 'RD011-CERTIFICATE OF CLEARANCE.docx');
  }

  

  
  

  
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
          <Tab.Container defaultActiveKey="reval">
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
                      <th><a onClick={downloadAF001}>View</a></th>
                    </tr>
                    <tr>
                      <th>Certificate of Recognition from Central/Local Student Council</th>
                      <th>AD001</th>
                      <th><a onClick={downloadAD001}>View</a></th>
                    </tr>
                    <tr>
                      <th>Official List of Officers and Adviser(s) with signatures over printed names, and list of members <i>(at least 15 members including the officers/executives)</i></th>
                      <th>AD002</th>
                      <th><a onClick={downloadAD002}>View</a></th>
                    </tr>
                    <tr>
                      <th>Officers' Profile with 1st Semester Certificate of Registration <i>*alternatives, e.g., Confirmation Slip/Certificate of Enrollment</i></th>
                      <th>AD003</th>
                      <th><a onClick={downloadAD003}>View</a></th>
                    </tr>
                    <tr>
                      <th>Advier(s)'s Letter of Concurrence with scanned copy of their University-issued ID</th>
                      <th>AD004</th>
                      <th><a onClick={downloadAD004}>View</a></th>
                    </tr>
                    <tr>
                      <th>Student Organization's Constitution and Bylaws (CBL)</th>
                      <th>AD005</th>
                      <th><a onClick={downloadAD005}>View</a></th>
                    </tr>
                    <tr>
                      <th>General Plan of Activities with Budgetary Outlay</th>
                      <th>AD006</th>
                      <th><a onClick={downloadAD006}>View</a></th>
                    </tr>
                    <tr>
                      <th>Advocacy Plan</th>
                      <th>AD007</th>
                      <th><a onClick={downloadAD007}>View</a></th>
                    </tr>
                    <tr>
                      <th>Certificate of Clearance from PUP Student Council Commission on Audit (PUP SC COA)</th>
                      <th>AD008</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Waiver of Responsibility</th>
                      <th>AD009</th>
                      <th><a onClick={downloadAD009}>View</a></th>
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
                      <th><a onClick={downloadRD001}>View</a></th>
                    </tr>
                    <tr>
                      <th>Scanned Copy of the Latest Certificate of Accreditation/Revalidation</th>
                      <th>RD002</th>
                      <th><a href="#" target="_blank">View</a></th>
                    </tr>
                    <tr>
                      <th>Official List of Officers and Adviser(s) with signatures over printed names, and list of members</th>
                      <th>RD003</th>
                      <th><a onClick={downloadRD003}>View</a></th>
                    </tr>
                    <tr>
                      <th>Officers' Profile with 1st Semester Certificate of Registration <i>*alternatives, e.g., Confirmation Slip/Certificate of Enrollment</i></th>
                      <th>RD004</th>
                      <th><a onClick={downloadRD004}>View</a></th>
                    </tr>
                    <tr>
                      <th>Advier(s)'s Letter of Concurrence with scanned copy of their University-issued ID</th>
                      <th>RD005</th>
                      <th><a onClick={downloadRD005}>View</a></th>
                    </tr>
                    <tr>
                      <th>Student Organization's Constitution and Bylaws (CBL)</th>
                      <th>RD006</th>
                      <th><a onClick={downloadRD006}>View</a></th>
                    </tr>
                    <tr>
                      <th>General Plan of Activities with Budgetary Outlay</th>
                      <th>RD007</th>
                      <th><a onClick={downloadRD007}>View</a></th>
                    </tr>
                    <tr>
                      <th>Advocacy Plan</th>
                      <th>RD008</th>
                      <th><a onClick={downloadRD008}>View</a></th>
                    </tr>
                    <tr>
                      <th>Accomplishment Report</th>
                      <th>RD009</th>
                      <th><a onClick={downloadRD009}>View</a></th>
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
                      <th><a onClick={downloadRD012}>View</a></th>
                    </tr>
                    <tr>
                      <th>Waiver of Responsibility</th>
                      <th>RD013</th>
                      <th><a onClick={downloadRD013}>View</a></th>
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
