/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import './About.css'
// import about_img from '../../assets/about.png'
// import play_icon from '../../assets/play-icon.png'

const About = ({setPlaystate}) => {
  return (
    <div className='About'>

      <div className="about-left">
        <img src='https://media.gettyimages.com/id/1455506042/photo/winter-snow-on-grand-square-greenwich-university-december-2022.jpg?s=612x612&w=gi&k=20&c=r5wKH5zma4jTMFA-A9b9EtIkIxLs_8Ng7njE1ljx8L0=' alt="" className='about-png rounded-lg hover:scale-105 overflow-hidden transition duration-300 ease-in-out' />
        <img src='' alt="" className='play-icon' onClick={()=>
          {setPlaystate(true)}} />
      </div>


      <div className="about-right">
        <h3>UET Peshawar CS & IT Dept.</h3>
        <h2>Unleashing Potential: Explore the Frontier of Technology</h2>
        <p>The CS & IT department at UET Peshawar is dedicated to producing competent professionals equipped with the knowledge and skills required to meet the challenges of the rapidly evolving field of computer science and information technology. The department offers a range of undergraduate and postgraduate programs designed to cater to the diverse needs of students and the industry.</p>
      </div>
    </div>
  )
}

export default About