import React, { Fragment } from "react";

const Input = (props) => {
  let { name, displayName, type, value, changeHandler, placeholder } = props;
  return (
    <Fragment>
      <div className="form-group m-3">
        {displayName && <label htmlFor={name}>{displayName}</label>}
        <input
          type={type}
          className="form-control"
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => changeHandler(e, name)}
        />
      </div>
    </Fragment>
  );
};

export default Input;
