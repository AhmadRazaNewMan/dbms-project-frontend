import React from "react";

const MainImage = () => {
  return (
    <div className="relative">
      <video className="" loop autoPlay muted>
        <source src="/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute w-full h-full top-0 left-0 text-black text-2xl flex justify-center  "
        style={{ background: "rgba(0,0,0,0.2)" }}
      >
        <div className="text-center mt-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
            Welcome to the Department of
          </p>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl">
            Computer Science and Information Technology
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl my-2">
            University of Engineering & Technology Peshawar
          </p>

          <div className="mt-7  ">
          <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Explore Our Programs</button>

          <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Schedule a Tour</button>


         
          
          
        </div>
        </div>
    
      </div>
    </div>
  );
};

export default MainImage;
