import React from 'react';
import TextField from '@mui/material/TextField';

function CustomTextField({ id, label, name, type, value, onChange, required, fullWidth }) {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default CustomTextField;
