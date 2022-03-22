import { Item } from '@discretize/gw2-ui-new';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Fade,
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
import AmountInput from '../../baseComponents/AmountInput';
import ModalContent from './ModalContent';

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
}));

export default function ExtraSelection(props) {
  const { type, label, modifierDataById: data } = props;

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

  const handleDelete = (id) => () => {
    dispatch(changeExtraIds({ type, ids: currentIds.filter((id0) => id0 !== id) }));
  };

  const deleteAll = () => {
    dispatch(changeExtraIds({ type, ids: [] }));
  };

  return (
    <>
      <Box display="flex" mb={1}>
        <Typography variant="h6" component="span" flexGrow={1}>
          {label}
        </Typography>
        <Button variant="contained" size="small" startIcon={<AddIcon />} onClick={handleOpen}>
          Add {type}
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
                        disableLink
                        {...(!isChinese && { text: data[extraId]?.text.replace('Superior ', '') })}
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
          <ListItem>
            <ListItemText>None</ListItemText>
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
        <ModalContent {...props} />
        <DialogActions>
          <Button startIcon={<DeleteIcon />} onClick={deleteAll}>
            Unselect all
          </Button>

          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
