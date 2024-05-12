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
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { placeholderItem } from '../../../assets/modifierdata';
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

const firstUppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatApiText = (apiText) =>
  firstUppercase(
    apiText
      .replace(/^Superior Sigil /, 'Sigil ')
      .replace(/^Überlegenes Sigill /, 'Sigill ')
      .replace(/^Sello superior /, 'Sello ')

      .replace(/^Superior Rune /, 'Rune ')
      .replace(/^Überlegene Rune /, 'Rune ')
      .replace(/^Runa superior /, 'Runa ')

      .replaceAll('"', '')
      .replace(/^Plate of /, '')
      .replace(/^Bowl of /, '')
      .replace(/^Slice of /, '')
      .replace(/^Scoop of /, '')
      .replace(/ Squash Soup$/, '')

      // .replace(/^Schüssel mit /, '')
      // .replace(/^Teller mit /, '')

      .replace(/^Plato de /, '')
      .replace(/^Cuenco de /, ''),
  );

export const joinWith = (array, separator) =>
  array.flatMap((element) => [element, separator]).slice(0, -1);

function ModalContent(props) {
  const { type, modifierData, modifierDataById: data, priceData, showAttributes } = props;

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

  const searchTerms = search.split(',').map((term) => term.trim().toLowerCase());

  const filteredItems = Object.entries(grouped).map(([label, options]) => {
    const searched = options.filter(({ text, gw2id, modifiers = {} }) =>
      searchTerms.some(
        (term) =>
          text.toLowerCase().includes(term) ||
          `${gw2id}`.includes(term) ||
          JSON.stringify(modifiers).toLowerCase().includes(term),
      ),
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

  const toggleAllInSection = React.useCallback(
    (sectionLabel) => {
      const idsInSection = filteredItems
        .find(([label]) => label === sectionLabel)[1]
        .map(({ id }) => id);
      const allSelected = idsInSection.every((id) => currentIds.includes(id));

      if (allSelected) {
        const filtered = currentIds.filter((id) => !idsInSection.includes(id));
        dispatch(changeExtraIds({ type, ids: filtered }));
      } else {
        dispatch(changeExtraIds({ type, ids: [...currentIds, ...idsInSection] }));
      }
    },
    [filteredItems, dispatch, currentIds, type],
  );

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
          <div key={label}>
            <FormControl sx={{ margin: 1, width: '100%' }} component="fieldset" variant="standard">
              <FormLabel
                component="legend"
                sx={(theme) => ({
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                })}
                onClick={() => toggleAllInSection(label)}
              >
                {
                  // i18next-extract-mark-context-next-line {{extraSection}}
                  t('extraSection', { context: label })
                }
              </FormLabel>
              <FormGroup>
                {options.map(
                  ({ id, gw2id, displayIds, subText, textOverride, modifiers, amountData }) => (
                    <Fragment key={id}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
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
                              {displayIds ? (
                                joinWith(
                                  displayIds.map((displayId) => (
                                    <Item
                                      id={displayId ?? placeholderItem}
                                      key={displayId ?? placeholderItem}
                                      disableLink
                                      text={textOverride ?? formatApiText}
                                      disableText={!displayId}
                                      disableTooltip={!displayId}
                                    />
                                  )),
                                  ' / ',
                                )
                              ) : (
                                <Item
                                  id={gw2id ?? placeholderItem}
                                  disableLink
                                  text={textOverride ?? formatApiText}
                                  disableText={!gw2id}
                                  disableTooltip={!gw2id}
                                />
                              )}
                              {subText && (
                                <Typography
                                  variant="caption"
                                  sx={{ marginLeft: 1, fontWeight: 200 }}
                                >
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
                      {showAttributes && (
                        <Typography
                          variant="caption"
                          sx={{ marginLeft: 5, fontWeight: 200, maxWidth: 500, whiteSpace: 'wrap' }}
                        >
                          {
                            /* eslint-disable no-nested-ternary */
                            [
                              modifiers?.attributes
                                ? ` ${Object.entries(modifiers?.attributes)
                                    .map(
                                      ([key, value]) =>
                                        `${
                                          amountData
                                            ? ''
                                            : Array.isArray(value) && value.length === 2
                                              ? value[0]
                                              : value
                                        } ${key}`,
                                    )
                                    .join(', ')}`
                                : '',
                              modifiers?.damage
                                ? ` ${Object.entries(modifiers?.damage)
                                    .map(
                                      ([key, value]) =>
                                        `${
                                          amountData
                                            ? ''
                                            : Array.isArray(value) && value.length === 2
                                              ? value[0]
                                              : value
                                        } ${key}`,
                                    )
                                    .join(', ')}`
                                : '',
                              modifiers?.conversion
                                ? ` ${Object.entries(modifiers?.conversion)
                                    .map(
                                      ([key, value]) =>
                                        `${Object.entries(value)
                                          .map(
                                            ([source, amount]) =>
                                              `${amountData ? '' : amount} ${source}`,
                                          )
                                          .join(' and ')} to ${key}`,
                                    )
                                    .join(', ')}`
                                : '',
                              modifiers?.conversionAfterBuffs
                                ? ` ${Object.entries(modifiers?.conversionAfterBuffs)
                                    .map(([key]) => `Conversion to ${key}`)
                                    .join(', ')}`
                                : '',
                            ]
                              .filter(Boolean)
                              .join(', ') + (amountData ? ` ${t('(varies)')}` : '')
                          }
                        </Typography>
                      )}
                    </Fragment>
                  ),
                )}
              </FormGroup>
            </FormControl>
          </div>
        );
      })}
    </DialogContent>
  );
}

export default ModalContent;
