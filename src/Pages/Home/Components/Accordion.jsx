import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Array of objects for accordion items
  const items = [
    {
      question: "What is Material Tailwind?",
      answer: "Material Tailwind is a UI component library built with Tailwind CSS."
    },
    {
      question: "How to use Material Tailwind?",
      answer: "To use Material Tailwind, simply import the components you need and start using them in your project."
    },
    // Add more objects for additional accordion items
  ];

  return (
    <div className='px-10'>
        <h1 className='text-white text-center text-3xl'>FAQ's </h1>
      {items.map((item, index) => (
        <div className="relative mb-3" key={index}>
          <h6 className="mb-0">
            <button
              className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`animated-collapse-${index}`}
            >
              <span className='text-white'>{item.question}</span>
              <i className={`absolute right-0 pt-1 text-orange-100 transition-transform fa fa-chevron-${activeIndex === index ?'up' :'down'}`}></i>
            </button>
          </h6>
          <div
            id={`animated-collapse-${index}`}
            className={`h-0 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'h-auto' : ''}`}
          >
            <div className="p-4 text-sm leading-normal text-white ">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
