import { Boon, CommonEffect, Condition, Skill, Trait } from '@discretize/gw2-ui-new';
import { firstUppercase } from '@discretize/react-discretize-components';
import { Box, FormControl, FormGroup, FormLabel, Grid2 as Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { buffModifiers } from '../../../assets/modifierdata';
import {
  changeBuff,
  changeBuffAmount,
  getBuffAmounts,
  getBuffs,
} from '../../../state/slices/buffs';
import { AmountInput } from '../../baseComponents/AmountInput';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';

const useStyles = makeStyles()((theme) => ({
  boon: {
    fontSize: 18,
  },
  note: {
    fontSize: '1rem',
  },
  hasSubText: {
    marginBottom: -4,
  },
  tinyNote: {
    fontWeight: 200,
  },
}));

const Buffs = () => {
  const { classes, cx } = useStyles();

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const buffs = useSelector(getBuffs);
  const amounts = useSelector(getBuffAmounts);

  const handleChange = (buff) => (event) => {
    // change the value
    dispatch(changeBuff({ key: buff.id, value: event.target.checked }));
  };

  const handleAmountChange = (buff) => (event) => {
    dispatch(changeBuffAmount({ key: buff.id, value: event.target.value }));
  };

  // Dynamic component creation for buffs from a string
  const components = {
    Boon,
    Trait,
    Skill,
    CommonEffect,
    Condition,
  };

  return (
    <Grid container spacing={4}>
      {buffModifiers.map((section) => (
        <Grid key={section.section} size={{ xs: 12, sm: 6, md: 4 }}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              {
                // i18next-extract-mark-context-next-line {{buffSection}}
                t('buffSection', { context: section.section })
              }
            </FormLabel>
            <FormGroup>
              {section.items.map((buff) => {
                const { type, text, id, gw2id, subText, amountData } = buff;

                const Component = components[type];
                const name = ['Boon', 'Condition', 'CommonEffect'].includes(type)
                  ? firstUppercase(id)
                  : undefined;

                const label =
                  type === 'Text' ? (
                    <>
                      <Typography
                        variant="body2"
                        component="div"
                        className={cx(classes.note, subText && classes.hasSubText)}
                      >
                        {
                          // i18next-extract-mark-context-next-line {{buffText}}
                          t('buffText', { context: text })
                        }
                      </Typography>
                      <Typography variant="caption" className={classes.tinyNote}>
                        {subText}
                      </Typography>
                    </>
                  ) : (
                    <Component id={gw2id} name={name} disableLink className={classes.boon} />
                  );

                return (
                  <Box key={id} sx={{ justifyContent: 'space-between', display: 'flex' }}>
                    <Box sx={{ display: 'flex' }}>
                      <CheckboxComponent
                        key={id}
                        value={id}
                        checked={Boolean(buffs[id])}
                        label={label}
                        onChange={handleChange(buff)}
                      />
                    </Box>
                    {amountData ? (
                      <Box sx={{ display: 'flex' }}>
                        <AmountInput
                          placeholder={amountData.default}
                          endLabel={amountData.label}
                          handleAmountChange={handleAmountChange(buff)}
                          value={amounts[id]}
                          disabled={!buffs[id]}
                          maxWidth={32}
                        />
                      </Box>
                    ) : null}
                  </Box>
                );
              })}
            </FormGroup>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default Buffs;
