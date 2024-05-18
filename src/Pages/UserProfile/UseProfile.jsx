import React from 'react'
import UserDashboard from './UserDashboard'
import {useState,useEffect} from 'react'
import {isLoggin} from '../../Services/User_Services/User'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
function UserProfile() {
    const [isLogin, setIsLogin] = useState(false)
    const navigate=useNavigate();
    useEffect(() => {
        isLoggin().then((response) => {
            console.log(response)
            if(response.succuss===true){
                setIsLogin(true)
            }else{
                setIsLogin(false)
            }
        })
    }, [])
  return (
    <div>
        {isLogin && <UserDashboard/>}
        <div className='d-flex'>
        <h2 className='text-center text-white'>Please Login first ....</h2>
            </div>
        
    </div>
  )
}

export default UserProfile;