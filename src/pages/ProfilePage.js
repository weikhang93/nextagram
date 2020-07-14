import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserImages from "../containers/UserImages"
import axios from "axios"
import { Container } from "reactstrap"

const ProfilePage = () =>{
  const {userId} = useParams()
  const [user, setUser] = useState(null)

  useEffect(()=>{
    axios.get(`https://insta.nextacademy.com/api/v1/users/${userId}`)
      .then(result => {
        setUser(result.data)
      })
      .catch(error => {
        console.log('ERROR: ', error)
    })
  },[userId])
  return (
    <Container>
      {
        user ?
        <div className="text-center m-3">
          <img src={user.profileImage} alt={user.username} width="150" className="rounded-circle img-thumbnail img-fluid" />
          <h3>@ {user.username}</h3>
        </div>
        : null
      }
      <UserImages userId={userId} />
    </Container>
  )
}

export default ProfilePage