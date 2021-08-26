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
});

const SectionInfo = (props) => (
  <>
    <Typography variant="h5">{props.title}</Typography>
    {props.children && (
      <Typography variant="caption">
        <Paper variant="outlined">
          <Box p={1}>
            <LiveHelpIcon />
            <div>{props.children}</div>
          </Box>
        </Paper>
      </Typography>
    )}
  </>
);

/**
 * First disables the delimiting line above!
 */
const Section = React.memo(({ classes, first, title, helpText, extraInfo, content }) => (
  <Grid item container spacing={2} className={classes.containerItem}>
    {!first && (
      <Grid item xs={12}>
        <Divider />
      </Grid>
    )}
    <Grid item xs={12} sm={3}>
      <SectionInfo title={title} first={first}>
        {helpText}
      </SectionInfo>
      {extraInfo}
    </Grid>

    <Grid item xs={12} sm={9}>
      {content}
    </Grid>
  </Grid>
));

export default withStyles(styles)(Section);
