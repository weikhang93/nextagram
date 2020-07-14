import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"

const AuthModal = (props) => {
  const {
    className,setLoggedIn , loggedIn
  } = props;

  const [modal, setModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true)

  const toggle = () => setModal(!modal);
  const toggleForm = () => setShowLogin(!showLogin); // toggle between loginForm and signUpForm

  const logOut=()=>{
    setLoggedIn(false)
    // localStorage.setItem("jwt",null)
    localStorage.removeItem("jwt")
  }

  return (
    <>
      <p onClick={loggedIn? logOut : toggle} style={{cursor:'pointer',margin:0}}>{loggedIn?`Logout` : "Login"}</p>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {
          showLogin ?
          <LoginForm toggle={toggle} toggleForm={toggleForm} setLoggedIn={setLoggedIn}/>
          :
          <SignUpForm toggle={toggle} toggleForm={toggleForm}/>
        }
      </Modal>
    </>
  );
}

export default AuthModal;