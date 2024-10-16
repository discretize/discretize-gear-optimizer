import { Attribute, Item } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  FormControl,
  Grid2 as Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  addInfusionOption,
  changeAR,
  changeInfusionOptionCount,
  changeInfusionOptionType,
  changeMaxInfusions,
  changeOmnipotion,
  getAR,
  getInfusionOptions,
  getMaxInfusions,
  getOmniPotion,
} from '../../../state/slices/infusions';
import { getGameMode } from '../../../state/slices/userSettings';
import type { InfusionName } from '../../../utils/gw2-data';
import { INFUSION_IDS } from '../../../utils/gw2-data';
import { parseAr, parseInfusionCount } from '../../../utils/usefulFunctions';
import { AmountInputAuto } from '../../baseComponents/AmountInput';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import InfusionHelper from './InfusionHelper';

const arOptionLabels = {
  '150': '150',
  '162': '162',
  '203': '203 (DH Radiance)',
  '222': '222',
  '244': '244 (Soulbeast)',
  '245': '245 (Weaver)',
  '343': '343 (DH Virtues)',
};
const arOptions = Object.keys(arOptionLabels);

const useStyles = makeStyles()((theme) => ({
  formControl: {
    width: 200,
    marginRight: theme.spacing(3),
  },
  formControl2: {
    width: 80,
  },
}));

const amountInput = (
  label: string,
  id: string,
  onChange: React.ComponentProps<typeof Input>['onChange'],
  value: string,
  className?: string,
) => {
  const { error } = parseInfusionCount(value);
  return (
    <FormControl className={className} variant="standard">
      <InputLabel htmlFor={`${id}-amount-input`}>{label}</InputLabel>
      <Input
        id={`${id}-amount-input`}
        value={value}
        onChange={onChange}
        autoComplete="off"
        error={error}
      />
    </FormControl>
  );
};

const Infusions = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const ar = useSelector(getAR);
  const omnipotion = useSelector(getOmniPotion);

  const maxInfusions = useSelector(getMaxInfusions);
  const infusionOptions = useSelector(getInfusionOptions);

  const gameMode = useSelector(getGameMode);

  const handleARChange = React.useCallback(
    (e: any, value: string) => dispatch(changeAR(value)),
    [dispatch],
  );

  return (
    <Grid container spacing={4}>
      {gameMode === 'fractals' && (
        <Grid
          container
          size={12}
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'flex-start' }}
        >
          <Grid size={{ xs: 12, sm: 'grow' }}>
            <CheckboxComponent
              value={omnipotion}
              checked={omnipotion}
              label={
                <>
                  <Trans>Include </Trans>
                  <Item id={79722} disableLink />
                  <HelperIcon
                    text={t(
                      'Adds 150% of your Agony Resistance to Vitality, Toughness, and Concentration.',
                    )}
                  />
                </>
              }
              onChange={(e) => dispatch(changeOmnipotion(e.target.checked))}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 'grow' }}>
            <AmountInputAuto
              className={classes.formControl}
              parseFn={parseAr}
              handleAmountChange={handleARChange}
              label={t('Agony Resistance')}
              endLabel={<Attribute name="Agony Resistance" disableLink disableText />}
              autoCompleteProps={{
                options: arOptions,
                renderOption: (props, option) => (
                  <li {...props}>{(arOptionLabels as Record<string, string>)[option as string]}</li>
                ),
              }}
              value={ar}
            />
          </Grid>
        </Grid>
      )}
      <Grid
        container
        size={12}
        spacing={2}
        direction="row"
        sx={{ justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <Grid size={12}>
          {amountInput(
            '# Stat Infusions',
            'max-infusions',
            (e) => dispatch(changeMaxInfusions(e.target.value)),
            maxInfusions,
          )}
        </Grid>

        {infusionOptions.map(({ type, count }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid size={12} key={index}>
            <FormControl className={classes.formControl} variant="standard">
              <InputLabel
                htmlFor={`${index}-type-input`}
              >{`${t('Infusion Type #')}${index + 1}`}</InputLabel>
              <Select<InfusionName | ''>
                id={`${index}-type-input`}
                value={type}
                input={<Input />}
                onChange={(e) =>
                  dispatch(
                    changeInfusionOptionType({ index, type: e.target.value as InfusionName }),
                  )
                }
                renderValue={(value) => value && <Item id={INFUSION_IDS[value]} disableLink />}
              >
                <MenuItem value="">{t('None')} </MenuItem>
                {Object.entries(INFUSION_IDS)
                  .filter(
                    ([attribute]) =>
                      // currently selected in this slot
                      attribute === type ||
                      // not selected in any other slot
                      !infusionOptions.some((option) => option.type === attribute),
                  )
                  .map(([attribute, id]) => (
                    <MenuItem value={attribute} key={attribute}>
                      <Item id={id} disableLink />
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {amountInput(
              t('Max #'),
              `infusion-option-${index}`,
              (e) => dispatch(changeInfusionOptionCount({ index, count: e.target.value })),
              count,
              classes.formControl2,
            )}
          </Grid>
        ))}

        {infusionOptions.length < Object.keys(INFUSION_IDS).length && (
          <Button
            variant="text"
            startIcon={<AddIcon />}
            onClick={() => dispatch(addInfusionOption())}
          >
            {t('Add')}
          </Button>
        )}
      </Grid>

      {gameMode === 'fractals' && (
        <Grid size={12}>
          <InfusionHelper />
        </Grid>
      )}
    </Grid>
  );
};

export default Infusions;
