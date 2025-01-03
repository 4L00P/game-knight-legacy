import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid2';

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

  // Allow enter to add to list
  const handleEnter = (element) => {
    const { key } = element;
    if (key === 'Enter') {
      handleAddClick(element);
    }
  };

  return (
    <Grid
      size={label === 'Name' ? 12 : 4}
    >
      <Box>
        <TextField
          label={label}
          id={collection}
          value={value}
          variant="outlined"
          helperText={helperText}
          required={label === 'Name'}
          onChange={(element) => handleChange(element)}
          onKeyUp={handleEnter}
          autoFocus
        />
        {
        label === 'Name' ? null : (
          <Button
            variant="text"
            maxHeight={5}
            maxWidth={5}
            fontSize="small"
            id={collection}
            onClick={handleAddClick}
          >
            {`+ ${label}`}
          </Button>
        )
    }
        {Array.isArray(formValues[collection])
          ? createDividedList(formValues[collection], collection)
          : null}
      </Box>
    </Grid>
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
