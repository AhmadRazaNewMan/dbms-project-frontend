import React from 'react'
import { Link } from 'react-router-dom'

function Unauth() {
  return (
    
        <div className='w-full h-full d-flex justify-center items-center p-10 '>
        <h2 className='text-center text-white'>Please Login first ....</h2>
        <Link className='bg-orange-500  text-white font-bold text-center block mt-4 mx-auto px-4 py-1 w-fit rounded-lg' to='/login'>Login</Link>
         </div>
        
    
  )
}

export default Unauth