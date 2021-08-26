import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  divider: {
    height: 1,
    backgroundColor: theme.palette.divider,
    flexGrow: 1,
  },
  content: {
    ...theme.typography.h6,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontWeight: 400,
    color: theme.palette.text.primary,
    textTransform: 'uppercase',
    letterSpacing: 2,
    lineHeight: '1.35417em',
  },
});

const TextDivider = ({ classes, className, text, children }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.divider} />
    <div className={classes.content}>{text || children}</div>
    <div className={classes.divider} />
  </div>
);

export default withStyles(styles)(TextDivider);
