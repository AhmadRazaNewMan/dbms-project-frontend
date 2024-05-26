import React, { useState } from 'react';
import { addNotification } from '../../Services/Notification/notification'; // Assuming `getNotifications` is not needed here
import { ToastContainer, toast } from 'react-toastify';
import { LinearProgress } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
const AdminNotification = () => {
  const [loading, setLoading] = useState(false); // Unused state variable [isLoading, setloading
  const [formData, setFormData] = useState({
    title: '',
    Message: '', // Use lowercase 'message' for consistency
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'file') {
      setFormData({ ...formData, file: files[0] }); // Handle image selection
    } else {
      setFormData({ ...formData, [name]: value }); // Handle regular input changes
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    const newData = new FormData(); // Use 'newData' for clarity
    newData.append('title', formData.title);
    newData.append('Message', formData.Message);
    newData.append('file', formData.file);

    try {
      setLoading(true);
      const response = await addNotification(newData);
      if (response.data.success===true) {
        toast("Notification Added Successfully!");
      }
      
    } catch (error) {
      toast("Failed to add! try again later.");
      
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl mb-4">Add Notification</h2>
        <form onSubmit={handleSubmit} enctype="multipart/form-data" >
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter notification title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="Message"
              placeholder="Enter notification message"
              value={formData.Message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              rows={5}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageFile" className="block mb-2">Add Image</label>
            <input
              type="file"
              id="imageFile"
              name="file"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="mb-2 w-full py-2 px-4 bg-customGold text-white rounded-md hover:bg-customGold transition duration-200"
          >
            {loading ? "Adding please wait..." : "Add Notification"}
          </button>
          {loading && <LinearProgress />}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminNotification;
