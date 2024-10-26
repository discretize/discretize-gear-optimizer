import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import { exportStateCharacter } from '../../../../state/async/buildPageThunks';
import type { Character } from '../../../../state/optimizer/optimizerCore';
import { useAppDispatch } from '../../../../state/redux-hooks';
import ModalContent from './ModalContent';

const useStyles = makeStyles()((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
  closeIcon: {
    fontSize: 20,
  },
}));

interface BuildShareModalProps {
  children: (handleOpen: () => void) => React.ReactNode;
  title?: string;
  character: Character | null;
}

const BuildShareModal = ({ children, title, character }: BuildShareModalProps) => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = () => {
    // fixes the browser protection against window opening without any user interaction due to opening the window in a callback
    const windRef = window.open('', '_blank');

    dispatch(exportStateCharacter({ newPage: windRef }));
  };

  const onClickCopy = () => {
    dispatch(exportStateCharacter({ copyToClipboard: true }));
  };

  return (
    <>
      {children(handleOpen)}

      <Modal
        disableEnforceFocus
        aria-labelledby="build-share-modal"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              {title && (
                <Box sx={{ alignSelf: 'center' }}>
                  <Typography>{title}</Typography>
                </Box>
              )}

              <Box sx={{ alignSelf: 'center' }}>
                <IconButton onClick={handleClose}>
                  <CloseIcon className={classes.closeIcon} />
                </IconButton>
              </Box>
            </Box>
            <Divider />

            <ModalContent
              character={character}
              buttons={[
                { label: t('Open build'), onClick, icon: ShareIcon },
                {
                  label: t('Copy build'),
                  onClick: onClickCopy,
                  icon: ContentCopyIcon,
                },
              ]}
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default BuildShareModal;
