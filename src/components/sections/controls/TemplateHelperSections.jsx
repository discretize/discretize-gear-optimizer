import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Section from '../../baseComponents/Section';
import CopyTemplateButton from './CopyTemplateButton';
import TemplateHelper from './TemplateHelper';

const TemplateHelperSections = ({
  character,
  otherData: { utilityId, foodId, sigil1Id, sigil2Id, infusions, weight, rune, runeName },
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Trans>Development</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Section
                title={t('Website Templates')}
                helpText={
                  <Trans>
                    Create templates for the discretize.eu website. Please check the
                    discretize-guides repo for more information.
                  </Trans>
                }
                content={
                  <CopyTemplateButton
                    extras={{ utilityId, foodId, sigil1Id, sigil2Id }}
                    data={character}
                    infusions={infusions}
                    weight={weight}
                    runeId={rune}
                    runeName={runeName}
                  />
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Section
                title={t('Optimizer Templates')}
                content={<TemplateHelper character={character} />}
                helpText={
                  <Trans>Create build templates that can be used for the gear optimizer.</Trans>
                }
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
export default React.memo(TemplateHelperSections);
