import React from "react";

const Hero = () => {
  return (
    <div className="text-center flex justify-evenly items-center">
      <img src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg" className="md:w-[500px]  w-40 bg-gray-700" alt="" />
      <div className="text-gray-900 ">
      <h1 className="md:text-4xl text-base font-semibold">Quality Services at your Doorstep</h1>
      <h2 className="md:text-lg text-xs">On Demand, Professional and Easy to Use</h2>
      </div>
    </div>
  );
};

export default Hero;
