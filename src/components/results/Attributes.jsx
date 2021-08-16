import { Grid, List, ListItem, withStyles } from '@material-ui/core';
import { Attribute, Profession } from 'gw2-ui-bulk';
import React from 'react';
import { useSelector } from 'react-redux';
import { getProfession } from '../../state/gearOptimizerSlice';
import { firstUppercase } from '../../utils/usefulFunctions';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
});

const Attributes = ({ classes, data }) => {
  const profession = useSelector(getProfession);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <List dense>
            <ListItem>
              <Attribute name="Power" text={data.Power} className={classes.gw2Item} />
            </ListItem>
            <ListItem>
              <Attribute name="Toughness" text={data.Toughness} className={classes.gw2Item} />
            </ListItem>
            <ListItem>
              <Attribute name="Vitality" text={data.Vitality} className={classes.gw2Item} />
            </ListItem>
            <ListItem>
              <Attribute name="Precision" text={data.Precision} className={classes.gw2Item} />
            </ListItem>
            <ListItem>
              <Attribute name="Ferocity" text={data.Ferocity} className={classes.gw2Item} />
            </ListItem>
            <ListItem>
              <Attribute
                name="Condition Damage"
                text={data['Condition Damage']}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem>
              <Attribute name="Expertise" text={data.Expertise} className={classes.gw2Item} />
            </ListItem>
            <ListItem>
              <Attribute
                name="Concentration"
                text={data.Concentration}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem>
              <Attribute
                name="Agony Resistance"
                text={data['Agony Resistance']}
                className={classes.gw2Item}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <List dense>
            <ListItem>
              <Profession name={firstUppercase(profession)} text={0} className={classes.gw2Item} />
            </ListItem>
            <ListItem>
              <Attribute name="Armor" text={data.Armor} className={classes.gw2Item} />
            </ListItem>
            <ListItem>
              <Attribute name="Health" text={data.Health} className={classes.gw2Item} />
            </ListItem>
            <ListItem>
              <Attribute
                name="Critical Chance"
                text={`${Math.round(data['Critical Chance'] * 100) / 100}%`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem>
              <Attribute
                name="Critical Damage"
                text={`${Math.round(data['Critical Damage'] * 10) / 10}%`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem>
              <Attribute
                name="Healing Power"
                text={data['Healing Power']}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem>
              <Attribute
                name="Condition Duration"
                text={`${Math.round(data['Condition Duration'] * 100) / 100}%`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem>
              <Attribute
                name="Boon Duration"
                text={`${Math.round(data['Boon Duration'] * 100) / 100}%`}
                className={classes.gw2Item}
              />
            </ListItem>
            <ListItem>
              <Attribute name="Magic Find" text={0} className={classes.gw2Item} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Attributes);
