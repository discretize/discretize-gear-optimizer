import { Item } from '@discretize/gw2-ui-new';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  Fade,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { allExtrasModifiersById } from '../../../assets/modifierdata';
import {
  changeExtraAmount,
  changeExtraIds,
  getExtrasData,
  getExtrasIds,
} from '../../../state/slices/extras';
import { chunkArray } from '../../../utils/usefulFunctions';
import AmountInput from '../../baseComponents/AmountInput';
import Label from '../../baseComponents/Label';
import ModalContent from './ModalContent';

// const roundPrice = (num) => Math.round(num / 100) * 100;
const roundPrice = (num) => num;

const useStyles = makeStyles()((theme) => ({
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.embossed,
    marginBottom: theme.spacing(2),
  },
  subText: {
    marginLeft: theme.spacing(1),
    fontWeight: 200,
  },
  item: {
    cursor: 'url(/images/cursors/green.png),pointer',
  },
}));

export default function ExtraSelection(props) {
  const { type, label, modifierData, modifierDataById: data, text } = props;

  const { classes } = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // const { language } = useI18next();
  // const isChinese = language === 'zh';
  // todo: replace this once dual sigils are not hardcoded with fake ids
  const isChinese = false;

  // state for the modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  // end modal stuff

  const currentIds = useSelector(getExtrasIds)[type] || [];
  const extrasData = useSelector(getExtrasData);

  const handleAmountChange = (id) => (e) => {
    dispatch(changeExtraAmount({ type, id, amount: e.target.value }));
  };

  const handleDelete = (id) => (e) => {
    dispatch(changeExtraIds({ type, ids: currentIds.filter((id0) => id0 !== id) }));
  };

  const deleteAll = () => {
    dispatch(changeExtraIds({ type, ids: [] }));
  };

  const [priceData, setPriceData] = React.useState({});
  const [showPriceData, setShowPriceData] = React.useState(false);

  const getPriceData = React.useCallback(async () => {
    const allItems = modifierData
      .flatMap(({ items }) => items)
      .map(({ id, gw2id, priceIds }) => ({ id, gw2ids: priceIds ?? [gw2id] }));
    const allIds = allItems.flatMap((item) => item.gw2ids);
    const apiDataChunks = await Promise.all(
      chunkArray(allIds, 200).map((ids) =>
        fetch(`https://api.guildwars2.com/v2/commerce/prices?ids=${ids.join(',')}`).then(
          (response) => response.json(),
        ),
      ),
    );
    const apiDataEntries = apiDataChunks
      .flat()
      .map(({ id, sells: { unit_price: price } = {} }) => [id, roundPrice(price)]);
    const apiData = Object.fromEntries(apiDataEntries);

    const priceDataEntries = allItems
      .map(({ id, gw2ids }) => {
        const prices = gw2ids.map((gw2id) => apiData[gw2id] ?? Infinity);
        const lowestPrice = Math.min(Infinity, ...prices);
        return [id, lowestPrice];
      })
      .filter(([_id, lowestPrice]) => lowestPrice !== Infinity);

    setPriceData(Object.fromEntries(priceDataEntries));
  }, [modifierData]);

  const handlePriceChange = React.useCallback(
    (e) => {
      if (e.target.checked) getPriceData();
      setShowPriceData(e.target.checked);
    },
    [getPriceData],
  );

  React.useEffect(() => {
    function handleKeyEvent(e) {
      // shortcut to show prices
      if (e.ctrlKey && e.code === 'KeyP') {
        setShowPriceData((prev) => {
          if (!prev) getPriceData();
          return !prev;
        });
        e.preventDefault();
      }
    }
    document.addEventListener('keydown', handleKeyEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyEvent);
    };
  }, [dispatch, handlePriceChange, getPriceData]);

  return (
    <>
      <Box display="flex" alignItems="flex-end" mb={1}>
        <Typography component="span" flexGrow={1}>
          {label}
        </Typography>
        <Button variant="contained" size="small" startIcon={<AddIcon />} onClick={handleOpen}>
          {t('Add')} {text}
        </Button>
      </Box>

      <List className={classes.list} disablePadding>
        {currentIds.length > 0 ? (
          currentIds.map((extraId) => {
            const { amountData } = allExtrasModifiersById[extraId];
            const amount = extrasData[type][extraId]?.amount || '';

            return (
              <ListItem
                key={extraId}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={handleDelete(extraId)}>
                    <ClearIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={
                    <Box display="flex">
                      <Item
                        id={data[extraId]?.gw2id}
                        {...(!isChinese && { text: data[extraId]?.text.replace(/^Superior /, '') })}
                      />
                      {data[extraId]?.subText && (
                        <Typography variant="caption" className={classes.subText}>
                          {t('extraSubText', { context: data[extraId]?.subText })}
                        </Typography>
                      )}

                      <Box flexGrow={1} />
                      {amountData && (
                        <AmountInput
                          placeholder={amountData.default}
                          // i18next-extract-mark-context-next-line {{amountLabel}}
                          endLabel={t('amountLabel', { context: amountData.label })}
                          handleAmountChange={handleAmountChange(extraId)}
                          value={amount}
                          maxWidth={38}
                        />
                      )}
                    </Box>
                  }
                />
              </ListItem>
            );
          })
        ) : (
          <ListItem onClick={handleOpen} className={classes.item}>
            <ListItemText>{t('None')}</ListItemText>
          </ListItem>
        )}
      </List>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        TransitionComponent={Fade}
        maxWidth="md"
        PaperProps={{ elevation: 4 }}
      >
        <DialogTitle id="scroll-dialog-title" display="flex">
          <Typography flexGrow={1} component="span" alignSelf="center">
            {label}
          </Typography>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <ModalContent {...props} priceData={showPriceData ? priceData : {}} />
        <DialogActions>
          <FormControlLabel
            control={<Checkbox checked={showPriceData} onChange={handlePriceChange} />}
            label={
              <>
                {t('Show prices')} <Label>{t('Ctrl+p')}</Label>
              </>
            }
            sx={{ ml: 0, mr: 'auto' }}
          />

          <Button startIcon={<DeleteIcon />} onClick={deleteAll}>
            {t('Unselect all')}
          </Button>

          <Button onClick={handleClose}>{t('Okay')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
