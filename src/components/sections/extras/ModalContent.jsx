import { Coin, Item } from '@discretize/gw2-ui-new';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import {
  Box,
  Button,
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
  toggleAllLabel: {
    marginLeft: theme.spacing(0.5),
  },
}));

function groupBy(xs, key) {
  // eslint-disable-next-line id-length
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

function ModalContent(props) {
  const { type, modifierData, modifierDataById: data, priceData } = props;

  const { classes } = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const filteredItems = Object.entries(grouped).map(([label, options]) => {
    const searched = options.filter(
      ({ text, gw2id }) =>
        // text.toLowerCase().includes(search.toLowerCase()) || `${gw2id}`.includes(search),
        true,
    );
    return [label, searched];
  });

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

  const selectAllVisible = React.useCallback(() => {
    const tmp = filteredItems.flatMap((array) => array[1]).map(({ id }) => id);
    dispatch(changeExtraIds({ type, ids: [...currentIds, ...tmp] }));
  }, [filteredItems, dispatch, currentIds, type]);

  const unselectAllVisible = React.useCallback(() => {
    const tmp = filteredItems.flatMap((array) => array[1]).map(({ id }) => id);
    const filtered = currentIds.filter((id) => !tmp.includes(id));
    dispatch(changeExtraIds({ type, ids: filtered }));
  }, [filteredItems, currentIds, dispatch, type]);

  React.useEffect(() => {
    function handleKeyEvent(e) {
      if (e.ctrlKey && e.code === 'KeyK') {
        searchRef.current.focus();
        e.preventDefault();
      }
      if (e.ctrlKey && e.code === 'KeyS') {
        selectAllVisible();
        e.preventDefault();
      }
      if (e.ctrlKey && e.code === 'KeyD') {
        unselectAllVisible();
        e.preventDefault();
      }
    }
    document.addEventListener('keydown', handleKeyEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyEvent);
    };
  }, [dispatch, selectAllVisible, unselectAllVisible]);

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
              <Label>{t('Ctrl+k')}</Label>
            </InputAdornment>
          ),
        }}
      />
      <Box display="flex">
        <Box flexGrow={1} />
        <Button
          sx={{ textTransform: 'unset' }}
          startIcon={<SelectAllIcon />}
          onClick={unselectAllVisible}
        >
          {t('Delete visible')} <Label className={classes.toggleAllLabel}>{t('Ctrl+d')}</Label>
        </Button>
        <Button
          sx={{ textTransform: 'unset' }}
          startIcon={<SelectAllIcon />}
          onClick={selectAllVisible}
        >
          {t('Select visible')} <Label className={classes.toggleAllLabel}>{t('Ctrl+s')}</Label>
        </Button>
      </Box>
      {filteredItems.map(([label, options]) => {
        if (options.length === 0) return null;
        return (
          <div>
            <FormControl sx={{ margin: 1, width: '100%' }} component="fieldset" variant="standard">
              <FormLabel component="legend">
                {
                  // i18next-extract-mark-context-next-line {{extraSection}}
                  t('extraSection', { context: label })
                }
              </FormLabel>
              <FormGroup>
                {options.map(({ id, gw2id, subText, text }) => (
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
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
                          <Item id={gw2id} disableLink text={text.replace(/^Superior /, '')} />
                          {subText && (
                            <Typography variant="caption" sx={{ marginLeft: 1, fontWeight: 200 }}>
                              {
                                // i18next-extract-mark-context-next-line {{extraSubText}}
                                t('extraSubText', { context: subText })
                              }
                            </Typography>
                          )}
                          {/* {priceIds && (
                            <span style={{ fontSize: '0.6em' }}>
                              <br />
                              {priceIds.map((id) => (
                                <Item id={id} />
                              ))}
                            </span>
                          )} */}
                        </>
                      }
                    />
                    {priceData[id] !== undefined ? (
                      <Typography variant="body2">
                        {priceData[id].cheapestId ? (
                          <>
                            <Item id={priceData[id].cheapestId} disableText />{' '}
                          </>
                        ) : null}
                        <Coin value={priceData[id].price} />
                      </Typography>
                    ) : null}
                  </Box>
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
