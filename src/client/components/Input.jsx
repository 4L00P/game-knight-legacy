import React from 'react';

function Input({ objValue, handleChange, index }) {
  const { label, type, value } = objValue;
  return (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <div className="input">
        <input
          type={type || 'text'}
          id={label}
          value={value || ''}
          onChange={(element) => handle(element, index)}
        />
      </div>
    </div>
  );
}

export default Input;
