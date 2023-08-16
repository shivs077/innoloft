// lib
import PropTypes from "prop-types";

const Button = ({ label = "Click", className, icon, disabled, ...rest }) => {
  return (
    <button
      className={`flex items-center gap-1 bg-primary border border-transparent text-white py-1 px-2.5 rounded-md hover:bg-white hover:text-primary hover:border hover:border-primary  ${
        disabled ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"
      } ${className}`}
      disabled={disabled}
      {...rest}
    >
      {icon}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
};

export default Button;
