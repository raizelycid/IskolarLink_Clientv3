import React, {useState,useEffect} from 'react'
import GenInfo from '../../components/Accreditation/GenInfo'
import AccForms1 from '../../components/Accreditation/AccForms1'
import AccForms2 from '../../components/Accreditation/AccForms2'
import AccFinish from '../../components/Accreditation/AccFinish'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Accreditation() {
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

    const FormTitles = [ 'Organization Information', 'Upload Documents', 'Tracker Form and Waiver', '']

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
                    navigate('/accreditation/status');
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
            await axios.post('http://localhost:3001/org/addorg', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then((res) => {
                if(res.data.error){
                    alert(res.data.error);
                }
                navigate(`/accreditation/status`)
            });
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <>
    <div className="bar">
    <div className="progressbar">
        <div
         style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}
        ></div>

        
    </div>
    </div>
    <div className="form-container">
        <div className="form-header">
            <h1 className="form-title">{FormTitles[page]}</h1>
        </div>
        <div className="form-body">
        <GenInfo formData={formData} setFormData={setFormData} show={show1}/>
        <AccForms1 formData={formData} setFormData={setFormData} show={show2}/>
        <AccForms2 formData={formData} setFormData={setFormData} show={show3} path={trackerForm} path2={waiverForm}/>
        <AccFinish show={show4}/>
        </div>
        <div className="form-footer">
            <button 
            disabled={page == 0}
            onClick={() => {
                setPage((currPage) => currPage - 1);
            }}
            className="form-button"
            >
                {`< Prev`}
            </button>
            <button
            onClick={() => {
                if(page === FormTitles.length - 1){
                    submitData();
                    alert("Form Submitted");
                } else {
                    if(page === 0){generatePDF()}
                    setPage((currPage) => currPage + 1);
                }
            }}
            className="form-button"
            >
                {page === FormTitles.length - 1 ? "Submit" : "Next >"}
            </button>
        </div>
      
    </div>
    </>
  )
}

export default Accreditation
