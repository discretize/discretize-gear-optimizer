import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import data from 'data/presetdata';
import { getBuildTemplateData } from 'data/presetdata/templateTransform';
import { Trans } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfession,
  getSelectedTemplate,
  setBuildTemplate,
} from '../../state/slices/controlsSlice';
import { getGameMode } from '../../state/slices/userSettings';

interface ReapplyTemplateDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function ReapplyTemplateDialog({ open, handleClose }: ReapplyTemplateDialogProps) {
  const dispatch = useDispatch();

  const gameMode = useSelector(getGameMode);
  const selectedTemplate = useSelector(getSelectedTemplate);
  const profession = useSelector(getProfession);

  const isFractals = gameMode === 'fractals';

  const handleAcceptTemplateReapply = () => {
    const buildTemplateData = getBuildTemplateData({
      selectedTemplate,
      isFractals,
      profession,
      data,
    });
    dispatch(setBuildTemplate(buildTemplateData));

    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Trans>Reapply template?</Trans>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Trans>
            Would you like to apply the {isFractals ? 'fractal' : 'raid'} version of your current
            template? This will overwrite your current form selections.
          </Trans>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          <Trans>Decline</Trans>
        </Button>
        <Button onClick={handleAcceptTemplateReapply} autoFocus variant="outlined">
          <Trans>Accept</Trans>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
