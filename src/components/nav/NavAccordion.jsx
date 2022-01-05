import { Chip, makeStyles } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setBuildTemplate } from '../../state/slices/controlsSlice';
import Profession from '../baseComponents/Profession';

const useStyles = makeStyles((theme) => ({
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

export default function NavAccordion({
  data,
  buffPresets,
  prioritiesPresets,
  distributionPresets,
  extrasPresets,
  traitPresets,
}) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return data.map((prof) => (
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
          <div style={{ marginBottom: 8 }} key={`templateBuildMobile_${build.name}`}>
            <Chip
              variant="outlined"
              label={<Profession name={build.specialization} text={build.name} />}
              onClick={(e) => {
                dispatch({ type: 'CANCEL' });
                dispatch(
                  setBuildTemplate({
                    build,
                    specialization: build.specialization,
                    profession: prof.class,
                    buffPreset: JSON.parse(
                      buffPresets.find((pre) => pre.name === build.boons).value,
                    ),
                    distributionPreset: JSON.parse(
                      distributionPresets.find((pre) => pre.name === build.distribution)?.value ||
                        'null',
                    ),
                    prioritiesPreset: JSON.parse(
                      prioritiesPresets.find((pre) => pre.name === build.priority)?.value,
                    ),
                    extrasPreset: JSON.parse(
                      extrasPresets.find((pre) => pre.name === build.extras)?.value,
                    ),
                    traitsPreset: JSON.parse(
                      traitPresets.find((pre) => pre.name === build.traits)?.traits,
                    ),
                    skillsPreset: JSON.parse(
                      traitPresets.find((pre) => pre.name === build.traits)?.skills,
                    ),
                  }),
                );
              }}
            />
          </div>
        ))}
      </MuiAccordionDetails>
    </MuiAccordion>
  ));
}
