import React from "react";

import {
  Avatar,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";

const CheckboxComponent = ({ checked, value, label, onChange, ...rest }) => (
  <FormControlLabel
    control={
      <Checkbox color={"primary"} checked={checked} onChange={onChange} value={value} {...rest} />
    }
    label={label}
  />
);
export default CheckboxComponent;
