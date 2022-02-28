import { HomeIcon, ViewGridAddIcon, CalendarIcon, UserCircleIcon } from "@heroicons/react/solid";
const BottomNav = () => {
  return (
    <div className="flex justify-around fixed bg-white bottom-0 w-full">
      <div className="flex flex-col items-center justify-center cursor-pointer">
          <HomeIcon className="w-6 h-6  text-indigo-500"/>
          Home
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
          <ViewGridAddIcon className="w-6 h-6  text-indigo-500"/>
          Category
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
          <CalendarIcon className="w-6 h-6  text-indigo-500"/>
          Booking
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
          <UserCircleIcon className="w-6 h-6  text-indigo-500"/>
          Profile
      </div>
    </div>
  );
};

export default BottomNav;
