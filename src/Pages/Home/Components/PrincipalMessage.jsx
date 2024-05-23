import React from "react";

const PrincipalMessage = () => {
  return (
    <div className="text-white">
      <div className="w-full my-7 py-5 bg-yellow-600 rounded">
        <h1 className="text-3xl text-center">MESSAGE FROM THE CHAIRMAN</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4 mx-4 md:mx-20">
        <div className="w-full md:w-1/2">
          <span className="block md:pr-4 text-lg leading-relaxed shadow-xl">
            <span className="text-7xl">“</span>
            Welcome to the CS & IT Department at ITU. Our mission is to nurture
            innovative thinkers and problem solvers equipped with cutting-edge
            knowledge. Our dedicated faculty and state-of-the-art facilities
            provide a supportive environment for research and learning,
            preparing students to excel in the dynamic field of technology.
            Together, we strive to shape the future of computing and information
            technology.
            <br />
            <span className="text-7xl">”</span>
          </span>
        </div>
        <div className="w-full md:w-1/2 shadow-xl">
          <img
            src="https://itu.edu.pk/wp-content/uploads/2023/03/IMG_1301-2A-Official.jpg"
            alt="Chairman"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
