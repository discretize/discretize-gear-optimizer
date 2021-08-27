import { Chip } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { withStyles } from '@material-ui/core/styles';
import { Profession } from 'gw2-ui-bulk';
import React from 'react';
import { firstUppercase } from '../../utils/usefulFunctions';

const Accordion = withStyles({
  root: {
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
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
}))(MuiAccordionDetails);

export default function NavAccordion({ data }) {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return data.map((prof) => (
    <Accordion square expanded={expanded === prof.class} onChange={handleChange(prof.class)}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Profession name={firstUppercase(prof.class)} disableLink style={{ fontSize: 20 }} />
      </AccordionSummary>
      <AccordionDetails>
        {prof.builds.map((build) => (
          <div style={{ marginBottom: 8 }}>
            <Chip
              variant="outlined"
              label={<Profession eliteSpecialization={build.specialization} text={build.name} />}
            />
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  ));
}
