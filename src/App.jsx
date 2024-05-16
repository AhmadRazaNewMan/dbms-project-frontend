import React from 'react'
import './index.css'
import Home from './Pages/Home/HomePage'
import MiniDrawer from './Pages/Home/Components/Dashboard/MiniDrawer'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'


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
