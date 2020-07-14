import React, { useEffect, useState } from "react"
import axios from 'axios'
import LoadingIndicator from "../components/LoadingIndicator"

function UserImages(props){
  const { userId } = props
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([])

  useEffect(()=>{
    axios.get(`https://insta.nextacademy.com/api/v1/images/?userId=${userId}`)
      .then(result => {
        setImages(result.data)
        setLoading(false)
      })
      .catch(error => {
        console.log('ERROR: ', error)
    })
  }, [userId])

  if (loading) {
    return <LoadingIndicator width="100px" height="100px" color="red" />
  }

  return(
    <div className="d-flex flex-wrap">
      {
        images.map((image,index)=>{
          return (
            <div className='col-3 p-3 p-sm-0' key={`${userId}-images${index}`} >
              <img src={image} alt="user images" style={{objectFit:'cover'}} width="100%" height="250" className='p-1 mx-auto image-fluid'/>
            </div>
          )
        })
      }        
    </div>
  )
}
export default UserImages;