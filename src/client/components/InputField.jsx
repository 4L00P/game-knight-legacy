import React from 'react';
import { TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';

function InputField({ objvalue, handleChange, handleAddClick }) {
  const {
    label,
    value,
    collection,
    helperText,
  } = objvalue;
  return (
    <div className="input">
      <TextField
        label={label}
        id={collection}
        value={value}
        variant="outlined"
        helperText={helperText}
        onChange={(element) => handleChange(element)}
        autoFocus
      />
      {
      label === 'Name' ? null : (
        <Button
          id={collection}
          onClick={handleAddClick}
        >
          +
        </Button>
      )
      }
    </div>
  );
}

InputField.propTypes = {
  objvalue: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    collection: PropTypes.string,
    helperText: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddClick: PropTypes.func.isRequired,
};

export default InputField;
