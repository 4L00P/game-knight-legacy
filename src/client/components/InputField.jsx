import React from 'react';
import {
  InputLabel,
  Input,
  TextField,
} from '@mui/material';

function InputField({ objvalue, onChange, index, onBlur }) {
  const { label, value, helperText } = objvalue;
  return (
    <div className="input">
      <TextField
        label={label}
        id={label === 'Name' ? 'name' : `${label[0].toLowerCase()}${label.slice(1)}s`}
        value={value}
        variant="outlined"
        helperText={helperText}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default InputField;
