import React from 'react'
import UserDashboard from './UserDashboard'
import {useState,useEffect} from 'react'
import {isLoggin} from '../../Services/User_Services/User'
import { useNavigate,Link ,useLocation} from 'react-router-dom'
import Unauth from '../UnAuthorized/Unauth'
function UserProfile() {
    const [isLogin, setIsLogin] = useState(false)
    const location = useLocation();
    const [path, setPath] = React.useState(location.pathname);
    const [user, setUser] = useState({})
    const navigate=useNavigate();
    useEffect(() => {
        isLoggin().then((response) => {
            setPath(location.pathname);            
            if(response.succuss==true){

                setIsLogin(true)
                setUser(response.user)
            }
            else{
                setIsLogin(false)
            }
        })
    }, [location.pathname])
  return (
    <div>
        {isLogin ? <UserDashboard path={path} User={user} /> : <Unauth/>}

        
        
         </div>
        
    
  )
}

export default UserProfile;