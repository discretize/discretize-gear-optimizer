import { TextDivider } from '@discretize/react-discretize-components';
import { Chip, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getProfession } from '../../../state/slices/controlsSlice';
import { changeExtras, copySigils, getExtrasCombinationCount } from '../../../state/slices/extras';
import data from '../../../utils/data';
import { SPECIALIZATIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Extras from './Extras';

const ExtrasSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const combinationCount = useSelector(getExtrasCombinationCount);

  let extrasPresets;
  if (profession) {
    const eliteSpecializations = SPECIALIZATIONS[profession];
    extrasPresets = data.presetExtras.list.filter((preset) => {
      return (
        !preset.profession ||
        preset.profession === profession ||
        eliteSpecializations.includes(preset.profession)
      );
    });
  }

  const onTemplateClickExtras = React.useCallback(
    (value) => {
      if (!value) return;

      const newExtras = JSON.parse(value.value);
      dispatch(changeExtras(newExtras));
    },
    [dispatch],
  );

  const onClickCopy = React.useCallback(() => dispatch(copySigils()), [dispatch]);

  return (
    <Section
      title={t('Runes & Sigils & Food')}
      content={<Extras />}
      helpText={t('Select multiple options if desired and every combination will be tested.')}
      extraInfo={
        <>
          {/* <FormControlLabel
            control={
              <Switch
                checked={false}
                onChange={(e) => dispatch(toggleAdvanced(e.target.checked))}
                name="checked"
                color="primary"
                disabled
              />
            }
            label={t('Enable custom mismatched sigils (todo)')}
          /> */}
          <Chip
            style={{ margin: 4 }}
            variant="outlined"
            onClick={onClickCopy}
            label={t('Copy selected sigils to both slots')}
          />
          {profession !== '' && (
            <Presets
              data={extrasPresets}
              handleClick={onTemplateClickExtras}
              presetCategory="extra"
            />
          )}
          <Grid sx={{ mt: 3 }}>
            <TextDivider text="Info" />
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              {combinationCount} selected combination{combinationCount > 1 ? 's' : ''}
            </Typography>
          </Grid>
        </>
      }
    />
  );
};

export default React.memo(ExtrasSection);
