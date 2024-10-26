import { Autocomplete, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import type { ParseFunction, WithRequired } from '../../utils/usefulFunctions';
import { parseAmount } from '../../utils/usefulFunctions';

interface AmountInputProps {
  className?: string;
  placeholder: number | string;
  label?: React.ReactNode;
  endLabel: React.ReactNode;
  handleAmountChange: React.ComponentProps<typeof TextField>['onChange'];
  value?: string;
  disabled?: boolean;
  maxWidth?: number;
  parseFn?: ParseFunction<unknown>;
}

export const AmountInput = ({
  className,
  placeholder,
  label,
  endLabel,
  handleAmountChange,
  value = '',
  disabled = false,
  maxWidth,
  parseFn = parseAmount,
}: AmountInputProps) => {
  const { error } = parseFn(value);

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
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment disablePointerEvents position="end" disableTypography>
              <Typography sx={{ fontSize: '0.9rem', color: '#b1b1b5' }}>{endLabel}</Typography>
            </InputAdornment>
          ),
          inputProps: { style: maxWidth ? { maxWidth } : undefined },
        },
      }}
      onChange={handleAmountChange}
      disabled={disabled}
    />
  );
};

interface AmountInputAutoProps {
  className?: string;
  label?: React.ReactNode;
  endLabel: React.ReactNode;
  handleAmountChange: React.ComponentProps<typeof Autocomplete>['onInputChange'];
  value?: string;
  maxWidth?: number;
  autoCompleteProps: WithRequired<Partial<React.ComponentProps<typeof Autocomplete>>, 'options'>;
  parseFn?: ParseFunction<unknown>;
}

export const AmountInputAuto = ({
  className,
  label,
  endLabel,
  handleAmountChange,
  value = '',
  maxWidth,
  autoCompleteProps,
  parseFn = parseAmount,
}: AmountInputAutoProps) => {
  const { error } = parseFn(value);

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
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <InputAdornment disablePointerEvents position="end" disableTypography>
                  <Typography sx={{ fontSize: '0.9rem', color: '#b1b1b5' }}>{endLabel}</Typography>
                </InputAdornment>
              ),
            },
          }}
          style={maxWidth ? { maxWidth } : undefined}
        />
      )}
      value={value}
      onInputChange={handleAmountChange}
      {...autoCompleteProps}
    />
  );
};
