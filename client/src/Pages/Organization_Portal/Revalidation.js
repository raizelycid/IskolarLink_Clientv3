import React, {useState,useEffect} from 'react'
import GenInfo from '../../components/Revalidation/GenInfo'
import RevForms1 from '../../components/Revalidation/RevForms1'
import RevForms2 from '../../components/Revalidation/RevForms2'
import RevFinish from '../../components/Revalidation/RevFinish'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Organization_Profile.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Revalidation() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        orgName: '',
        jurisdiction: '',
        subjurisdiction: '',
        orgType: '',
        department: '',
        advisers: '',
        AD001: '',
        AD002: '',
        AD003: '',
        AD004: '',
        AD005: '',
        AD006: '',
        AD007: '',
        AD008: '',
        AF001: '',
        AD009: '',
        privacyPolicy: '',
    });

    const FormTitles = [ ]

    const [show1, setShow1] = useState('none');
    const [show2, setShow2] = useState('none');
    const [show3, setShow3] = useState('none');
    const [show4, setShow4] = useState('none');
    const [trackerForm, setTrackerForm] = useState('');
    const [waiverForm, setWaiverForm] = useState('');


    const generatePDF = async () => {
        try {
            await axios.post('http://localhost:3001/appdocs/generate_AF001_temp', formData).then((res) => {
                setTrackerForm(res.data.filename);});

            await axios.post('http://localhost:3001/appdocs/generate_AD009_temp', formData).then((res) => {
                setWaiverForm(res.data.filename);});
        } catch (err) {
            console.log(err);
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/student/accreditation_status').then((response) => {
            if(response.data.error){
                alert(response.data.error);
            }
            else{
                if(response.data.status === true){
                    alert("You have already submitted an application. You will be redirected to the Accreditation Status Page.");
                    navigate('/accreditation_status');
                }  
            }
        });
    },[]);
    useEffect(() => {
        if(page === 0){
            setShow1('block');
            setShow2('none');
            setShow3('none');
            setShow4('none');
        } else if(page === 1){
            setShow1('none');
            setShow2('block');
            setShow3('none');
            setShow4('none');
        } else if(page === 2){
            setShow1('none');
            setShow2('none');
            setShow3('block');
            setShow4('none');
        } else if(page === 3){
            setShow1('none');
            setShow2('none');
            setShow3('none');
            setShow4('block');
        }
    }, [page])

    const submitData = async () => {
        try {
            const res = await axios.post('http://localhost:3001/org/addorg', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }); 
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <>
        <div>
      <HeroVariant
        h1Text="Revalidation Form"
        pText="Fill up our Revalidation Form Page to kickstart your journey towards official recognition and support for your student organization.  "
      />
      <Container className='my-5'>
        <Row>
          <Col className="text-center">
            <h2>Complete the form below </h2>
            <p className='text-gray2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s, </p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="form-container">
        <div className="form-header">
            <h1 className="form-title">{FormTitles[page]}</h1>
        </div>
        <div className="form-body">
        <GenInfo formData={formData} setFormData={setFormData} show={show1}/>
        <RevForms1 formData={formData} setFormData={setFormData} show={show2}/>
        <RevForms2 formData={formData} setFormData={setFormData} show={show3} path={trackerForm} path2={waiverForm}/>
        <RevFinish show={show4}/>
        </div>
        <Container>
        <div className="d-flex justify-content-center form-footer">
            <button 
            disabled={page === 0}
            onClick={() => 
                setPage((currPage) => currPage - 1)}
            className="custom-button2 margin-right"
            >
            {`< Prev`}
            </button>
            <button
            onClick={() => {
                if (page == 3) {
                submitData();
                alert("Form Submitted");
                } else {
                if (page === 0) { generatePDF(); }
                setPage((currPage) => currPage + 1);
                }
            }}
            className="custom-button margin-right"
            >
            {page == 3? "Submit" : "Next >"}
            </button>
        </div>
        </Container>
      
    </div>
    </>
  )
}
export default Revalidation
