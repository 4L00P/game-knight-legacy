import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid2';
import CalendarField from './CalendarField';

function InputField({
  objvalue,
  handleChange,
  formValues,
  setFormValues,
  handleAddClick,
  createDividedList,
  handleFinalClick,
  closeForm,
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
    <>
      <Grid size={4}>
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
      {label === 'Name'
        ? (
          <CalendarField
            formValues={formValues}
            setFormValues={setFormValues}
            handleFinalClick={handleFinalClick}
            closeForm={closeForm}
          />
        )
        : null}
    </>
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
  setFormValues: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddClick: PropTypes.func.isRequired,
  createDividedList: PropTypes.func.isRequired,
  handleFinalClick: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default InputField;
