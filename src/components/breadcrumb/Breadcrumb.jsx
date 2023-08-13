// lib
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex">
      <ol className="list-none flex items-center space-x-2">
        {items.map((item, index) => (
          <li className="flex items-center space-x-2" key={index}>
            {index !== 0 && <ChevronRightIcon className="w-[15px]" />}
            <Link to={item.url} className={`hover:underline text-[14px] ${index === items.length - 1 ? "font-medium" : ""}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.array,
};

export default Breadcrumb;
