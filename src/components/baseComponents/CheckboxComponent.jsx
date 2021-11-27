import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';

const CheckboxComponent = ({ className, checked, value, label, onChange, ...rest }) => (
  <FormControlLabel
    className={className}
    control={
      <Checkbox color="primary" checked={checked} onChange={onChange} value={value} {...rest} />
    }
    label={label}
  />
);
export default CheckboxComponent;
