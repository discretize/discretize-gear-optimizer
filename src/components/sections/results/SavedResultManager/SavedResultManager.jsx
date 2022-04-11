import { Item, Profession, Specialization, Tooltip as Gw2Tooltip } from '@discretize/gw2-ui-new';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InputIcon from '@mui/icons-material/Input';
import SaveIcon from '@mui/icons-material/Save';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  IconButton,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { allExtrasModifiersById } from '../../../../assets/modifierdata';
import {
  addToSaved,
  getSaved,
  getSelectedTemplate,
  removeFromSaved,
} from '../../../../state/slices/controlsSlice';
import { INFUSION_IDS } from '../../../../utils/gw2-data';
import { getAll, save } from './localStorage';

const useStyles = makeStyles()((theme) => ({
  container: {
    borderColor: theme.palette.background.paper,
    border: '1px solid inherit',
    backgroundColor: theme.palette.background.default,
  },
  gw2icon: {
    fontSize: '1.8rem',
  },
  table: { marginBottom: 0 },
}));

function Gear({ gear, infusions }) {
  return (
    <Gw2Tooltip
      content={
        <>
          <Typography color="primary" variant="body2">
            <Trans>Armor</Trans>:
          </Typography>
          {gear.slice(0, 6).map((affix) => `${affix.slice(0, 4)} `)}
          <Typography color="primary" variant="body2">
            <Trans>Trinkets</Trans>:
          </Typography>
          {gear.slice(6, 12).map((affix) => `${affix.slice(0, 4)} `)}
          <Typography color="primary" variant="body2">
            <Trans>Weapons</Trans>:
          </Typography>
          {gear.slice(12).map((affix) => `${affix.slice(0, 4)} `)}
          {infusions && (
            <>
              <Typography color="primary" variant="body2">
                <Trans>Infusions</Trans>:
              </Typography>
              {Object.entries(infusions).map(([name, count]) => (
                <Item key={name} count={count} id={INFUSION_IDS[name]} />
              ))}
            </>
          )}
        </>
      }
    >
      <Box sx={{ borderBottom: 'dotted' }}>
        <Trans>Gear</Trans>
      </Box>
    </Gw2Tooltip>
  );
}

function Extras({ classes, character }) {
  return Object.entries(character.settings.extrasCombination).map(([key, value]) => {
    if (!value) return null;
    return (
      <Item
        key={key}
        className={classes.gw2icon}
        id={allExtrasModifiersById[value]?.gw2id}
        disableText
      />
    );
  });
}

export default function SavedResultManager({ isOpen, setOpen }) {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const [stored, setStored] = React.useState(getAll());
  const [marked, setMarked] = React.useState(new Array(stored.length).fill(false));
  const [importText, setImportText] = React.useState('');

  const temporarySaved = useSelector(getSaved);
  const selectedTemplate = useSelector(getSelectedTemplate);

  React.useEffect(() => {
    save(stored);
  }, [stored]);

  const handleClose = () => setOpen(false);
  const handleSaveLocally = (character) => () => {
    setStored([
      {
        name: selectedTemplate || character.settings.specialization,
        character,
      },
      ...stored,
    ]);
  };
  const handleNameChange = (index) => (event) => {
    const newStored = [...stored];
    newStored[index].name = event.target.value;
    setStored(newStored);
  };
  const handleCopy = (character) => () => {
    navigator.clipboard.writeText(JSON.stringify(character, null, 2));
  };
  const handleDelete = (character) => () => {
    setStored(stored.filter((storedBuild) => storedBuild.character.id !== character.id));
  };
  const handleDeleteTemporary = (character) => () => {
    dispatch(removeFromSaved(character));
  };
  const handleCopyToTemporary = (character) => () => {
    dispatch(addToSaved(character));
  };
  const handleMarkChange = (index) => (event) => {
    const newChecked = [...marked];
    newChecked[index] = event.target.checked;
    setMarked(newChecked);
  };
  const handleImport = () => {
    try {
      const toImport = JSON.parse(importText);
      dispatch(addToSaved(toImport.character));
    } catch (e) {
      console.warn('Error while importing build!');
      // TODO add snackbar
    }
  };
  const handleDownload = () => {
    // https://gist.github.com/alexreiling/64a99f3b064ca0ad53db0ab153e6ee49
    const selected = stored.filter((_, index) => marked[index]);
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(selected))}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', `GearOptimizerBuilds.json`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  const handleImportTextChange = (event) => {
    setImportText(event.target.value);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      TransitionComponent={Fade}
      maxWidth="lg"
      PaperProps={{ elevation: 4 }}
    >
      <DialogTitle id="scroll-dialog-title" display="flex">
        <Typography flexGrow={1} component="span" alignSelf="center">
          <Trans>Saved Results Manager</Trans>
        </Typography>
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ padding: 2 }} dividers>
        <Box display="flex" alignItems="center" mb={1}>
          <Typography fontWeight={200} flexGrow={1}>
            <Trans>Temporary saved builds</Trans>
          </Typography>

          <TextField
            size="small"
            label={t('Paste build to import')}
            variant="standard"
            value={importText}
            onChange={handleImportTextChange}
          />
          <Tooltip title={t('Import')}>
            <IconButton onClick={handleImport}>
              <InputIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <TableContainer className={classes.container}>
          <Table className={classes.table}>
            <TableBody>
              {temporarySaved.map((character) => (
                <TableRow key={character.id}>
                  <TableCell width={77.42} />
                  <TableCell width={64}>
                    <Profession
                      name={character.settings.specialization}
                      disableText
                      className={classes.gw2icon}
                    />
                  </TableCell>
                  <TableCell>
                    {character.settings.cachedFormState.traits.selectedLines.map(
                      (specializationId) => (
                        <Specialization
                          key={specializationId}
                          id={specializationId}
                          disableText
                          className={classes.gw2icon}
                        />
                      ),
                    )}
                  </TableCell>
                  <TableCell width={261} />
                  <TableCell>{Math.round(character.results.value)}</TableCell>
                  <TableCell>
                    <Extras classes={classes} character={character} />
                  </TableCell>
                  <TableCell>
                    <Gear gear={character.gear} infusions={character.infusions} />
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right', width: 155.53 }}>
                    <Tooltip title={t('Save locally')}>
                      <IconButton onClick={handleSaveLocally(character)}>
                        <SaveIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title={t('Delete')}>
                      <IconButton onClick={handleDeleteTemporary(character)}>
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography fontWeight={200} marginTop={2}>
          <Trans>Persistently saved builds</Trans>
        </Typography>

        <TableContainer className={classes.container}>
          <Table className={classes.table}>
            <TableBody>
              {stored.map(({ name, character }, index) => (
                <TableRow key={`${name}${index.toString()}`}>
                  <TableCell>
                    <Checkbox value={marked[index]} onChange={handleMarkChange(index)} />
                  </TableCell>
                  <TableCell>
                    <Profession
                      className={classes.gw2icon}
                      name={character.settings.specialization}
                      disableText
                    />
                  </TableCell>
                  <TableCell>
                    {character.settings.cachedFormState.traits.selectedLines.map(
                      (specializationId) => (
                        <Specialization
                          key={specializationId}
                          id={specializationId}
                          disableText
                          className={classes.gw2icon}
                        />
                      ),
                    )}
                  </TableCell>
                  <TableCell>
                    <Input value={name} onChange={handleNameChange(index)} />
                  </TableCell>
                  <TableCell>{Math.round(character.results.value)}</TableCell>
                  <TableCell>
                    <Extras classes={classes} character={character} />
                  </TableCell>
                  <TableCell>
                    <Gear gear={character.gear} infusions={character.infusions} />
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>
                    <Tooltip title={t('Copy JSON to clipboard')}>
                      <IconButton onClick={handleCopy({ name, character })}>
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title={t('Copy build to temporary saved builds')}>
                      <IconButton onClick={handleCopyToTemporary(character)}>
                        <ArrowCircleUpIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title={t('Delete')}>
                      <IconButton onClick={handleDelete(character)}>
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button variant="outlined" onClick={handleDownload} sx={{ mt: 1 }}>
          Download {marked.filter((a) => a).length} saved
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('Okay')}</Button>
      </DialogActions>
    </Dialog>
  );
}
