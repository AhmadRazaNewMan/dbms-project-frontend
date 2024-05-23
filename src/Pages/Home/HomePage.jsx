import React from 'react'
import Navbar from './Components/Navbar'
import MainImage from './Components/MainImage'
import PrincipalMessage from './Components/PrincipalMessage'
import TechnologyServices from './Components/TechnologyServices'
import Footer from './Components/Footer'
import About from '../About/About'
import Programs from '../OurProgramm/Programs'
const Home = () => {
  return (
    <div>
   
        <Navbar/>
        <MainImage/>
        <PrincipalMessage/>
        <About/>
        <Programs/>
        <Footer/>
      
    </div>
  )
}

export default Home
