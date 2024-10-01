import { Autocomplete, InputAdornment, TextField, Typography } from '@mui/material';
import { parseAmount } from '../../utils/usefulFunctions';

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
}) => {
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
          inputProps: { style: maxWidth ? { maxWidth } : null },
        },
      }}
      onChange={handleAmountChange}
      disabled={disabled}
    />
  );
};

export const AmountInputAuto = ({
  className,
  label,
  endLabel,
  handleAmountChange,
  value = '',
  maxWidth,
  autoCompleteProps,
  parseFn = parseAmount,
}) => {
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
          style={maxWidth ? { maxWidth } : null}
        />
      )}
      value={value}
      onInputChange={handleAmountChange}
      {...autoCompleteProps}
    />
  );
};
