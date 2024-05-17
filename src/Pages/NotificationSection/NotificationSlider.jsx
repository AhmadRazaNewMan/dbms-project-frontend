import React from 'react';
import ReactCardSlider from 'react-card-slider-component';
import { useNavigate } from 'react-router-dom';

const NotificationSlider = () => {
  const navigate = useNavigate();

  // Function to handle slide click and navigate to the notification page
  const handleSlideClick = (slide) => {
    navigate('/notification', { state: slide });
  };

  // Function to create slide objects to avoid repetition
  const createSlide = (title, description, image) => ({
    image,
    title,
    description,
    clickEvent: () => handleSlideClick({ title, description, image }),
  });

  // Array of slides
  const slides = [
    createSlide("Title 1", "Description 1", "https://picsum.photos/200/300?random=1"),
    createSlide("Title 2", "Description 2", "https://picsum.photos/200/300?random=2"),
    createSlide("Title 3", "Description 3", "https://picsum.photos/200/300?random=3"),
    createSlide("Title 4", "Description 4", "https://picsum.photos/200/300?random=4"),
    createSlide("Title 5", "Description 5", "https://picsum.photos/200/300?random=5"),
    createSlide("Title 6", "Description 6", "https://picsum.photos/200/300?random=6"),
    createSlide("Title 7", "Description 7", "https://picsum.photos/200/300?random=7"),

  ];

  return (
    <div className="container mx-auto px-4 py-8 rounded-lg shadow-md">
      <ReactCardSlider
        slides={slides}
        autoPlay={{ delay: 5000, duration: 500 }}
        transforms={[
          { from: 0, to: 1, scale: 0.8, opacity: 0.8 },
          { from: 0.5, to: 1.0, scale: 1, opacity: 1 },
        ]}
        
        transitionDuration={500} 
        containerStyle={{ height: '300px' }} 
      >
        {({ slideStyle, currentSlide }) => (
          <div className="slider-wrapper relative overflow-hidden">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              style={slideStyle}
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="slider-content absolute inset-0 flex flex-col justify-center items-center px-8 py-4 text-white bg-gray-900 bg-opacity-50">
              <h3 className="text-xl font-bold">{currentSlide.title}</h3>
              <p className="text-base">{currentSlide.description}</p>
              
            </div>
          </div>
        )}
      </ReactCardSlider>
    </div>
  );
};

export default NotificationSlider;
