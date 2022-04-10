import { Profession } from '@discretize/gw2-ui-new';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SaveIcon from '@mui/icons-material/Save';
import {
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
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  addToSaved,
  getSaved,
  getSelectedTemplate,
  removeFromSaved,
} from '../../../../state/slices/controlsSlice';
import { getAll, save } from './localStorage';

const useStyles = makeStyles()((theme) => ({}));

export default function SavedResultManager({ isOpen, setOpen }) {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const [stored, setStored] = React.useState(getAll());
  const [marked, setMarked] = React.useState(new Array(stored.length).fill(false));

  const temporarySaved = useSelector(getSaved);
  const selectedTemplate = useSelector(getSelectedTemplate);

  React.useEffect(() => {
    save(stored);
  }, [stored]);

  const handleClose = () => setOpen(false);
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
  return (
    <Dialog
      open={isOpen}
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
          <Trans>Saved Results Manager</Trans>
        </Typography>
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ padding: 2 }} dividers>
        <Typography fontWeight={200}>
          <Trans>Current temporary saved builds</Trans>
        </Typography>

        <Table>
          <TableHead>
            <TableCell />
            <TableCell>
              <Trans>Damage</Trans>
            </TableCell>
            <TableCell />
          </TableHead>
          <TableBody>
            {temporarySaved.map((character) => (
              <TableRow>
                <TableCell>
                  <Profession name={character.settings.specialization} disableText />
                </TableCell>
                <TableCell>{Math.round(character.results.value)}</TableCell>
                <TableCell sx={{ textAlign: 'right' }}>
                  <Tooltip title={t('Save locally')}>
                    <IconButton
                      onClick={() => {
                        setStored([
                          ...stored,
                          {
                            name: selectedTemplate || character.settings.specialization,
                            character,
                          },
                        ]);
                      }}
                    >
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title={t('Delete')}>
                    <IconButton onClick={handleDeleteTemporary(character)}>
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Typography fontWeight={200}>
          <Trans>Persistently saved builds</Trans>
        </Typography>

        <Table>
          <TableHead>
            <TableCell />
            <TableCell />
            <TableCell>
              <Trans>Name</Trans>
            </TableCell>
            <TableCell>
              <Trans>Damage</Trans>
            </TableCell>
            <TableCell />
          </TableHead>
          <TableBody>
            {stored.map(({ name, character }, index) => (
              <TableRow>
                <TableCell>
                  <Checkbox value={marked[index]} onChange={handleMarkChange(index)} />
                </TableCell>
                <TableCell>
                  <Profession
                    style={{ fontSize: 20 }}
                    name={character.settings.specialization}
                    disableText
                  />
                </TableCell>
                <TableCell>
                  <Input value={name} onChange={handleNameChange(index)} />
                </TableCell>
                <TableCell>{Math.round(character.results.value)}</TableCell>
                <TableCell sx={{ textAlign: 'right' }}>
                  <Tooltip title={t('Copy JSON to clipboard')}>
                    <IconButton>
                      <ContentCopyIcon onClick={handleCopy(character)} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title={t('Copy build to temporary saved builds')}>
                    <IconButton>
                      <ArrowCircleUpIcon onClick={handleCopyToTemporary(character)} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title={t('Delete')}>
                    <IconButton onClick={handleDelete(character)}>
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button variant="outlined" onClick={handleDownload}>
          Download {marked.filter((a) => a).length} saved
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('Okay')}</Button>
      </DialogActions>
    </Dialog>
  );
}
