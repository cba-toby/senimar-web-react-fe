import React from "react";

const SelectInput = ({ label, id, options, defaultOption, onChange }) => {
  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <div className="col-md-4">
          <select
            className="form-select"
            id={id}
            aria-label="State"
            onChange={onChange}
          >
            <option defaultChecked="">{defaultOption}</option>
            {options &&
              Array.isArray(options) &&
              options.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;