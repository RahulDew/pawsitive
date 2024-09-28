import React from "react";

const Dropdown = ({ options, value, onChange, label }) => {
  return (
    <div className="relative">
      <label className="font-semibold">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
