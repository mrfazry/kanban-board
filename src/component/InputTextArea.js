import React from "react";
import classnames from "classnames";

const InputTextArea = ({ name, placeholder, value, error, onChange }) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control form-control-md", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputTextArea;
