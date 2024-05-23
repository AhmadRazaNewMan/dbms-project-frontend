import React from 'react';
import { useLocation } from 'react-router-dom';

const SingleNotificationPage = () => {
  const location = useLocation(); // Get the location object from react-router-dom
  const { state } = location; // Access the state object from the location

  if (!state || !state.notification) {
    return <div className="container mx-auto p-4">Event not found</div>;
  }

  const { notification } = state; // Extract the notification object from the state

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <a href={notification.ImageURL} target="_blank" rel="noopener noreferrer">
          <img
            src={notification.ImageURL}
            alt={notification["Event Title"]}
            className="w-full h-auto object-cover object-center cursor-pointer" // Make image clickable
          />
        </a>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">{notification.title}</h1>
          <p className="text-lg mb-4">{notification.Message}</p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleNotificationPage;
