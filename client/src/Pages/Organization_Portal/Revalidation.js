import React, {useState,useEffect,useContext} from 'react'
import GenInfo from '../../components/Revalidation/GenInfo'
import RevForms1 from '../../components/Revalidation/RevForms1'
import RevForms2 from '../../components/Revalidation/RevForms2'
import RevFinish from '../../components/Revalidation/RevFinish'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Organization_Profile.css';
import { HeroVariant } from '../../components/HeroVariant/Hero';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {revalidationSchema} from '../../Validations/RevalidationValidation';
import ConfirmationDialog from '../../components/Revalidation/ConfirmationDialog';
import { Alert } from 'react-bootstrap';

function Revalidation() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        socn:'',
        orgName: '',
        jurisdiction: '',
        subjurisdiction: '',
        orgType: '',
        advisers: '',
        RD001: '',
        RD002: '',
        RD003: '',
        RD004: '',
        RD005: '',
        RD006: '',
        RD007: '',
        RD008: '',
        RD010: '',
        RD011: '',
        RF001: '',
        privacyPolicy: false,
    });

    const FormTitles = [ ]

    const [show1, setShow1] = useState('none');
    const [show2, setShow2] = useState('none');
    const [show3, setShow3] = useState('none');
    const [show4, setShow4] = useState('none');
    const [trackerForm, setTrackerForm] = useState('');
    const [waiverForm, setWaiverForm] = useState('');
    const [confirmation, setConfirmation] = useState(false);
    const [showAlert, setShowAlert] = useState(false);


    const generatePDF = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/appdocs/generate_RF001_temp`, formData).then((res) => {
                setTrackerForm(res.data.filename);});

            await axios.post(`${process.env.REACT_APP_BASE_URL}/appdocs/generate_RD011_temp`, formData).then((res) => {
                setWaiverForm(res.data.filename);});
        } catch (err) {
            console.log(err);
        }
    }

    const navigate = useNavigate();

    useEffect(() => {   
        axios.get(`${process.env.REACT_APP_BASE_URL}/student/accreditation_status`).then((response) => {
            if(response.data.error){
                alert(response.data.error);
            }
            else{
                if(response.data.status === true){
                    alert("You have already submitted an application. You will be redirected to the Accreditation Status Page.");
                    navigate('/organization/revalidation/status');
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

    useEffect(() => {
        if(confirmation){
            submitData();
            setConfirmation(false);
        }else{
            return;
        }
    }, [confirmation])

    const submitData = async () => {
        try {
            console.log(formData)
            const isValid = await revalidationSchema.isValid(formData);
            if(isValid){
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/org/revalidation`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }); 
            if(res.data.err){
                alert(res.data.err)
            }else{
                navigate('/organization/revalidation/status')
            }
        }else{
            setShowAlert(true)
        }
        } catch (err) {
            console.log(err);
        }
    }

    const showAlertPopup = () => {
        if(showAlert){
            return(
                <Alert variant='danger' onClose={() => setShowAlert(false)} dismissible>
                    <Alert.Heading>You have incomplete fields!</Alert.Heading>
                    <p>Please click the "Prev" button and check what fields you haven't filled yet.</p>
                </Alert>
            );
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
        {showAlert && showAlertPopup()}
        </div>
        <Container>
        <div className="d-flex justify-content-center form-footer">
            <button 
            disabled={page == 0}
            onClick={() => 
                setPage((currPage) => currPage - 1)}
            className="custom-button2 margin-right"
            >
            {`< Prev`}
            </button>
            {page == 3? <ConfirmationDialog confirmation={confirmation} setConfirmation={setConfirmation}/> :
            <button
            onClick={() => {
                    if(page === 0){generatePDF()}
                    setPage((currPage) => currPage + 1);
                }
            }
            className="custom-button margin-right"
            >
               Next &#8594;
            </button>
            }
        </div>
        </Container>
      
    </div>
    </>
  )
}
export default Revalidation
