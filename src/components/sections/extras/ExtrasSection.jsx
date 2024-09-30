import { TextDivider } from '@discretize/react-discretize-components';
import InfoIcon from '@mui/icons-material/Info';
import {
  Box,
  Chip,
  FormControlLabel,
  InputAdornment,
  Link,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeJsHeuristicsEnabled,
  changeJsHeuristicsTarget,
  getJsHeuristicsEnabled,
  getJsHeuristicsTarget,
  getProfession,
} from '../../../state/slices/controlsSlice';
import {
  changeExtras,
  copySigils,
  getExtrasCombinationCount,
  getJsHeuristicsDefault,
  getParsedJsHeuristicsTarget,
} from '../../../state/slices/extras';
import data from '../../../utils/data';
import { SPECIALIZATIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Extras from './Extras';
import Info from '../../baseComponents/Info';

const ExtrasSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const combinationCount = useSelector(getExtrasCombinationCount);
  const jsHeuristicsEnabled = useSelector(getJsHeuristicsEnabled);
  const jsHeuristicsTarget = useSelector(getJsHeuristicsTarget);
  const jsHeuristicsDefault = useSelector(getJsHeuristicsDefault);
  const { error: jsHeuristicsTargetError } = useSelector(getParsedJsHeuristicsTarget);

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
          <Box sx={{ mt: 3, mx: 1, display: 'flex', flexDirection: 'column' }}>
            <TextDivider text="Combinations" />

            {jsHeuristicsEnabled ? (
              <TextField
                variant="standard"
                size="small"
                placeholder={String(Math.min(jsHeuristicsDefault, combinationCount))}
                label={t('Total to calculate')}
                slotProps={{
                  input: {
                    // used to always display the placeholder value instead of the label
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    startAdornment: <></>,
                    endAdornment: (
                      <InputAdornment disablePointerEvents position="end" disableTypography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#b1b1b5' }}>
                          / {combinationCount}
                        </Typography>
                      </InputAdornment>
                    ),
                  },
                }}
                value={jsHeuristicsTarget}
                error={jsHeuristicsTargetError}
                onChange={(event) => dispatch(changeJsHeuristicsTarget(event.target.value))}
              />
            ) : (
              <TextField
                variant="standard"
                size="small"
                label={t('Total to calculate')}
                slotProps={{
                  input: {
                    // must match above to fix weird animation on switch
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    startAdornment: <></>,
                  },
                }}
                disabled
                value={combinationCount}
                onChange={() => {}}
              />
            )}

            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={jsHeuristicsEnabled}
                  onChange={(e) => dispatch(changeJsHeuristicsEnabled(e.target.checked))}
                  name="checked"
                  color="primary"
                />
              }
              slotProps={{
                typography: {
                  variant: 'body2',
                  sx: { hyphens: 'auto' },
                },
              }}
              sx={{ mt: 2, mb: 1 }}
              label={t('Estimate best combinations')}
            />

            {jsHeuristicsEnabled && (
              <Info icon={<InfoIcon />}>
                {t('Estimation may be incompatible with per-slot controls.')}{' '}
                <Link
                  href="https://github.com/discretize/discretize-gear-optimizer/discussions/805"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Click here')}
                </Link>{' '}
                {t('for more information.')}
              </Info>
            )}
          </Box>
        </>
      }
    />
  );
};

export default React.memo(ExtrasSection);
