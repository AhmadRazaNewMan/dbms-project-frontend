import React, { useState } from 'react';
import LinearIndeterminate from './LinearIndeterminate';
import {RegesterUser} from '../../Services/User_Services/User'
const RegisterUser = () => {
const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const  handleSubmit = async(e) => {
    e.preventDefault();
   try {
    setIsLoading(true);
      const response = await RegesterUser(formData);
      if(response.succuss===true){
        alert("User Registered Successfully")     }
   } catch (error) {
      console.error('Error:', error);
      alert("Something went wrong!")
   }finally{
      setIsLoading(false);
   }
    
    
   
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">

        <h2 className="text-2xl mb-4">Register</h2>
        <form onSubmit={handleSubmit} method='POST'>

          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="Username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mb-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            {isLoading ? 'Loading...' : 'Register'}
          </button>
          {isLoading && <LinearIndeterminate/>}

        </form>
        <div className="mt-4 text-center">
          <p>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
