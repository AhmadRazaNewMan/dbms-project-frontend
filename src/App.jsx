import React from 'react'
import './index.css'
import Home from './Pages/Home/HomePage'
<<<<<<< HEAD
import MiniDrawer from './Pages/Home/Components/Dashboard/MiniDrawer'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
=======
import ContactForm from './Pages/ContactForm/ContactForm'
import LoginUser from './Pages/UserRegistration/LoginUser'
import RegisterUser from './Pages/UserRegistration/RegisterUser'
>>>>>>> origin/main


function App() {
 
  return (
<<<<<<< HEAD
   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<MiniDrawer/>}/>
      </Routes>
   </Router>
=======
    <>
     {/* <Home/> */}
     {/* <ContactForm/> */}
     {/* <LoginUser/> */}
     <RegisterUser/>

      
   
     
    </>
>>>>>>> origin/main
  )
}

export default App
