// lib
import { forwardRef } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Select = forwardRef(({ value, options, onChange, ...rest }, ref) => {
  return (
    <div className="relative inline-block w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-300/80 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:border-primary"
        ref={ref}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDownIcon className="h-4 w-4" />
      </div>
    </div>
  );
});

Select.displayName = "Select";

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default Select;
