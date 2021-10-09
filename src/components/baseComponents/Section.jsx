import { Box, Divider, Grid, Paper, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

const styles = (theme) => ({
  root: {
    // adds padding on bigger (non smartphone) screens
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    fontSize: 18,
  },
  margin: {
    marginBottom: theme.spacing(2),
  },
  containerItem: {
    // borderBottom: `3px solid ${theme.palette.primary.dark}`,
    marginBottom: theme.spacing(2),
    // borderRadius: 20,
    borderColor: theme.palette.primary.main,
  },
  helpTextContainer: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
});

/**
 * First disables the delimiting line above!
 */
const Section = ({ classes, first, title, helpText, extraInfo, content }) => {
  const SectionInfo = ({ children }) => (
    <>
      <Typography variant="h5">{title}</Typography>
      {children && (
        <Paper className={classes.helpTextContainer}>
          <Box p={1}>
            <div>
              <LiveHelpIcon />
            </div>
            <Typography variant="caption">{children}</Typography>
          </Box>
        </Paper>
      )}
    </>
  );

  return (
    <Grid item container spacing={2} className={classes.containerItem}>
      {!first && (
        <Grid item xs={12}>
          <Divider />
        </Grid>
      )}
      <Grid item xs={12} sm={3}>
        <SectionInfo>{helpText}</SectionInfo>
        {extraInfo}
      </Grid>

      <Grid item xs={12} sm={9}>
        {content}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Section);
