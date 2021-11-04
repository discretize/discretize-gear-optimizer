import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  withStyles,
} from '@material-ui/core';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInfusion, getInfusions } from '../../../state/slices/infusions';
import { INFUSIONS } from '../../../utils/gw2-data';

const styles = (theme) => ({
  formControl: {
    width: 200,
    marginRight: theme.spacing(3),
  },
  formControl2: {
    width: 55,
  },
  item: { lineHeight: '1 !important' },
});

const Infusions = ({ classes }) => {
  const dispatch = useDispatch();
  const infusions = useSelector(getInfusions);
  const { t } = useTranslation();

  const dropdown = (name, varName, infusion) => {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={name}>{name}</InputLabel>
        <Select
          value={typeof infusion === 'undefined' ? '' : infusion.toString()}
          input={<Input name={name} id={name} />}
          onChange={(e) =>
            dispatch(
              changeInfusion({
                key: varName,
                value: e.target.value === '' ? '' : Number(e.target.value),
              }),
            )
          }
          renderValue={(value) => <Item id={value} disableLink className={classes.item} />}
        >
          <MenuItem value="">{t('None')} </MenuItem>
          {INFUSIONS.map((infu) => infu.id).map((id) => (
            <MenuItem value={id} key={id}>
              <Item id={id} disableLink />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const input = (name, varName, maxInfusions) => {
    return (
      <FormControl className={classes.formControl2}>
        <InputLabel htmlFor={`${varName}_input-with-icon-adornment`}>{name}</InputLabel>
        <Input
          id={`${varName}_input-with-icon-adornment`}
          value={maxInfusions}
          onChange={(e) => dispatch(changeInfusion({ key: varName, value: e.target.value }))}
        />
      </FormControl>
    );
  };

  return (
    <Grid container spacing={2} justifyContent="flex-start" direction="row" alignItems="center">
      <Grid item xs={12} sm={8}>
        {dropdown('Infusion Type #1', 'primaryInfusion', infusions.primaryInfusion)}
        {input('Max #', 'primaryMaxInfusions', infusions.primaryMaxInfusions)}
      </Grid>

      <Grid item xs={12} sm={8}>
        {dropdown('Infusion Type #2', 'secondaryInfusion', infusions.secondaryInfusion)}
        {input('Max #', 'secondaryMaxInfusions', infusions.secondaryMaxInfusions)}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Infusions);
