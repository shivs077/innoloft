// lib
import PropTypes from "prop-types";

const Spinner = ({ size = 16, fullscreen = true, color = "border-blue-500" }) => {
  let sizeClasses;

  switch (size) {
    case 14:
      sizeClasses = "h-14 w-14";
      break;
    case 12:
      sizeClasses = "h-12 w-12";
      break;
    case 10:
      sizeClasses = "h-10 w-10";
      break;
    case 8:
      sizeClasses = "h-8 w-8";
      break;
    case 6:
      sizeClasses = "h-6 w-6";
      break;
    case 4:
      sizeClasses = "h-4 w-4";
      break;
    case 2:
      sizeClasses = "h-2 w-2";
      break;
    default:
      sizeClasses = "h-16 w-16";
      break;
  }

  return (
    <div className={`flex justify-center items-center ${fullscreen ? "h-screen" : "h-full"}`}>
      <div className={`animate-spin rounded-full border-t-4 ${color} border-opacity-50 ${sizeClasses}`}></div>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
  fullscreen: PropTypes.bool,
  color: PropTypes.string,
};

export default Spinner;
