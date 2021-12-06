import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import { parseAmount } from '../../utils/usefulFunctions';

const AmountInput = ({
  placeholder,
  label,
  handleAmountChange,
  value = '',
  disabled = false,
  maxWidth,
}) => {
  const { error } = parseAmount(value);

  return (
    <TextField
      error={error}
      value={value}
      placeholder={String(placeholder)}
      InputProps={{
        endAdornment: (
          <InputAdornment disablePointerEvents position="end">
            {label}
          </InputAdornment>
        ),
        inputProps: { style: { maxWidth: maxWidth || '32px' } },
      }}
      onChange={handleAmountChange}
      disabled={disabled}
    />
  );
};

export default AmountInput;
