import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { getForcedSlots } from '../../../state/slices/forcedSlots';
import {
  changeAllExotic,
  changeExotic,
  getAffixes,
  getExclusionData,
  getExoticsData,
  getWeaponType,
} from '../../../state/slices/priorities';
import { GEAR_SLOTS, WeaponTypes } from '../../../utils/gw2-data';
import { pick } from '../../../utils/usefulFunctions';

const useStyles = makeStyles()((theme) => ({
  tableCollapse: {
    borderCollapse: 'collapse !important' as 'collapse',
    marginBottom: '0px !important',
  },
  checkbox: {
    padding: '6px',
  },
}));

const ExoticSlots = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const forcedSlots = useSelector(getForcedSlots);
  const excludedSlots = useSelector(getExclusionData);
  const dualWielded = useSelector(getWeaponType);
  const affixes = useSelector(getAffixes);
  const exoticsData = useSelector(getExoticsData);

  const exotics = pick(exoticsData, affixes);

  let SLOTS = GEAR_SLOTS;
  if (dualWielded !== WeaponTypes.dualWield) {
    SLOTS = GEAR_SLOTS.slice(0, 13);
  }

  const allExotics = Object.values(exotics).flat();
  const allExoticsChecked = allExotics.length > 0 && allExotics.every(Boolean);
  const someExoticsChecked = !allExoticsChecked && allExotics.some(Boolean);
  return (
    <TableContainer>
      <Table className={classes.tableCollapse}>
        <TableHead>
          <TableRow>
            <TableCell padding="none">
              <Checkbox
                size="small"
                classes={{ root: classes.checkbox }}
                checked={allExoticsChecked}
                indeterminate={someExoticsChecked}
                onChange={(event) => {
                  dispatch(changeAllExotic({ value: event.target.checked }));
                }}
              />
            </TableCell>
            {SLOTS.map(({ short }) => (
              <TableCell padding="none" key={`header ${short}`}>
                {short}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {affixes.map((affix) => (
            <TableRow key={affix}>
              <TableCell padding="none">{affix}</TableCell>
              {SLOTS.map(({ short }, index) => (
                <TableCell padding="none" sx={{ padding: 0.3 }} key={affix + short}>
                  <Checkbox
                    size="small"
                    classes={{ root: classes.checkbox }}
                    checked={Boolean(exotics?.[affix]?.[index])}
                    disabled={Boolean(forcedSlots[index]) || excludedSlots?.[affix]?.[index]}
                    onChange={(event) => {
                      dispatch(changeExotic({ index, affix, value: event.target.checked }));
                    }}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ExoticSlots;
