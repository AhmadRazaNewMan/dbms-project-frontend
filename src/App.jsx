import React from 'react'
import './index.css'
import Home from './Pages/Home/HomePage'
import MiniDrawer from './Pages/Home/Components/Dashboard/MiniDrawer'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

import ContactForm from './Pages/ContactForm/ContactForm'
import LoginUser from './Pages/UserRegistration/LoginUser'
import RegisterUser from './Pages/UserRegistration/RegisterUser'



function App() {
 
  return (

   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<MiniDrawer/>}/>
      </Routes>
   </Router>



  )
}

export default App