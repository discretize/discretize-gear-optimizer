import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { withPrefix } from 'gatsby';
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import SagaTypes from '../../../../state/sagas/sagaTypes';
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

const BuildShareModal = ({ children, title, character }) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();

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

    dispatch({
      type: SagaTypes.ExportBuildPageState,
      onSuccess: (result) => {
        windRef.location.href = withPrefix(result);
      },
    });
  };

  const onClickCopy = () => {
    dispatch({
      type: SagaTypes.ExportBuildPageState,
      onSuccess: (result) => {
        navigator.clipboard.writeText(
          window.location.href.slice(0, window.location.href.length - 1) + withPrefix(result),
        );
      },
    });
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
            <Box display="flex" justifyContent="space-between" mb={1}>
              {title && (
                <Box alignSelf="center">
                  <Typography>{title}</Typography>
                </Box>
              )}

              <Box alignSelf="center">
                <IconButton onClick={handleClose}>
                  <CloseIcon className={classes.closeIcon} />
                </IconButton>
              </Box>
            </Box>
            <Divider />

            <ModalContent
              character={character}
              buttons={[
                { label: 'Open build', onClick, icon: ShareIcon },
                {
                  label: 'Copy build',
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
