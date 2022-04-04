import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { getExpertMode } from '../../state/slices/controlsSlice';

const useStyles = makeStyles()((theme) => ({
  accordion: {
    marginBottom: 10,
    '&:hover': {
      boxShadow: theme.shadows[10],
    },
  },
}));

// first disables the delimiting line above!
const Section = ({ first, title, helpText, extraInfo, content }) => {
  const expert = useSelector(getExpertMode);
  const { classes } = useStyles();

  const [expandedHover, setExpandedHover] = React.useState(false);
  const [expandedClick, setExpandedClick] = React.useState(!expert);

  const SectionInfo = ({ children }) => (
    <>
      <Typography variant="h5">{title}</Typography>{' '}
      {children && (
        <Accordion
          expanded={expandedClick || expandedHover}
          className={classes.accordion}
          onMouseOver={() => setExpandedHover(true)}
          onMouseLeave={() => setExpandedHover(false)}
          onClick={() => setExpandedClick(!expandedClick)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="help-content"
            id="help-header"
          >
            <LiveHelpIcon sx={{ marginRight: 1 }} /> <Typography>Help</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption" paragraph sx={{ mb: 0 }}>
              {children}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );

  return (
    <Grid item container spacing={2} mb={2} sx={{ borderColor: 'primary.main' }}>
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

export default Section;
