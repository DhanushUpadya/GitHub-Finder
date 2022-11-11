import React from 'react'
import { useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import GithubContext from '../contexts/github/GithubContext'



function User() {

    const {getUser, user} = useContext(GithubContext)

    const params = useParams()
    
    useEffect(()=>{
        getUser(params.login)
    },[])
  return (
    <div>
      {user.login}
      {user.company}
    </div>
  )
}

export default User
