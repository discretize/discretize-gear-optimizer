import React from 'react';
import { FormControl, FormGroup, FormLabel, Grid, Typography, withStyles } from '@material-ui/core';
import { Boon, CommonEffect, Condition, Skill, Trait } from 'gw2-ui-bulk';
import { useDispatch, useSelector } from 'react-redux';
import { changeBuff, getBuffs } from '../../../state/slices/buffs';
import { firstUppercase } from '../../../utils/usefulFunctions';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';

const styles = (theme) => ({
  boon: {
    fontSize: 18,
  },
  note: {
    fontSize: '1rem',
  },
  tinyNote: {
    fontWeight: 200,
  },
});

const Buffs = ({ classes, data }) => {
  const dispatch = useDispatch();

  const buffs = useSelector(getBuffs);

  const handleChange = (buff) => (event) => {
    // change the value
    dispatch(changeBuff({ key: buff.id, value: event.target.checked }));
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
      {data.map((section) => (
        <Grid key={section.section} item xs={12} sm={6} md={4}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              <div dangerouslySetInnerHTML={{ __html: section.section }}></div>
            </FormLabel>
            <FormGroup>
              {section.items.map((buff) => {
                let Component, name;

                switch (buff.type) {
                  case 'Text':
                    return (
                      <CheckboxComponent
                        key={buff.id}
                        value={buff.id}
                        checked={buffs[buff.id]}
                        label={
                          <>
                            <Typography className={classes.note}>{buff.text}</Typography>
                            <Typography variant="caption" className={classes.tinyNote}>
                              {buff.subText}
                            </Typography>
                          </>
                        }
                        onChange={handleChange(buff)}
                      />
                    );
                  case 'Boon':
                  case 'Condition':
                  case 'CommonEffect':
                    name = buff.id.toLowerCase();
                    name = firstUppercase(name);
                  // eslint-disable-next-line no-fallthrough
                  default:
                    Component = components[buff.type];
                }

                return (
                  <CheckboxComponent
                    key={buff.id}
                    value={buff.id}
                    checked={buffs[buff.id]}
                    label={
                      <Component
                        id={buff.gw2_id}
                        name={name}
                        disableLink
                        className={classes.boon}
                      />
                    }
                    onChange={handleChange(buff)}
                  />
                );
              })}
            </FormGroup>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(Buffs);
