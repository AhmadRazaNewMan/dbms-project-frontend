import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import events from './event.json';

const UserGallerySection = () => {
  const navigate = useNavigate();
  const [visibleEvents, setVisibleEvents] = useState(8); // Start with 8 events

  const handleClick = (index) => {
    navigate(`/event/${index}`);
  };

  const handleShowMore = () => {
    setVisibleEvents(prevVisibleEvents => Math.min(prevVisibleEvents + 8, events.length));
  };

  const handleShowLess = () => {
    setVisibleEvents(prevVisibleEvents => Math.max(prevVisibleEvents - 8, 8));
  };

  return (
    <div className="container mx-auto p-8 bg-yellow-600">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Event Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {events.slice(0, visibleEvents).map((event, index) => (
          <div
            key={index}
            className="gallery-item relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleClick(index)}
          >
            <img
              src={event.Images}
              alt={event["Event Title"]}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 "
              loading="lazy"
            />
            <div className="gallery-item-overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-end p-4">
              <div className="text-center text-white w-full">
                <h2 className="text-xl font-semibold mb-2">{event["Event Title"]}</h2>
                <p className="text-sm mb-4">{event["Event Description"]}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 space-x-4">
        {visibleEvents < events.length && (
          <button
            onClick={handleShowMore}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
          >
            Show More
          </button>
        )}
        {visibleEvents > 8 && (
          <button
            onClick={handleShowLess}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default UserGallerySection;
