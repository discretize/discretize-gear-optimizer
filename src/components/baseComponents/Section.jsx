import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { getExpertMode } from '../../state/slices/userSettings';

const useStyles = makeStyles()((theme) => ({
  accordion: {
    marginBottom: 10,
    '&:hover': {
      boxShadow: theme.shadows[10],
    },
  },
}));

const SectionInfo = ({ title, children }) => {
  const { t } = useTranslation();
  const expert = useSelector(getExpertMode);
  const { classes } = useStyles();

  const [expandedClick, setExpandedClick] = React.useState(!expert);

  return (
    <>
      <Typography variant="h5">{title}</Typography>{' '}
      {children && (
        <Accordion
          expanded={expandedClick}
          className={classes.accordion}
          onClick={() => setExpandedClick(!expandedClick)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="help-content"
            id="help-header"
          >
            <LiveHelpIcon sx={{ marginRight: 1 }} /> <Typography>{t('Help')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption" sx={{ mb: 0 }}>
              {children}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

// first disables the delimiting line above!
const Section = ({ first, title, helpText, extraInfo, content }) => {
  return (
    <Grid container size={12} spacing={2} sx={{ mb: 2, borderColor: 'primary.main' }}>
      {!first && (
        <Grid size={12}>
          <Divider />
        </Grid>
      )}
      <Grid size={{ xs: 12, sm: 3 }}>
        <SectionInfo title={title}>{helpText}</SectionInfo>
        {extraInfo}
      </Grid>

      <Grid size={{ xs: 12, sm: 9 }}>{content}</Grid>
    </Grid>
  );
};

export default Section;
