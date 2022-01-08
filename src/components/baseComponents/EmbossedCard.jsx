import classNames from 'classnames';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import withGw2Theme from '../../hocs/withGw2Theme';

const useStyles = makeStyles()((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  title: {
    position: 'relative',
    width: `calc(100% - ${theme.spacing(2)})`,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    ...theme.typography.h6,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.spacing(4)})`,
    },
  },
  content: {
    boxShadow: `${theme.shadows[2].replace(/\),/g, ') inset,')} inset`,
    backgroundColor: theme.palette.background.embossed,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    '& > *:last-child': {
      marginBottom: 0,
    },
  },
  contentWithTitle: {
    paddingTop: theme.spacing(5),
    marginTop: -theme.spacing(1) * 3,
  },
}));

const EmbossedCard = ({ className, title, specialization, children }) => {
  const { classes } = useStyles();
  return (
    <div className={classNames(classes.root, className)}>
      {(title || specialization) && <div className={classes.title}>{title || specialization}</div>}

      <div
        className={classNames(classes.content, {
          [classes.contentWithTitle]: !!title || !!specialization,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default withGw2Theme()(EmbossedCard);
