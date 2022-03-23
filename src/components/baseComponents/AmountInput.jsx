import { Autocomplete, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
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
            variant="standard"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment disablePointerEvents position="end" disableTypography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#b1b1b5' }}>{endLabel}</Typography>
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
      variant="standard"
      size="small"
      sx={{ height: 26 }}
      InputProps={{
        endAdornment: (
          <InputAdornment disablePointerEvents position="end" disableTypography>
            <Typography sx={{ fontSize: '0.8rem', color: '#b1b1b5' }}>{endLabel}</Typography>
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
