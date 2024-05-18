import React from 'react'
import './index.css'
import Home from "./Pages/Home/HomePage"
import MiniDrawer from "../src/Pages/Dashboard/MiniDrawer"
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import RegisterUser from './Pages/UserRegistration/RegisterUser'
import LoginUser from './Pages/UserRegistration/LoginUser'
import RecipeReviewCard from './Pages/CardsComponent/RecipeReviewCard'
import UserProfile from './Pages/UserProfile/UseProfile'

function App() {
  
 
  return (

   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<MiniDrawer/>}/>
        <Route path='card' element={<RecipeReviewCard/>}/>
        <Route path='signup' element={<RegisterUser/>}/>
        <Route path='login' element={<LoginUser/>}/>
        <Route path='profile' element={<UserProfile/>}/>
      </Routes>
   </Router>

   
   
     
    
  )
}

export default App
