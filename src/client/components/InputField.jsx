import React from 'react';
import {
  InputLabel,
  Input,
  TextField,
} from '@mui/material';

function InputField({ objvalue, onChange, index }) {
  const { label, type, value, helperText } = objvalue;
  return (
    <div className="input-group">
      <div className="input">
        <TextField
          type={type || 'text'}
          label={label}
          id={label}
          value={value || ''}
          variant="outlined"
          helperText={helperText}
          onChange={(element) => onChange(element, index)}
        />
      </div>
    </div>
  );
}

export default InputField;
