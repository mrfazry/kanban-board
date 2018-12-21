import React from "react";
import classnames from "classnames";

const InputText = ({ name, placeholder, value, type, onChange, error }) => {
  return (
    <div className="input-group mb-3">
      <input
        className={classnames("form-control form-control-md", {
          "is-invalid": error
        })}
        type={type}
        min="0"
        max="10000"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputText;
