import React from 'react'
import Navbar from './Components/Navbar'
import MainImage from './Components/MainImage'
import PrincipalMessage from './Components/PrincipalMessage'
import TechnologyServices from './Components/TechnologyServices'
import Accordion from './Components/AccordionUsage'
import AccordionUsage from './Components/AccordionUsage'
import MiniDrawer from './Components/Dashboard/MiniDrawer'
const home = () => {
  return (
    <div>
   
        <Navbar/>
        <MainImage/>
        <PrincipalMessage/>
        <TechnologyServices/>
        <AccordionUsage/>
      
      
    </div>
  )
}

export default home
