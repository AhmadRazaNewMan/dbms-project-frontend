import React from 'react'
import './index.css'
import Home from "./Pages/Home/HomePage"
import MiniDrawer from "../src/Pages/Dashboard/MiniDrawer"
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import RecipeReviewCard from './Pages/CardsComponent/RecipeReviewCard'



function App() {
 
  return (

   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<MiniDrawer/>}/>
        <Route path='card' element={<RecipeReviewCard/>}/>
      </Routes>
   </Router>

   
   
     
    
  )
}

export default App
