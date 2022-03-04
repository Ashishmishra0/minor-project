import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import BottomNav from "../components/BottomNav";
const category = () => {
  return (
    <div>
      <div className="items-center flex bg-gray-900 p-2">
        <SearchIcon className="w-6 h-6 text-white cursor-pointer" />
        <input
          id="search"
          type="text"
          placeholder="Search for a service"
          className="ml-1 text-xs md:text-base px-2 py-1 rounded outline-none transition-all duration-200"
        />
      </div>
      <ul className="flex flex-col justify-start space-y-4 items-start font-semibold py-2 px-2">
        <li className="flex w-full justify-between">
            Beauty & Spa
            <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-beauty-hygiene-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
            className="cursor-pointer w-5 h-5 md:w-16 md:h-16"
          />
        </li>
        <li className="flex w-full justify-between">
            Applicance Repair
            <img
            src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-repair-customer-support-sbts2018-flat-sbts2018.png"
            className="cursor-pointer w-5 h-5 md:w-16 md:h-16"
          />
        </li>
        <li className="flex w-full justify-between">
            Home Cleaning
            <img
            src="https://img.icons8.com/office/58/000000/broom.png"
            className="cursor-pointer w-5 h-5 md:w-16 md:h-16"
          />
        </li>
        <li className="flex w-full justify-between">
            Wedding & Events
            <img
            src="https://img.icons8.com/cute-clipart/58/000000/wedding-day.png"
            className="cursor-pointer w-5 h-5 md:w-16 md:h-16"
          />
        </li>
        <li className="flex w-full justify-between">
            Paints
            <img
            src="https://img.icons8.com/fluency/58/000000/easel.png"
            className="cursor-pointer w-5 h-5 md:w-16 md:h-16"
          />
        </li>
        <li className="flex w-full justify-between">
            Pest Control
            <img
            src="https://img.icons8.com/flat-round/58/000000/insect--v1.png"
            className="cursor-pointer w-5 h-5 md:w-16 md:h-16"
          />
        </li>
        <li className="flex w-full justify-between">
            Moving Homes
            <img
            src="https://img.icons8.com/office/58/000000/truck.png"
            className="cursor-pointer w-5 h-5 md:w-16 md:h-16"
          />
        </li>
        <li className="flex w-full justify-between">
            Plumber
            <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/58/000000/external-plumber-labour-day-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
            className="cursor-pointer w-5 h-5 md:w-16 md:h-16"
          />
        </li>
        <li className="flex w-full justify-between">
            Electrician
            <img
            src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-electrician-electrician-icongeek26-flat-icongeek26.png"
            className="cursor-pointer w-5 h-5 md:w-16 md:h-16"
          />
        </li>
      </ul>
      <BottomNav />
    </div>
  );
};

export default category;
