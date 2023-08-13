// lib
import PropTypes from "prop-types";

const Button = ({ label = "Click", className, ...rest }) => {
  return (
    <button
      className={`bg-primary border border-transparent text-white py-1 px-2.5 rounded-md hover:bg-white hover:text-primary hover:border hover:border-primary ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
