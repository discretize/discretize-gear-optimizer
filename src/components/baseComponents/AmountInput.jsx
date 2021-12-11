import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { parseAmount } from '../../utils/usefulFunctions';

const AmountInput = ({
  className,
  placeholder,
  label,
  endLabel,
  handleAmountChange,
  value = '',
  disabled = false,
  maxWidth,
  useAutoComplete = false,
  autoCompleteProps,
  parseFn = parseAmount,
}) => {
  const { error } = parseFn(value);

  if (useAutoComplete) {
    return (
      <Autocomplete
        className={className}
        freeSolo
        disableClearable
        renderInput={(params) => (
          <TextField
            {...params}
            error={error}
            label={label}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment disablePointerEvents position="end">
                  {endLabel}
                </InputAdornment>
              ),
            }}
            style={maxWidth ? { maxWidth } : null}
          />
        )}
        value={value}
        onInputChange={handleAmountChange}
        {...autoCompleteProps}
      />
    );
  }

  return (
    <TextField
      className={className}
      error={error}
      value={value}
      placeholder={String(placeholder)}
      label={label}
      InputProps={{
        endAdornment: (
          <InputAdornment disablePointerEvents position="end">
            {endLabel}
          </InputAdornment>
        ),
        inputProps: { style: maxWidth ? { maxWidth } : null },
      }}
      onChange={handleAmountChange}
      disabled={disabled}
    />
  );
};

export default AmountInput;
