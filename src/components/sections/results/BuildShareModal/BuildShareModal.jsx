import { compress } from '@discretize/object-compression';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { withPrefix } from 'gatsby';
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { changeCharacter } from '../../../../state/slices/buildPage';
import { BuildPageSchema, version } from '../../../url-state/schema/BuildPageSchema_v2';
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

    const { attributes: allAttributes, gear, settings, infusions } = character;
    const { specialization, weaponType, extrasCombination } = settings;

    // filter out unnecessary attributes
    const attributes = {};
    Object.keys(BuildPageSchema.character.attributes).forEach((key) => {
      attributes[key] = allAttributes[key];
    });

    // since we cant use the compression library for object where the layout of keys is unknown, we stringify it.
    const minimalCharacter = {
      attributes,
      gear,
      infusions: JSON.stringify(infusions) || '',
      settings: {
        extrasCombination,
        profession,
        specialization,
        weaponType,
      },
    };
    dispatch(changeCharacter(minimalCharacter));

    // create bit map for buffs
    const conv = (val) => (val ? 1 : 0);
    const buffsInteger = Object.keys(buffs).reduce(
      // eslint-disable-next-line no-bitwise
      (acc, curr) => (acc + conv(buffs[curr])) << 1,
      conv(buffs[0]),
    );

    const object = {
      character: minimalCharacter,
      skills,
      traits: { lines, selected },
      weapons,
      buffs: buffsInteger,
    };

    compress({
      object,
      schema: BuildPageSchema,
      onSuccess: (result) => {
        windRef.location.href = withPrefix(`/build?v=${version}&data=${result}`);
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
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
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
                <CloseIcon className={classes.closeIcon} onClick={handleClose} />
              </Box>
            </Box>
            <Divider />

            <ModalContent character={character} onClick={onClick} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default BuildShareModal;
