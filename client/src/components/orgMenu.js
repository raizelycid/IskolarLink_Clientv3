import {React, useContext,useEffect} from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../helpers/AuthContent'
import { useNavigate } from 'react-router-dom'

function OrgMenu({imgSrc, username}) {

    const {auth, menu} = useContext(AuthContext);
    const {authState, setAuthState} = auth;
    const {activeMenu, setActiveMenu} = menu;

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    //use useEffect to set the ActiveMenu to org and the cookie to org
    useEffect(() => {
        setActiveMenu('org');
        axios.post('http://localhost:3001/menu/', {menu: 'org'})
    }, [])


  return (
    <NavDropdown title={<>{imgSrc ? <img src={`http://localhost:3001/org_images/${imgSrc}`} alt="Profile Picture" width="40" height="40" className="rounded-circle" /> : <FontAwesomeIcon icon={faUser}/>} <span className='text-dark'>Hi, {username}!</span></>} id="basic-nav-dropdown" className="text-dark" renderMenuOnMount={true}>
        <NavDropdown.Item onClick={()=>navigate('/organization/profile')}>Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/organization/members')}>Official Members</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/organization/membership')}>Memberships</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/organization/revalidation')}>Revalidation</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/organization/settings')}>Settings</NavDropdown.Item>
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
                    setActiveMenu('main');
                    navigate('/');
                }
            });
        }}>Log Out</NavDropdown.Item>
    </NavDropdown>
  )
}

export default OrgMenu
