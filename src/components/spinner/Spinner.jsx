// lib
import PropTypes from "prop-types";

const Spinner = ({ size = 16, fullscreen = true, color = "blue-500" }) => {
  return (
    <div className={`flex justify-center items-center ${fullscreen ? "h-screen" : "h-full"}`}>
      <div className={`animate-spin rounded-full border-t-4 border-${color} border-opacity-50 h-${size} w-${size}`}></div>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
  fullscreen: PropTypes.bool,
  color: PropTypes.string,
};

export default Spinner;
