import React from 'react';
import { useLocation } from 'react-router-dom';

const SingleNotificationPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        <img 
          src={state.image} 
          alt={state.title} 
          className="w-full h-80 object-cover shadow-lg"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{state.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{state.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleNotificationPage;
