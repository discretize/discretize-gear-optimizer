import { Checkbox, FormControlLabel } from '@mui/material';

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
