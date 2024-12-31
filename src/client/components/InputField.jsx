import React from 'react';
import {
  InputLabel,
  Input,
  TextField,
} from '@mui/material';

function InputField({ objvalue, handleChange, index, onBlur }) {
  const { label, value, collection, helperText } = objvalue;
  return (
    <div className="input">
      <TextField
        label={label}
        id={collection}
        value={value}
        variant="outlined"
        helperText={helperText}
        onChange={(element) => handleChange(element)}
        onBlur={onBlur}
        autoFocus
      />
    </div>
  );
}

export default InputField;
