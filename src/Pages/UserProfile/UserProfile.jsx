import React from 'react'
import UserDashboard from './UserDashboard'
import {useState,useEffect} from 'react'
import {isLoggin} from '../../Services/User_Services/User'
import { useNavigate,Link ,useLocation} from 'react-router-dom'
import Unauth from '../UnAuthorized/Unauth'
function UserProfile() {
    const [isLogin, setIsLogin] = useState(true)
    const location = useLocation();
    const [path, setPath] = React.useState(location.pathname);
    const navigate=useNavigate();
    useEffect(() => {
        isLoggin().then((response) => {
            setPath(location.pathname);
            
            if(response.succuss===true){
                setIsLogin(true)
            }
            else{
                setIsLogin(true)
            }
        })
    }, [location.pathname])
  return (
    <div>
        {isLogin ? <UserDashboard path={path} /> : <Unauth/>}

        
        
         </div>
        
    
  )
}

export default UserProfile;