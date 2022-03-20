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
import { version } from '../../../url-state/schema/BuildPageSchema_v2';
import generateLink from './generateLink';
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

  const onClick = ({ profession, buffs, lines, selected, skills, weapons }) => {
    // fixes the browser protection against window opening without any user interaction due to opening the window in a callback
    const windRef = window.open('', '_blank');

    generateLink(
      { character, profession, buffs, lines, selected, skills, weapons },
      (result) => {
        windRef.location.href = withPrefix(`/build?v=${version}&data=${result}`);
      },
      dispatch,
    );
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
                  onClick: ({ profession, buffs, lines, selected, skills, weapons }) =>
                    generateLink(
                      { character, profession, buffs, lines, selected, skills, weapons },
                      (result) => {
                        navigator.clipboard.writeText(
                          window.location.href.slice(0, window.location.href.length - 1) +
                            withPrefix(`/build?v=${version}&data=${result}`),
                        );
                      },
                      dispatch,
                    ),
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
