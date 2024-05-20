import React from 'react'
import Navbar from './Components/Navbar'
import MainImage from './Components/MainImage'
import PrincipalMessage from './Components/PrincipalMessage'
import TechnologyServices from './Components/TechnologyServices'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div>
   
        <Navbar/>
        <MainImage/>
        <PrincipalMessage/>
        {/* <TechnologyServices/> */}
        <Footer/>
      
    </div>
  )
}

export default Home
