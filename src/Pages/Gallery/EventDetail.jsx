import React from 'react';
import { useParams } from 'react-router-dom';
import events from './event.json';

const EventDetail = () => {
  const { id } = useParams();
  const event = events[id];

  if (!event) {
    return <div className="container mx-auto p-4">Event not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={event.Images}
          alt={event["Event Title"]}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">{event["Event Title"]}</h1>
          <p className="text-lg mb-4">{event["Event Description"]}</p>
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

export default EventDetail;
