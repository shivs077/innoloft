// lib
import { useState, forwardRef } from "react";
import PropTypes from "prop-types";

const ChipsInput = forwardRef(({ value, onChange, ...rest }, ref) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Tab" || event.key === ",") {
      event.preventDefault();
      if (inputValue.trim()) {
        // setChips([...chips, inputValue.trim()]);
        onChange([...new Set([...value, inputValue.trim()])]);
        setInputValue("");
      }
    }
  };

  const handleRemoveChip = (chipIndex) => {
    const newChips = value.filter((_, index) => index !== chipIndex);
    onChange(newChips);
  };

  return (
    <div className="border border-gray-300/80 p-2 rounded-md focus-within:outline-none focus-within:border-primary">
      <div className="flex flex-wrap gap-2">
        {value.map((chip, index) => (
          <div key={index} className="bg-primary text-white p-2 rounded-md">
            {chip}
            <button className="ml-2" onClick={() => handleRemoveChip(index)}>
              &#10005;
            </button>
          </div>
        ))}
        <div className="visible flex-1 inline-flex">
          <input
            type="text"
            placeholder=""
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className="w-full min-w-2 m-0 outline-none border-none focus:border-none focus:outline-none p-1"
            ref={ref}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
});

ChipsInput.displayName = "ChipsInput";

ChipsInput.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
};

export default ChipsInput;
