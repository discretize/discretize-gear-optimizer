import { HelperIcon } from '@discretize/react-discretize-components';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAffixes,
  getAffixes,
  getExclusionsEnabled,
  getExoticsEnabled,
} from '../../../state/slices/priorities';
import AffixesSelect from '../../baseComponents/AffixesSelect';
import Info from '../../baseComponents/Info';
import ExcludedSlots from '../forcedslots/ExcludedSlots';
import ExoticSlots from '../forcedslots/ExoticSlots';
import CustomAffix from './CustomAffix';

export default function Affixes() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const affixes = useSelector(getAffixes);
  const exclusionsEnabled = useSelector(getExclusionsEnabled);
  const exoticsEnabled = useSelector(getExoticsEnabled);

  const customSelected = affixes.includes('Custom');

  return (
    <Stack spacing={7}>
      <Box>
        <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
          {t('Desired Affixes')}{' '}
          <HelperIcon
            text={t(
              'Affixes (stats) you are interested in. The optimizer will try out every combination and return the best results. More than three affixes might take a long time.',
            )}
            size="small"
          />
        </Typography>
        <AffixesSelect
          multiple
          onChange={(event, value) => {
            dispatch(changeAffixes(value.map((option) => option.label)));
          }}
          value={affixes}
        />
      </Box>
      {exclusionsEnabled && (
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
            {t('Per-Slot Exclusions')}{' '}
            <HelperIcon
              text={t(
                'Allows you to exclude an affix from being chosen for any gear slot. Example: select the amulet/ritualist checkbox to prevent ritualist from being assigned to the amulet slot.',
              )}
              size="small"
            />
          </Typography>
          <ExcludedSlots />
        </Box>
      )}
      {exoticsEnabled && (
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
            {t('Use exotic rarity')}{' '}
            <HelperIcon
              text={t('Allows you to use exotic rarity instead of ascended for any gear slot.')}
              size="small"
            />
          </Typography>
          <ExoticSlots />
          <Info icon={<WarningAmberIcon />}>
            {t('Shared character links do not currently support exotic gear.')}
          </Info>
          <Info icon={<WarningAmberIcon />}>
            {t(
              'Exotic weapons are not simulated correctly because of their reduced weapon strength. Adjust the power coefficient a bit less than 5% lower for more accurate results.',
            )}
          </Info>
        </Box>
      )}
      {customSelected && (
        <Box>
          <Typography sx={{ fontWeight: 700 }}>
            {t('Custom Affix Data')}{' '}
            <HelperIcon
              text={t('Specify any attributes to simulate with the "custom" affix type.')}
              size="small"
            />
          </Typography>
          <CustomAffix />
        </Box>
      )}
    </Stack>
  );
}
