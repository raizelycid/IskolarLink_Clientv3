import {React, useContext, useEffect, useState} from 'react'
import { NavDropdown } from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../helpers/AuthContent'
import { useNavigate } from 'react-router-dom'

const MainMenu = ({imgSrc, username}) => {

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const {auth, menu} = useContext(AuthContext);
    const {authState, setAuthState} = auth;
    const {activeMenu, setActiveMenu} = menu;

    const [accreditationStatus, setAccreditationStatus] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:3001/student/accreditation_status').then((response) => {
            if(response.data.error){
                alert(response.data.error);
            }
            else{
                setAccreditationStatus(response.data.status);
            }
        });
    },[]);

    const changeMainMenu = () => {
        setActiveMenu('main');
        axios.post('http://localhost:3001/menu/', {menu: 'main'})
      }
    
      const changeCosoaMenu = () => {
        setActiveMenu('cosoa');
        axios.post('http://localhost:3001/menu/', {menu: 'cosoa'})
      }
    
      const changeWebAdminMenu = () => {
        setActiveMenu('webadmin');
        axios.post('http://localhost:3001/menu/', {menu: 'webadmin'})
      }

      const switchCosoa = (e) => {
        e.preventDefault();
        setActiveMenu('cosoa');
        changeCosoaMenu();
        navigate('/cosoa_home');
    }


    return(
    <NavDropdown title={<>{imgSrc ? <img src={`http://localhost:3001/images/${imgSrc}`} alt="Profile Picture" width="40" height="40" className="rounded-circle" /> : <FontAwesomeIcon icon={faUser}/>} <span className='text-dark'>Hi, {username}!</span></>} id="basic-nav-dropdown" className="text-dark" renderMenuOnMount={true}>
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        {accreditationStatus ? <NavDropdown.Item onClick={() => navigate('/accreditation_status')}> Accreditation Status</NavDropdown.Item> : <NavDropdown.Item onClick={() => navigate('/accreditation')}>Create an Organization</NavDropdown.Item>}
        {authState.is_cosoa && <NavDropdown.Item onClick={switchCosoa}>Switch to COSOA</NavDropdown.Item>}
        {authState.is_web_admin && <NavDropdown.Item href="/web_admin_home"  onClick={() => setActiveMenu('webadmin')}>Switch to Web Admin</NavDropdown.Item>}
        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => {
            axios.post('http://localhost:3001/auth/logout')
            .then((response) => {
                if(response.data.error){
                    alert(response.data.error);
                }
                else{
                    alert('User logged out!');
                    // set authState.status to false
                    setAuthState({...authState, status: false});
                    navigate('/');
                }
            });
        }}>Log Out</NavDropdown.Item>
    </NavDropdown>
)}

export default MainMenu
