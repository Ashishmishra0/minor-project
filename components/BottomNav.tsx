import {
  HomeIcon,
  ViewGridAddIcon,
  CalendarIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
const BottomNav = () => {
  return (
    <div className="flex justify-around fixed bg-white bottom-0 w-full">
      <div className="flex flex-col items-center justify-center">
        <Link href="/">
          <HomeIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
        </Link>
        Home
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link href="/category">
          <ViewGridAddIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
        </Link>
        Category
      </div>
      <div className="flex flex-col items-center justify-center">
        <CalendarIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
        Booking
      </div>
      <div className="flex flex-col items-center justify-center">
        <UserCircleIcon className="w-6 h-6 cursor-pointer  text-indigo-500" />
        Profile
      </div>
    </div>
  );
};

export default BottomNav;
