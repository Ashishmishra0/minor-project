import React from "react";

const Services = () => {
  return (
    <div>
      <h1 className="font-semibold md:text-2xl text-lg pl-4 text-gray-50 py-3 mb-2 bg-gray-900">Categories</h1>
      <div className="grid grid-cols-3 mb-12 md:my-2  font-semibold justify-evenly items-center">
        <div className="flex flex-col items-center my-4 md:my-12 md:text-base text-sm text-center">
          <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-beauty-hygiene-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Beauty & Spa
        </div>
        <div className="flex flex-col items-center my-4 md:my-12 md:text-base text-sm text-center">
          <img
            src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-repair-customer-support-sbts2018-flat-sbts2018.png"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Appliance Repair
        </div>
        <div className="flex flex-col items-center my-4 md:my-12 md:text-base text-sm text-center">
          <img
            src="https://img.icons8.com/office/58/000000/broom.png"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Home Cleaning
        </div>
        <div className="flex flex-col items-center my-4 md:my-12 md:text-base text-sm text-center">
          <img
            src="https://img.icons8.com/cute-clipart/58/000000/wedding-day.png"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Wedding & Events
        </div>
        <div className="flex flex-col items-center my-4 md:my-12 md:text-base text-sm text-center">
          <img
            src="https://img.icons8.com/fluency/58/000000/easel.png"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Paints
        </div>
        <div className="flex flex-col items-center my-4 md:my-12 md:text-base text-sm text-center">
          <img
            src="https://img.icons8.com/flat-round/58/000000/insect--v1.png"
            className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
          />
          Pest Control
        </div>
        <div className="flex flex-col items-center my-4 md:my-12 md:text-base text-sm text-center">
        <img src="https://img.icons8.com/office/58/000000/truck.png" className="cursor-pointer w-8 h-8 md:w-16 md:h-16"/>
          Moving Homes
        </div>
        <div className="flex flex-col items-center my-4 md:my-12">
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/58/000000/external-plumber-labour-day-vitaliy-gorbachev-blue-vitaly-gorbachev.png" className="cursor-pointer w-8 h-8 md:w-16 md:h-16"/>
          Plumber
        </div>
        <div className="flex flex-col items-center my-4 md:my-12">
        <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-electrician-electrician-icongeek26-flat-icongeek26.png"
        className="cursor-pointer w-8 h-8 md:w-16 md:h-16"
        />
          Electrical
        </div>
      </div>
    </div>
  );
};

export default Services;
