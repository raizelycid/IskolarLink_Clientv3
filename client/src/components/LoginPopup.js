import {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';


function LoginPopup() {

    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

  return (
    <>
        <Button variant="primary" className="text-white ms-2 px-3 Inter" onClick={handleShowLogin}>
            Log In
        </Button>
    
        <Modal show={showLogin} onHide={handleCloseLogin} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default LoginPopup
