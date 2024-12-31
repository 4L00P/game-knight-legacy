import React from "react";
import { InputLabel, Input, TextField, Button } from "@mui/material";

function InputField({ objvalue, handleChange, index, handleAddClick }) {
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

export default InputField;
