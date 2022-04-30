import { Typography } from '@mui/material';
import React from 'react';
import { HelperIcon } from '@discretize/react-discretize-components';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  changePriority,
  getExclusionsEnabled,
  getPriority,
} from '../../../state/slices/priorities';
import AffixesSelect from '../../baseComponents/AffixesSelect';
import ExcludedSlots from '../forcedslots/ExcludedSlots';

export default function Affixes() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const affixes = useSelector(getPriority('affixes'));
  const exclusionsEnabled = useSelector(getExclusionsEnabled);

  return (
    <>
      <Typography fontWeight={800} mb={0.5}>
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
          dispatch(changePriority({ key: 'affixes', value: value.map((option) => option.label) }));
        }}
        value={affixes}
      />
      {exclusionsEnabled && <ExcludedSlots />}
    </>
  );
}
