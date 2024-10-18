import { Tooltip as Gw2Tooltip, Item, Profession, Specialization } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
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
    minWidth: 989,
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
          <Typography variant="body2" sx={{ color: 'primary' }}>
            <Trans>Armor</Trans>:
          </Typography>
          {gear.slice(0, 6).map((affix) => `${affix.slice(0, 4)} `)}
          <Typography variant="body2" sx={{ color: 'primary' }}>
            <Trans>Trinkets</Trans>:
          </Typography>
          {gear.slice(6, 12).map((affix) => `${affix.slice(0, 4)} `)}
          <Typography variant="body2" sx={{ color: 'primary' }}>
            <Trans>Weapons</Trans>:
          </Typography>
          {gear.slice(12).map((affix) => `${affix.slice(0, 4)} `)}
          {infusions && (
            <>
              <Typography variant="body2" sx={{ color: 'primary' }}>
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

  const [stored, setStored] = React.useState(() =>
    getAll().map(({ name, character }) => ({ name, character, checked: false })),
  );
  const selected = stored.filter(({ checked }) => checked);

  const [importText, setImportText] = React.useState('');

  const temporarySaved = useSelector(getSaved);
  const selectedTemplate = useSelector(getSelectedTemplate);

  React.useEffect(() => {
    save(stored.map(({ name, character }) => ({ name, character })));
  }, [stored]);

  const handleClose = () => setOpen(false);
  const handleSaveLocally = (character, name) => () => {
    if (!stored.some(({ character: { id } }) => character.id === id)) {
      setStored([
        {
          name: name || selectedTemplate || character.settings.specialization,
          character,
          checked: false,
        },
        ...stored,
      ]);
    }
  };
  const handleNameChange = (index) => (event) => {
    setStored(
      stored.map((entry, i) => (i === index ? { ...entry, name: event.target.value } : entry)),
    );
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
    if (!temporarySaved.some(({ id }) => character.id === id)) {
      dispatch(addToSaved(character));
    }
  };
  const handleSelectedChange = (index) => (event) => {
    setStored(
      stored.map((entry, i) => (i === index ? { ...entry, checked: event.target.checked } : entry)),
    );
  };
  const handleImport = () => {
    try {
      const parsed = JSON.parse(importText);
      const toImport = (Array.isArray(parsed) ? parsed : [parsed]).filter(
        (importable) =>
          typeof importable?.character === 'object' && typeof importable?.name === 'string',
      );
      if (toImport.length) {
        toImport.forEach((importable) =>
          dispatch(handleSaveLocally(importable.character, importable.name)),
        );
        setImportText('');
      }
    } catch {
      console.warn('Error while importing build!');
      // TODO add snackbar
    }
  };
  const handleDownload = () => {
    const data = JSON.stringify(selected.map(({ name, character }) => ({ name, character })));
    const blobUrl = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.href = blobUrl;
    downloadAnchorNode.download = `GearOptimizerBuilds.json`;
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    URL.revokeObjectURL(blobUrl);
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
        <Typography component="span" sx={{ flexGrow: 1, alignSelf: 'center' }}>
          <Trans>Saved Results Manager</Trans>
        </Typography>
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ padding: 2 }} dividers>
        <Typography sx={{ fontWeight: 200 }}>
          <Trans>Current pinned builds</Trans>{' '}
          <HelperIcon
            text={t('These builds will be deleted after you leave or refresh this page.')}
            size="small"
          />
        </Typography>

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
                    <Tooltip title={t('Save to persistent build storage')}>
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

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography sx={{ fontWeight: 200, marginTop: 2, flexGrow: 1 }}>
            <Trans>Persistent build storage</Trans>{' '}
            <HelperIcon
              text={t(
                "These builds will remain saved in your browser's local storage. Clearing your cache or application data will remove your builds.",
              )}
              size="small"
            />
          </Typography>

          <TextField
            size="small"
            label={t('Paste build data to import')}
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
              {stored.map(({ name, character, checked }, index) => (
                <TableRow key={character.id}>
                  <TableCell>
                    <Checkbox checked={checked} onChange={handleSelectedChange(index)} />
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
                    <Tooltip title={t('Copy data to clipboard')}>
                      <IconButton onClick={handleCopy({ name, character })}>
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title={t('Load as pinned build')}>
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

        <Button
          variant="outlined"
          onClick={handleDownload}
          disabled={selected.length === 0}
          sx={{ mt: 1 }}
        >
          Download {selected.length} selected
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('Okay')}</Button>
      </DialogActions>
    </Dialog>
  );
}
