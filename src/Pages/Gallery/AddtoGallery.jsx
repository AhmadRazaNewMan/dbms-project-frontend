import React, { useState } from 'react';
import {addGallery} from '../../Services/Gallery_services/gallery'
import { LinearProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddtoGallery = () => {
  const [isLoading,setloading]=useState(false);
  const [formData, setFormData] = useState({
    Caption: '',
    Description: '',
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

  const handleSubmit =async (e) => {
    e.preventDefault();

   const newData=new FormData();
    newData.append('Caption',formData.Caption);
    newData.append('Description',formData.Description);
    newData.append('file',formData.file);
    try {
      setloading(true);
      const response = await addGallery(newData);
     if(response.success===true)
      toast("Gallery Added Succussfully!");
    
    } catch (error) {
      toast("Failed to add",error);

    }finally{
      setloading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-2">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl mb-4">Add Gallery</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="caption" className="block mb-2">Caption</label>
            <input
              type="text"
              id="caption"
              name="Caption"
              placeholder="Enter caption"
              value={formData.Caption}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">Description</label>
            <textarea
              id="description"
              name="Description"
              placeholder="Enter description"
              value={formData.Description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              rows={5}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block mb-2">Add Image</label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="mb-2 w-full py-2 px-4 bg-customGold text-white rounded-md hover:bg-black transition duration-200"
          >
            {isLoading ? "Adding Gallery..." : "Add Gallery"}
          </button>
          <LinearProgress style={{visibility: isLoading ? "visible" : "hidden"}} />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddtoGallery;
