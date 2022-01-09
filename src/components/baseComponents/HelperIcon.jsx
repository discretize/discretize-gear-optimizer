import { HelpOutline } from '@mui/icons-material';
import { Tooltip } from 'gw2-ui-bulk';
import React from 'react';

const HelperIcon = ({ text, size, fontSize }) => {
  return (
    <Tooltip content={text}>
      <span>
        <HelpOutline sx={{ color: 'primary.dark', fontSize }} fontSize={size} />
      </span>
    </Tooltip>
  );
};
export default HelperIcon;
