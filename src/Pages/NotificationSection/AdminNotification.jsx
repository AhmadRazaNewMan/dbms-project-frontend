import React, { useState } from 'react';

const AdminNotification = () => {
  const [formData, setFormData] = useState({
    title: '', // Renamed for clarity
    message: '',
    imageFile: null, // Added for image data
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'imageFile') {
      setFormData({ ...formData, imageFile: files[0] }); // Handle image selection
    } else {
      setFormData({ ...formData, [name]: value }); // Handle regular input changes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement form submission logic here
    // Access image data using formData.imageFile
    console.log('Form data:', formData);

    // Send data (title, message, and image) to your backend using an appropriate method
    // (e.g., fetch, Axios)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl mb-4">Add Notification</h2>
        <form onSubmit={handleSubmit}>
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
            <textarea // Use textarea for longer messages
              id="message"
              name="message"
              placeholder="Enter notification message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              rows={5} // Adjust rows as needed
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageFile" className="block mb-2">Add Image</label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              accept="image/*" // Restrict file types (optional)
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Create Notification
          </button>
        </form>
     
      </div>
    </div>
  );
};

export default AdminNotification;
