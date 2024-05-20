import React from 'react';
import { useNavigate } from 'react-router-dom';
import events from './event.json';

const UserGallerySection = () => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/event/${index}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="gallery-item relative group cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <img
              src={event.Images}
              alt={event["Event Title"]}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="gallery-item-overlay absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300">
              <div className="text-center text-white p-4">
                <h2 className="text-lg font-bold mb-2">{event["Event Title"]}</h2>
                <p className="text-sm">{event["Event Description"]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserGallerySection;
