import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

interface CheckboxComponentProps extends Partial<React.ComponentProps<typeof Checkbox>> {
  className?: string;
  label: React.ReactNode;
}

const CheckboxComponent = ({
  className,
  checked,
  value,
  label,
  onChange,
  ...rest
}: CheckboxComponentProps) => (
  <FormControlLabel
    className={className}
    control={
      <Checkbox color="primary" checked={checked} onChange={onChange} value={value} {...rest} />
    }
    label={label}
  />
);
export default CheckboxComponent;
