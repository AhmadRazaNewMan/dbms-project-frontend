import React from "react";

const PrincipalMessage = () => {
  return (
    <div className="text-white ">
      <div className="w-full my-7 py-5  bg-yellow-600 rounded ">
        <h1 className="text-3xl text-center ">MESSAGE FROM THE CHARIMAN</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4 mx-4 md:mx-20">
        <div className="w-full md:w-1/2">
          <span className="block md:pr-4 text-lg shadow-xl">
           <span className="text-7xl "> “</span>Eleven years ago, ITU began as a specialized institute of higher
            education which centered around information technology, but now
            fields faculties in a broad range of disciplines that address many
            important issues and problems that we face today. In my decade-long
            association with the institution I have seen ITU go through
            different phases, but growing consistently and staying true to its
            vision. ITU fosters cross-disciplinary research, grounded in a
            culture of integrity and collaboration, with a sharp focus on
            providing real-world solutions. ITU has been able to stand out among
            Pakistani universities as one with a world-class faculty, who
            selflessly share their time, talent and knowledge with their
            students. They teach, mentor, and guide them while continuing
            breakthrough researches side by side. This prepares the students to
            become exceptionally well-qualified leaders and brilliant innovators
            in their desired fields. This is evident from the remarkable market
            They teach, mentor, and guide them while continuing
            breakthrough researches side by side. This prepares the students to
            become exceptionally well-qualified leaders and brilliant innovators
            in their desired fields. <br /> <span className="text-7xl">” </span>
          </span>
        </div>
        <div className="w-full md:w-1/2  shadow-xl">
          <img
            src="https://itu.edu.pk/wp-content/uploads/2023/03/IMG_1301-2A-Official.jpg"
            alt=""
            className="w-full rounded-"
          />
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
