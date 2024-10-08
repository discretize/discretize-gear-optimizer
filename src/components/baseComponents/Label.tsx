import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1,
    padding: `${theme.spacing(0.25)} ${theme.spacing(0.75)}`,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.secondary,
    display: 'inline-block',
    backgroundColor: theme.palette.background.embossed,
    boxShadow: theme.shadows[1],
  },
}));

interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

function Label({ className, children }: LabelProps) {
  const { classes, cx } = useStyles();
  return <span className={cx(classes.root, className)}>{children}</span>;
}

export default Label;
