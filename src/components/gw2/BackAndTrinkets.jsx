import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { Item as ItemRaw } from 'gw2-ui-bulk';
import equal from 'react-fast-compare';
import { resolveBackAndTrinkets } from '../../utils/map-gw2-ids';

const Item = React.memo(ItemRaw, equal);

const styles = (theme) => ({
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    fontSize: '0.8125rem',
  },
  borderLeft: {
    borderLeft: '1px solid #1e2124',
  },
  borderBottom: {
    borderBottom: '1px solid #1e2124',
  },
  gw2Item: {
    fontSize: '60px',
    lineHeight: '0 !important',
  },
});

const Weapons = ({ classes, ...rest }) => {
  /* eslint-disable no-unused-vars */
  const {
    backItemId,
    backItemStatsId,
    backItemInfusion1Id,
    backItemInfusion2Id,
    backItemAffix,
    accessory1Id,
    accessory1StatsId,
    accessory1InfusionId,
    accessory1Affix,
    accessory2Id,
    accessory2StatsId,
    accessory2InfusionId,
    accessory2Affix,
    amuletId,
    amuletStatsId,
    amuletAffix,
    ring1Id,
    ring1StatsId,
    ring1Infusion1Id,
    ring1Infusion2Id,
    ring1Infusion3Id,
    ring1Affix,
    ring2Id,
    ring2StatsId,
    ring2Infusion1Id,
    ring2Infusion2Id,
    ring2Infusion3Id,
    ring2Affix,
  } = resolveBackAndTrinkets(rest);
  /* eslint-enable no-unused-vars */

  return (
    <Grid container spacing={3}>
      <Grid item xs={4} className={classNames(classes.gridItem, classes.borderBottom)}>
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {backItemAffix}
        </Typography>
        <Item
          id={backItemId}
          stat={backItemAffix}
          type="Back Item"
          //  statsId={backItemStatsId}
          upgrades={[backItemInfusion1Id, backItemInfusion2Id].filter((id) => id !== undefined)}
          disableText
          className={classes.gw2Item}
        />
      </Grid>

      <Grid
        item
        xs={4}
        className={classNames(classes.gridItem, classes.borderLeft, classes.borderBottom)}
      >
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {accessory1Affix}
        </Typography>
        <Item
          id={accessory1Id}
          stat={accessory1Affix}
          // statsId={accessory1StatsId}
          type="Accessory"
          upgrades={[accessory1InfusionId].filter((id) => id !== undefined)}
          disableText
          className={classes.gw2Item}
        />
      </Grid>

      <Grid item xs={4} className={classNames(classes.gridItem, classes.borderBottom)}>
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {accessory2Affix}
        </Typography>
        <Item
          id={accessory2Id}
          stat={accessory2Affix}
          // statsId={accessory2StatsId}
          type="Accessory"
          upgrades={[accessory2InfusionId].filter((id) => id !== undefined)}
          disableText
          className={classes.gw2Item}
        />
      </Grid>

      <Grid item xs={4} className={classes.gridItem}>
        <Item
          id={amuletId}
          stat={amuletAffix}
          // statsId={amuletStatsId}
          type="Amulet"
          disableText
          className={classes.gw2Item}
        />
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {amuletAffix}
        </Typography>
      </Grid>

      <Grid item xs={4} className={classNames(classes.gridItem, classes.borderLeft)}>
        <Item
          id={ring1Id}
          stat={ring1Affix}
          // statsId={ring1StatsId}
          upgrades={[ring1Infusion1Id, ring1Infusion2Id, ring1Infusion3Id].filter(
            (id) => id !== undefined,
          )}
          type="Ring"
          disableText
          className={classes.gw2Item}
        />
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {ring1Affix}
        </Typography>
      </Grid>

      <Grid item xs={4} className={classes.gridItem}>
        <Item
          id={ring2Id}
          stat={ring2Affix}
          // statsId={ring2StatsId}
          upgrades={[ring2Infusion1Id, ring2Infusion2Id, ring2Infusion3Id].filter(
            (id) => id !== undefined,
          )}
          type="Ring"
          disableText
          className={classes.gw2Item}
        />
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {ring2Affix}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Weapons);
