import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import userImage from "../../assets/user_default.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col lg:w-[256px] py-8 px-2">
      {/* User Profile */}
      <div className="flex items-center mb-4">
        <img className="w-12 h-12 lg:h-16 lg:w-16 rounded-full mr-4" src={userImage} alt="User Profile" />
        <div>
          <p className="text-lg font-medium">Sven Pietsch</p>
          <p className="text-[14px] font-light">Innoloft GmbH</p>
        </div>
      </div>

      {/* Navigation */}
      <ul className="space-y-3">
        <li className="flex items-end gap-3 py-2 hover:bg-slate-50">
          <HomeIcon className="w-[20px]" />
          <Link to={"/"} className="flex flex-1">
            <p className="font-light text-[17px] leading-[17px]">Home</p>
          </Link>
        </li>
        <li className="flex items-end gap-3 py-2 hover:bg-slate-50">
          <ShoppingBagIcon className="w-[20px]" />
          <Link to={"/product"} className="flex flex-1">
            <p className="font-light text-[17px] leading-[17px]">Product</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
