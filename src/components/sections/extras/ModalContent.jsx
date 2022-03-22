import { Item } from '@discretize/gw2-ui-new';
import {
  Checkbox,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { changeExtraIds, getExtrasIds } from '../../../state/slices/extras';
import Label from '../../baseComponents/Label';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  textfield: {
    minWidth: 550,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'unset',
    },
  },
}));

function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

function ModalContent(props) {
  const { type, modifierData, modifierDataById: data } = props;

  const { classes } = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const currentIds = useSelector(getExtrasIds)[type] || [];

  const [search, setSearch] = React.useState('');
  const searchRef = React.useRef();

  const grouped = React.useMemo(
    () =>
      groupBy(
        modifierData
          .flatMap(({ items }) => items.map((item) => item.id))
          .map((id) => ({ id, ...data[id] })),
        'section',
      ),
    [data, modifierData],
  );

  const handleCheckboxChange = (event) => {
    const ids = [...currentIds.filter((id) => id !== event.target.name || event.target.checked)];
    if (event.target.checked) {
      ids.push(event.target.name);
    }

    dispatch(changeExtraIds({ type, ids }));
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    document.onkeydown = function (e) {
      if (e.ctrlKey && e.code === 'KeyK') {
        searchRef.current.focus();
        e.preventDefault();
      }
    };

    return () => {
      document.onkeydown = undefined;
    };
  });

  return (
    <DialogContent dividers className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        fullWidth
        autoFocus
        className={classes.textfield}
        inputRef={searchRef}
        value={search}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Label>Ctrl+k</Label>
            </InputAdornment>
          ),
        }}
      />
      {Object.entries(grouped).map(([label, options]) => {
        const searched = options.filter(
          ({ text, gw2id }) =>
            text.toLowerCase().includes(search.toLowerCase()) || `${gw2id}`.includes(search),
        );

        if (searched.length === 0) return null;
        return (
          <div>
            <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
              <FormLabel component="legend">{label}</FormLabel>
              <FormGroup>
                {searched.map(({ id, gw2id, subText, text }) => (
                  <FormControlLabel
                    key={id}
                    control={
                      <Checkbox
                        name={id}
                        checked={currentIds.includes(id)}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label={
                      <>
                        <Item id={gw2id} disableLink text={text.replace('Superior ', '')} />
                        {subText && (
                          <Typography variant="caption" sx={{ marginLeft: 1, fontWeight: 200 }}>
                            {t('extraSubText', { context: subText })}
                          </Typography>
                        )}
                      </>
                    }
                  />
                ))}
              </FormGroup>
            </FormControl>
          </div>
        );
      })}
    </DialogContent>
  );
}

export default ModalContent;
