import React, { useState } from "react"
import { Button, Form, FormGroup,Label,Input, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import axios from 'axios';
import {useHistory} from "react-router-dom"
const LoginForm = ({toggle, toggleForm,setLoggedIn}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleInput = (e)=>{
    if (e.target.name === "username"){
      setUsername(e.target.value)
    }
    if (e.target.name === "password"){
      setPassword(e.target.value)
    }
  }
  let history=useHistory()
  const handleLogin=(e)=>{
    e.preventDefault()
    
    axios({
      method: 'post',
      url: 'https://insta.nextacademy.com/api/v1/login',
      data: {
        username: username,
        password: password
      }
    })
    .then(result=>{
      console.log(result)
      localStorage.setItem("jwt",result.data.auth_token)
      toggle()
      setLoggedIn(true)
      alert("YOu have now logged into NEXTAGRAMAMAMAMAMA")
      

      history.push("/MyProfile")

    })


    
    
  
  
  
  
  
  
  }
  
  return (
    <>
      <ModalHeader toggle={toggle}>Login Form</ModalHeader>
      <ModalBody>
        <Form id="login-form" onSubmit={handleLogin}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleInput}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <input type="submit" className="btn btn-primary" form="login-form" disabled={!(username.length > 6 && password.length >= 8)} value="Login" />{' '}
        <Button color="warning" onClick={toggleForm}>Sign up now</Button>
      </ModalFooter>
    </>
  );
};
export default LoginForm