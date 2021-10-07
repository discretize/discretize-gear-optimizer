import {
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Specialization, Trait, TraitLine } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleTraitModifier,
  changeTraitLine,
  changeTrait,
  getTraitLines,
  getTraitItems,
  getTraits,
  setTraitModiferAmount,
  getShowAllTraits,
} from '../../../state/slices/traits';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import TraitAmount from './TraitAmount';

const styles = (theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing(1),
  },
  item: { lineHeight: '1 !important' },
});

/**
 *
 * @param {String} profession   the profession for which to display trait lines
 * @param {Object} data         Contains all the data regarding modifiers, ids and extra subtexts
 * @returns
 */
const Traits = ({ classes, data }) => {
  const dispatch = useDispatch();

  // selected trait lines
  const traitlines = useSelector(getTraitLines);
  // 2D array: traits[n] is the n-th selected trait line. So the trait id in traitlines[i] has the selected values traits[i]
  const selectedTraits = useSelector(getTraits);
  // all the currently applied modifiers
  const items = useSelector(getTraitItems);

  const showAll = useSelector(getShowAllTraits);
  const hiddenCss = showAll ? { opacity: 0.5 } : { display: 'none' };

  /**
   * Handles a change from one traitline to another.
   */
  const handleTraitlineChange = (index) => (e) => {
    const newTraitLine = e.target.value;
    dispatch(changeTraitLine({ index, newTraitLine, data }));
  };

  /**
   * Handles a change from one trait to another within a traitline.
   *
   * @param e
   * @param id the gw2-id of the traitline that experienced a change
   * @param index the index of the traitline, that was changed (corresponds to id = traits[index])
   */
  const handleTraitChange = (index) => (e) => {
    const { tier, id: newTrait } = e;
    dispatch(changeTrait({ index, tier, newTrait }));
  };

  /**
   * Handles a modifer's checkbox being toggled on or off.
   *
   * Checkboxes which pop up for selected traits are necessary because some traits contain different conditional values.
   *
   * @param {Object} trait The trait object, that experienced a change
   * @param {Number} line the trait line, which the modifier corresponds to
   * @returns null
   */
  const handleCheckboxChange = (index, id) => (e) => {
    dispatch(toggleTraitModifier({ index, id, enabled: e.target.checked }));
  };

  const handleAmountChange = (index, id) => (e) => {
    // eslint-disable-next-line no-console
    console.log(`amount (index: ${index} id: ${id}) changed to ${e.target.value}`);

    dispatch(setTraitModiferAmount({ index, id, amount: e.target.value }));
  };

  return [1, 2, 3].map((lineNr, index) => {
    // hide checkboxes for minor traits without configuration or subtext
    const checkboxModis = [];
    const noCheckboxModis = [];
    items[index].forEach((item) => {
      if (item.data.minor && !item.data.subText && !item.data.amount) {
        noCheckboxModis.push(item);
      } else {
        checkboxModis.push(item);
      }
    });

    const key = `traitNr${lineNr}`;
    return (
      <React.Fragment key={key}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={key}>Traitline {lineNr}</InputLabel>
          <Select
            value={traitlines[index]}
            input={<Input name={`Traitline ${lineNr}`} id={key} />}
            onChange={handleTraitlineChange(index)}
            renderValue={(selected) => (
              <Specialization id={selected} disableLink className={classes.item} />
            )}
          >
            {data
              .map((line) => line.id)
              .filter(
                (tr) => !traitlines.includes(tr.toString()) || traitlines[index] === tr.toString(),
              )
              .map((id) => (
                <MenuItem key={id} value={id} className={classes.menuItem}>
                  <ListItemText primary={<Specialization id={id} disableLink />} />
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TraitLine
          id={traitlines[index]}
          selectable
          selected={selectedTraits[index]}
          onSelect={handleTraitChange(index)}
        />

        {noCheckboxModis.map((item) => (
          <div key={item.data.id}>
            <>
              {item.data.gw2id && <Trait id={item.data.gw2id} disableLink />}{' '}
              <Typography variant="caption">{item.data.subText}</Typography>
            </>
          </div>
        ))}

        {checkboxModis.map((item) => (
          <div key={item.data.id} style={item.visible ? {} : hiddenCss}>
            <CheckboxComponent
              value={item.data.id}
              checked={item.visible && item.enabled}
              label={
                <>
                  {item.data.gw2id && <Trait id={item.data.gw2id} disableLink />}{' '}
                  <Typography variant="caption">{item.data.subText}</Typography>
                </>
              }
              onChange={handleCheckboxChange(index, item.data.id)}
              disabled={!item.visible}
            />
            {item.data.amount ? (
              <>
                <br />
                <TraitAmount
                  traitData={item.data}
                  handleAmountChange={handleAmountChange(index, item.data.id)}
                  value={item.amount}
                  disabled={!item.visible}
                />
              </>
            ) : null}
          </div>
        ))}
      </React.Fragment>
    );
  });
};

export default withStyles(styles)(Traits);
