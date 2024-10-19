import { Profession } from '@discretize/gw2-ui-new';
import { Box, Chip } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import data from '../../utils/data';
import type { ProfessionName } from '../../utils/gw2-data';

const useStyles = makeStyles()((theme) => ({
  accordionRoot: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  accordionSummaryRoot: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  accordionSummaryContent: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  accordionDetailsRoot: {
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
}));

interface NavAccordionProps {
  handleTemplateSelect: (popup: null, selectedTemplate: string, profession: ProfessionName) => void;
}

export default function NavAccordion({ handleTemplateSelect }: NavAccordionProps) {
  const { classes } = useStyles();

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel: string) => (e: unknown, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : '');
  };

  return data.templates.list.map((prof) => (
    <MuiAccordion
      classes={{ root: classes.accordionRoot }}
      square
      expanded={expanded === prof.class}
      onChange={handleChange(prof.class)}
      key={`mobileTemplate_${prof.class}`}
    >
      <MuiAccordionSummary
        classes={{ root: classes.accordionSummaryRoot, content: classes.accordionSummaryContent }}
        aria-controls="panel1d-content"
        id="panel1d-header"
      >
        <Profession name={prof.class} disableLink style={{ fontSize: 20 }} />
      </MuiAccordionSummary>
      <MuiAccordionDetails classes={{ root: classes.accordionDetailsRoot }}>
        {prof.builds.map((build) => (
          <Box key={`templateBuildMobile_${build.name}`} sx={{ mb: 1 }}>
            <Chip
              variant="outlined"
              label={<Profession name={build.specialization} text={build.name} disableLink />}
              onClick={(e) => {
                handleTemplateSelect(null, build.name, prof.class);
              }}
            />
          </Box>
        ))}
      </MuiAccordionDetails>
    </MuiAccordion>
  ));
}
