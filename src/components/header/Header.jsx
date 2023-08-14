// lib
import { MagnifyingGlassIcon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// components
import logo from "../../assets/logo.svg";
import userImage from "../../assets/user_default.jpg";

const Header = () => {
  return (
    <div className="flex bg-primary p-4">
      <div className="flex items-center w-full mx-auto max-w-[1280px] relative">
        <div className="md:w-[200px] lg:w-[280px]">
          <Link to="/">
            <img src={logo} className="object-contain w-[140px]" />
          </Link>
        </div>
        <div className="flex justify-end md:justify-between flex-1">
          <div className="hidden md:flex bg-white px-2 rounded-[4px] md:w-[300px] lg:w-[450px] justify-between">
            <input
              placeholder="Enter interests, keywords, company name, etc."
              className="outline-none border-none text-[12px] text-[#374151] flex-1 h-[28px] placeholder-[#374151]"
            />
            <MagnifyingGlassIcon className="w-[20px] stroke-[#374151] rotate-90" />
          </div>
          <div className="flex gap-3 items-center text-white">
            <ChatBubbleOvalLeftEllipsisIcon className="hidden md:flex w-[22px]" />
            <div className="hidden md:flex items-center gap-1">
              <p>EN</p>
              <ChevronDownIcon className="w-[24px]" />
            </div>
            <BellIcon className="hidden md:flex w-[22px]" />
            <div className="hidden md:flex items-center gap-1">
              <img className="h-6 w-6 rounded-full" src={userImage} alt="User Profile" />
              <ChevronDownIcon className="w-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
