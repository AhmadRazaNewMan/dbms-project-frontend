import React from "react";
import Navbar from "./Components/Navbar";
import MainImage from "./Components/MainImage";
import PrincipalMessage from "./Components/PrincipalMessage";
import TechnologyServices from "./Components/TechnologyServices";
import Footer from "./Components/Footer";
import About from "../About/About";
import Programs from "../OurProgramm/Programs";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
  return (
    <div>
      <MainImage />
      
      <PrincipalMessage />
      <hr />
      <About />
      <hr />
      <div className="w-full py-6">

        <Programs />
        <hr className="text-2xl" />
      </div>
      <div className="w-full py-5">
        <h1 className="text-white text-center text-4xl p-3 font-semibold">Students Reviews</h1>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
