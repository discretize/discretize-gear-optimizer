import { TextField, InputAdornment } from '@material-ui/core';
import React from 'react';

const TraitAmount = ({ traitData, handleAmountChange, value = '' }) => {
  const { amount } = traitData;

  const parsedValue = Number(value);
  const isError = Number.isNaN(parsedValue) || parsedValue < 0;

  return (
    <TextField
      error={isError}
      value={value}
      placeholder={amount.default}
      InputProps={{
        endAdornment: (
          <InputAdornment disablePointerEvents position="end">
            {amount.label}
          </InputAdornment>
        ),
        inputProps: { style: { width: '5ch' } }, // how 2 css, help
      }}
      onChange={handleAmountChange}
    />
  );
};

export default TraitAmount;
