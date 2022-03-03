import { Tooltip } from '@discretize/gw2-ui-new';
import { HelpOutline } from '@mui/icons-material';
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
