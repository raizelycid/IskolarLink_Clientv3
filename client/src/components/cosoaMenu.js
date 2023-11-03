import {React, useContext,useState} from 'react'
import { NavDropdown } from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../helpers/AuthContent'
import { useNavigate } from 'react-router-dom'

const CosoaMenu = ({imgSrc, username}) => {

    const {auth, menu} = useContext(AuthContext);
    const {authState, setAuthState} = auth;
    const {activeMenu, setActiveMenu} = menu;

    const navigate = useNavigate();

    const switchStudent = (e) => {
        e.preventDefault();
        setActiveMenu('main');
        navigate('/');
    }

    return(
    <NavDropdown title={<>{imgSrc ? <img src={`http://localhost:3001/images/${imgSrc}`} alt="Profile Picture" width="40" height="40" className="rounded-circle" /> : <FontAwesomeIcon icon={faUser}/>} <span className='text-dark'>Hi, {username}!</span></>} id="basic-nav-dropdown" className="text-dark" renderMenuOnMount={true}>
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={switchStudent}>Switch to Student</NavDropdown.Item>
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
                }
            });
        }}>Log Out</NavDropdown.Item>
    </NavDropdown>
)}

export default CosoaMenu
