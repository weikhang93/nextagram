import React, { useState, useEffect } from "react"
import {CardBody, CardImg, CardTitle, Button, Container, Row, Col } from "reactstrap"
import UserImages from "../containers/UserImages";
import { Link } from 'react-router-dom';
import axios from "axios"
import LoadingIndicator from "../components/LoadingIndicator"

function HomePage(){
  const [ isLoading, setIsLoading ] = useState(true)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      setUsers(result.data)
      setIsLoading(false)
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }, [])

  if (isLoading) {
    return <LoadingIndicator width="150px" height="150px" color="blue" />
  }
  return (
    <>
      <Container fluid={true} className="p-0 m-0">
        {users.map(user => (
            <Row key={user.id} className="bg-light p-4 mx-0 my-5 rounded">
              <Col sm="2" className="mt-3">
                <CardImg top width="100%" src={user.profileImage} alt="profile image" className="rounded-circle img-thumbnail img-fluid"/>
                <CardBody className="text-center">
                  <CardTitle>{user.username}</CardTitle>
                  <Link to={`/users/${user.id}`}>
                    <Button color="primary" >See more</Button>
                  </Link>
                </CardBody>
              </Col>
              <Col sm="10">
                <UserImages userId={user.id}/>
              </Col>
            </Row>
        ))}
      </Container>
    </>
  )
}
export default HomePage;