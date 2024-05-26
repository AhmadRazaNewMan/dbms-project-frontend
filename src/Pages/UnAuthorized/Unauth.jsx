import React from 'react'
import { Link } from 'react-router-dom'

function Unauth() {
  return (
    
        <div className='w-full  d-flex justify-cente  max-h-screen items-center p-10 '>
        <h1 className='text-center text-white py-10 text-2xl'>Please Login first ....</h1>
        <Link className='bg-orange-500  text-white font-bold text-center block mt-4 mx-auto px-6 py-2 w-fit rounded-lg' to='/login'>Login</Link>
         </div>
        
    
  )
}

export default Unauth