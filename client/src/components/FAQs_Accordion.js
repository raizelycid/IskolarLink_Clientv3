import React from 'react';
import { Accordion } from 'react-bootstrap';
import './general.css';

const FAQs_Accordion = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Are part-time faculty members allowed to be advisers?</Accordion.Header>
            <Accordion.Body>
              According to the PUP SC COSOA MEMORANDUM NO. 12, SERIES OF 2023, the Office of the Student Services (OSS) stated for the Academic Year 2023-2024, advisership of an organization will only be limited to full-time faculty members of the University, while part-time faculty members may remain as co-advisers of the student organization.<br/>
              <a href="https://bit.ly/PUPSCCOSOA_Memorandum_12_S2023" target="_blank">View Document</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What will be the evaluation phases when checking applications?</Accordion.Header>
            <Accordion.Body>
              There are 4 phases:
              <ol>
                <li>Initial Evaluation 1 (IE1) - where the evaluators are the Deputy Heads and General Staff. Either lapses or without, the application proceeds to the next phase.</li>
                <li>Initial Evaluation 2 (IE2) - where the evaluators are the Committee on Document Management (CDM) Staff, Director for Internal Affairs (DIA) Staff, and Director for Application Evaluations (DAE) Staff. Either lapses or without, the application proceeds to the next phase.</li>
                <li>Final Evaluation 1 (FE1) - where the evaluators are the Vice Chairperson, Executive Director, Director for Application Evaluations, Director for Internal Affairs, and Asst. to the Vice Chairperson. If with lapses, an email will be sent containing the list of lapses found in the document/s. If there are no lapses, proceed to the next phase.</li>
                <li>Final Evaluation 2 (FE2) - where the evaluators are the Chairperson and Asst. to the Chairperson. If with lapses, the Office of the Chairperson sends out the final decision through an email. If there are no lapses, the application will be endorsed to the Office of the Student Services (OSS).</li>
              </ol>
              <a href="https://bit.ly/PUP-SC-COSOA_R10S2023" target="_blank">View Document for Accreditation</a><br/>
              <a href="https://tinyurl.com/PUP-SC-COSOA-R10S2023" target="_blank">View Document for Revalidation</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
  );
};

export default FAQs_Accordion;
