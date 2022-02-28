import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
const Navbar = () => {
  function showSearch() {
    const search = document.getElementById("search");
    search?.classList.toggle("hidden");
  }
  return (
    <>
      <nav className="flex bg-gray-800 p-4 justify-between items-center relative">
        <div className="flex flex-col md:flex-row md:space-x-2 font-semibold md:items-center justify-start">
          <h4 className="text-gray-50 text-sm md:text-base">You're in</h4>
          <input
            className="border px-1 py-0.5 md:rounded w-24 md:w-32 text-xs md:text-base text-black md:p-1 focus:outline-none"
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div className="md:block text-white text-xl font-light absolute left-[55%] md:left-[45%]">
          <span className="font-semibold">Anurag</span>Company
        </div>
        <div className="md:flex items-center mt-5 hidden md:mt-auto bg-white rounded md:p-1">
          <SearchIcon
            className="w-6 h-6 text-black cursor-pointer"
            onClick={showSearch}
          />
          <input
            id="search"
            type="text"
            placeholder="Search for a service"
            className="ml-1 text-xs md:text-base hidden w-10 md:w-full outline-none transition-all duration-200"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
