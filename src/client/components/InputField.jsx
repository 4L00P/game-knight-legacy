import React from 'react';
import { TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';

function InputField({
  objvalue,
  handleChange,
  formValues,
  handleAddClick,
  createDividedList,
}) {
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
          variant="outlined"
          size="small"
          id={collection}
          onClick={handleAddClick}
        >
          +
        </Button>
      )
      }
      {Array.isArray(formValues[collection])
        ? createDividedList(formValues[collection])
        : null}
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
  formValues: PropTypes.shape({
    guests: PropTypes.arrayOf(PropTypes.string),
    snacks: PropTypes.arrayOf(PropTypes.string),
    games: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddClick: PropTypes.func.isRequired,
  createDividedList: PropTypes.func.isRequired,
};

export default InputField;
