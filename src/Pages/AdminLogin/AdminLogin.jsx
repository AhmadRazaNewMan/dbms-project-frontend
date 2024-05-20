import React, { useState } from 'react';
import {loginUser} from '../../Services/User_Services/User'
import {loginAdmin} from '../../Services/Admin_services/Admin'
import {useNavigate} from 'react-router-dom'
import LinearIndeterminate from '../UserRegistration/LinearIndeterminate';
const AdminLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    isLoading(true)
    try {
      const response = await loginAdmin(formData);
      if(!response.succuss===true){
        throw new Error(response.error);
      }
      alert("User Logged In Successfully")
      navigate('/profile')

    } catch (error) {
      console.error('Error:', error);
      alert("Something went wrong!")
      
    }finally {
        setIsLoading(false)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit} method='POST'>
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
            className="mb-1 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            {isLoading ? "Please wait... ": "Login"}
          </button>
          {isLoading && <LinearIndeterminate className=''/>}

        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
