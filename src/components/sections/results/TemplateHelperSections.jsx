import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { allExtrasModifiersById, buffModifiers } from '../../../assets/modifierdata';
import { getSkills, getWeapons } from '../../../state/slices/buildPage';
import { WEAPONS } from '../../../utils/gw2-data';
import { getWeight } from '../../../utils/usefulFunctions';
import Section from '../../baseComponents/Section';
import ModalContent from './BuildShareModal/ModalContent';
import TemplateHelper from './TemplateHelper';

const indent = (str, amount) => str.replace(/^/gm, ' '.repeat(amount));
function idToWeapon(id) {
  return Object.values(WEAPONS).find((weapon) => weapon.gw2id === id)?.name;
}

const TemplateHelperSections = ({ character }) => {
  const { t } = useTranslation();
  const weapons = useSelector(getWeapons);
  const skills = useSelector(getSkills);

  const onClick = () => {
    const { attributes, gear, settings } = character;
    const { profession } = settings;
    const { buffs } = settings.cachedFormState.buffs;

    // Calculate extras
    const {
      Sigil1: sigil1,
      Sigil2: sigil2,
      Enhancement: utility,
      Nourishment: food,
      Runes: runeStringId,
    } = settings.extrasCombination;

    const foodId = allExtrasModifiersById[food]?.gw2id;
    const utilityId = allExtrasModifiersById[utility]?.gw2id;
    const sigil1Id = allExtrasModifiersById[sigil1]?.gw2id;
    const sigil2Id = allExtrasModifiersById[sigil2]?.gw2id;
    const rune = runeStringId ? allExtrasModifiersById[runeStringId] : '';
    const runeName = runeStringId ? rune.text.replace(/(Superior|Rune|of|the)/g, '').trim() : '';

    const { mainhand1: w11, offhand1: w12, mainhand2: w21, offhand2: w22 } = weapons;

    const weapData = {
      ...(w11 && { weapon1MainType: idToWeapon(w11) }),
      ...(w11 && { weapon1MainSigil1Id: sigil1Id }),
      ...(!w12 && { weapon1MainSigil2Id: sigil2Id }),
      ...(w12 && { weapon1OffType: idToWeapon(w12) }),
      ...(w12 && { weapon1OffSigilId: sigil2Id }),

      ...(w21 && { weapon2MainType: idToWeapon(w21) }),
      ...(w21 && { weapon2MainSigil1Id: sigil1Id }),
      ...(!w22 && { weapon2MainSigil2Id: sigil2Id }),

      ...(w22 && { weapon2OffType: idToWeapon(w22) }),
      ...(w22 && { weapon2OffSigilId: sigil2Id }),
    };

    const assumedBuffs = buffModifiers
      .flatMap((buff) => buff.items)
      .filter((buff) => buffs[buff.id])
      .map(({ id, gw2id, type }) => ({ id, gw2id, type }));

    const template = {
      profession,
      weight: getWeight(profession),
      gear,
      attributes,
      runeId: rune.gw2id,
      runeName,
      infusions: [...Array(18).fill(49432)],
      weapons: weapData,
      consumables: { foodId, utilityId },
      skills,
      assumedBuffs,
    };

    navigator.clipboard.writeText(
      `<Character ${indent(`gear={${JSON.stringify(template, null, 2)}}`)} />`,
    );
  };

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
                  <ModalContent
                    character={character}
                    buttons={[{ label: 'Copy Build to clipboard', onClick, icon: ContentCopyIcon }]}
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
