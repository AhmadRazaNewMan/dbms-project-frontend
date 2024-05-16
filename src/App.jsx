import React from 'react'
import './index.css'
<<<<<<< HEAD
import Home from "./Pages/Home/HomePage"
import MiniDrawer from "../src/Pages/Dashboard/MiniDrawer"
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

=======
import Home from './Pages/Home/HomePage'
import MiniDrawer from './Pages/Home/Components/Dashboard/MiniDrawer'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

import ContactForm from './Pages/ContactForm/ContactForm'
import LoginUser from './Pages/UserRegistration/LoginUser'
import RegisterUser from './Pages/UserRegistration/RegisterUser'

>>>>>>> bf07769f2c5238b3a054032127dfb6ca5c2ab555


function App() {
 
  return (

   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<MiniDrawer/>}/>
      </Routes>
   </Router>

<<<<<<< HEAD
   
   
     
    
=======


>>>>>>> bf07769f2c5238b3a054032127dfb6ca5c2ab555
  )
}

export default App