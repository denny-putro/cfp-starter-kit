import React from "react";

const Input = ({
  id,
  label,
  defaultValue,
  disabled,
  className,
  onChange,
  onClick,
}) => {
  return (
    <div className={`input ${className}`} onClick={onClick}>
      <input
        id={id}
        type="text"
        placeholder=" "
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        className={disabled && !onClick ? "input-disabled" : ""}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;