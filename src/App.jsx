import React from 'react'
import './index.css'

import Home from "./Pages/Home/HomePage"
import MiniDrawer from "../src/Pages/Dashboard/MiniDrawer"
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import RegistractionPage from './Pages/UserRegistration/RegisterUser'
import LoginUser from './Pages/UserRegistration/LoginUser'




function App() {
 
  return (
<>
   {/* <Router> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<Home/>}/> */}
        {/* <Route path='dashboard' element={<MiniDrawer/>}/> */}
        {/* <Route path='register' element={<register/>}/> */}
      {/* </Routes> */}
   {/* </Router> */}
   {/* <RegistractionPage/> */}
   <LoginUser/>
   


   </>
   
     
    


  )
}

export default App