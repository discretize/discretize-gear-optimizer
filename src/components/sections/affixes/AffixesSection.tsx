import { Box, Chip, FormControlLabel, Switch } from '@mui/material';
import type { PresetAffixesEntry } from 'data/presetdata';
import { presetAffixes } from 'data/presetdata';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAffixes,
  changeExclusion,
  changeExclusionsEnabled,
  changeExoticsEnabled,
  changePriorities,
  getAffixes,
  getExclusionsEnabled,
  getExoticsEnabled,
} from '../../../state/slices/priorities';
import { maxSlotsLength } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Affixes from './Affixes';

const AffixesSection = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const affixes = useSelector(getAffixes);
  const exclusionsEnabled = useSelector(getExclusionsEnabled);
  const exoticsEnabled = useSelector(getExoticsEnabled);

  const handleTemplateClickPriorities = React.useCallback(
    (value: PresetAffixesEntry) => dispatch(changePriorities(value.value)),
    [dispatch],
  );

  const handleRitualist = () => {
    dispatch(changeExclusionsEnabled(true));
    const backSlot = 11;
    const trinketSlots = [6, 7, 8, 9, 10];

    dispatch(changeAffixes(affixes.includes('Celestial') ? affixes : [...affixes, 'Celestial']));

    // exotic ritualist is usually better than cele;
    // this option disabled until exotics disable infusions correctly

    // dispatch(changeExoticsEnabled(true));

    for (let index = 0; index < maxSlotsLength; index++) {
      if (index === backSlot) {
        dispatch(changeExclusion({ affix: 'Ritualist', index, value: true }));
        dispatch(changeExclusion({ affix: 'Celestial', index, value: false }));
      } else if (trinketSlots.includes(index)) {
        // dispatch(changeExotic({ affix: 'Ritualist', index, value: trinketSlots.includes(index) }));
        dispatch(changeExclusion({ affix: 'Ritualist', index, value: true }));
        dispatch(changeExclusion({ affix: 'Celestial', index, value: false }));
      } else {
        dispatch(changeExclusion({ affix: 'Celestial', index, value: true }));
      }
    }
  };

  const chipStyle = {
    margin: 4,
  };

  return (
    <Section
      title={t('Affixes / Stat options')}
      helpText={
        <>
          <Trans>
            Select the affixes, or gear stat combinations, you want the optimizer to test. Keep in
            mind that optimizing more than 3 affixes may be prohibitively slow.
          </Trans>
          <Box component="span" sx={{ mt: 1, display: 'block' }} />
          <Trans>
            You can exclude any affix from any slot using the per-slot exclusion checkboxes. This is
            useful for affix/slot combinations like ritualist trinkets that are difficult to obtain.
          </Trans>
        </>
      }
      content={<Affixes />}
      extraInfo={
        <>
          <Presets
            data={presetAffixes.list}
            handleClick={handleTemplateClickPriorities}
            presetCategory="affix"
            maxChips={Infinity}
          />
          <FormControlLabel
            control={
              <Switch
                checked={exclusionsEnabled}
                onChange={(e) => dispatch(changeExclusionsEnabled(e.target.checked))}
                name="checked"
                color="primary"
              />
            }
            label={t('Show per-slot controls')}
          />
          {affixes.includes('Ritualist') ? (
            <Chip
              style={chipStyle}
              variant="outlined"
              onClick={handleRitualist}
              label={t('Auto-disable ritualist trinkets')}
            />
          ) : null}
          <FormControlLabel
            control={
              <Switch
                checked={exoticsEnabled}
                onChange={(e) => dispatch(changeExoticsEnabled(e.target.checked))}
                name="checked"
                color="primary"
              />
            }
            label={t('Show rarity controls')}
          />
        </>
      }
    />
  );
};
export default React.memo(AffixesSection);
