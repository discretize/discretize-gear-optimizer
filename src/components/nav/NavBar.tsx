import { Profession, Tooltip } from '@discretize/gw2-ui-new';
import MenuIcon from '@mui/icons-material/Menu';
import ShareIcon from '@mui/icons-material/Share';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Menu from 'material-ui-popup-state/HoverMenu';
import { bindHover, bindMenu, usePopupState } from 'material-ui-popup-state/hooks';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import fractalImg from '../../assets/images/icons/fractals.png';
import raidImg from '../../assets/images/icons/raids.png';
import wvwImg from '../../assets/images/icons/wvw.png';
import { getBuildTemplateData } from '../../assets/presetdata/templateTransform';
import SagaTypes from '../../state/sagas/sagaTypes';
import {
  changeProfession,
  getProfession,
  getSelectedSpecialization,
  getSelectedTemplate,
  setBuildTemplate,
} from '../../state/slices/controlsSlice';
import { changeGameMode, getExpertMode, getGameMode } from '../../state/slices/userSettings';
import data from '../../utils/data';
import { PROFESSIONS } from '../../utils/gw2-data';
import NavAccordion from './NavAccordion';
import NavSettings from './NavSettings';
import ReapplyTemplateDialog from './ReapplyTemplateDialog';

const useStyles = makeStyles()((theme) => ({
  icon: {
    fontSize: '2rem',
  },
}));

const Navbar = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const profession = useSelector(getProfession);
  const expertMode = useSelector(getExpertMode);
  const gamemode = useSelector(getGameMode);
  const selectedSpecialization = useSelector(getSelectedSpecialization);
  const selectedTemplateName = useSelector(getSelectedTemplate);

  const selectedTemplate = data.templates.list
    .find((elem) => elem.class === profession)
    ?.builds?.find((elem) => elem.name === selectedTemplateName);

  const isFractals = gamemode === 'fractals';

  const selectedGameModeTexts = {
    fractals: t('Fractals'),
    raids: t('Raids'),
    wvw: t('WvW'),
  };
  const selectedGameModeText = selectedGameModeTexts[gamemode];

  const gameModeImages = {
    fractals: fractalImg,
    raids: raidImg,
    wvw: wvwImg,
  };
  const gameModeImage = gameModeImages[gamemode];

  const mobileView = !useMediaQuery('(min-width:900px)');
  const showSelectedTemplate = useMediaQuery('(min-width:960px)');

  const [state, setState] = useState({
    drawerOpen: false,
    hover: [false, false, false, false, false, false, false, false, false],
    anchor: null,
  });
  // state for the reapply dialog
  const [open, setOpen] = React.useState(false);

  const { drawerOpen } = state;

  const handleModeCycle = () => {
    // const currentMode = gamemode;
    // const index = GAME_MODES(t)
    //   .map((mode) => mode.value)
    //   .indexOf(currentMode);
    // const newIndex = (index + 1) % GAME_MODES(t).length;
    // const newGameMode = GAME_MODES(t)[newIndex]?.value;

    // only cycles between raids and fractals
    const newGameMode = gamemode === 'raids' ? 'fractals' : 'raids';

    dispatch(changeGameMode(newGameMode));

    const isFractalsNew = newGameMode === 'fractals';
    const isFractalsOld = gamemode === 'fractals';
    const isFractalsChanged = isFractalsNew !== isFractalsOld;
    if (isFractalsChanged && selectedTemplateName && selectedTemplateName.length > 0 && newGameMode)
      setOpen(true);
  };

  const stickyRight = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Tooltip content={`${t('Selected Game Mode')}: ${selectedGameModeText}`}>
            <IconButton size="small" onClick={handleModeCycle}>
              <img style={{ width: '40px' }} src={gameModeImage} alt={selectedGameModeText} />
            </IconButton>
          </Tooltip>

          <Typography sx={{ mt: -1 }} variant="caption">
            {selectedGameModeText}
          </Typography>
        </Box>

        <Tooltip content={t('Jump to sharing section')}>
          <IconButton
            href="#share"
            size="large"
            onClick={(e) => {
              const elem = document.getElementById('#share');
              if (elem) elem.scrollIntoView();
              e.preventDefault();
            }}
          >
            <ShareIcon />
          </IconButton>
        </Tooltip>

        <NavSettings />

        <ReapplyTemplateDialog open={open} handleClose={() => setOpen(false)} />
      </Box>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            {...{
              edge: 'start',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
            size="large"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <SwipeableDrawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onOpen: handleDrawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>
            <NavAccordion handleTemplateSelect={handleTemplateSelect} />
          </div>
        </SwipeableDrawer>

        {stickyRight()}
      </Toolbar>
    );
  };

  const handleTemplateSelect = React.useCallback(
    // eslint-disable-next-line no-shadow
    (popup, selectedTemplate, profession) => {
      dispatch({ type: SagaTypes.Stop });
      try {
        const buildTemplateData = getBuildTemplateData({
          selectedTemplate,
          isFractals,
          profession,
          data,
        });
        dispatch(setBuildTemplate(buildTemplateData));
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert('Error loading build template!');
        console.error(e);
      }
      popup?.close();
    },
    [dispatch, isFractals],
  );

  const popupState = [
    usePopupState({ variant: 'popover', popupId: 'warriorTemplates', disableAutoFocus: true }),
    usePopupState({ variant: 'popover', popupId: 'revenantTemplates', disableAutoFocus: true }),
    usePopupState({ variant: 'popover', popupId: 'guardianTemplates', disableAutoFocus: true }),
    usePopupState({ variant: 'popover', popupId: 'rangerTemplates', disableAutoFocus: true }),
    usePopupState({ variant: 'popover', popupId: 'engineerTemplates', disableAutoFocus: true }),
    usePopupState({ variant: 'popover', popupId: 'elementalistTemplates', disableAutoFocus: true }),
    usePopupState({ variant: 'popover', popupId: 'memsmerTemplates', disableAutoFocus: true }),
    usePopupState({ variant: 'popover', popupId: 'necromancerTemplates', disableAutoFocus: true }),
    usePopupState({ variant: 'popover', popupId: 'thiefTemplates', disableAutoFocus: true }),
  ];
  const displayDesktop = () => (
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        {PROFESSIONS.map((prof, index) => (
          <React.Fragment key={prof}>
            <Button
              onClick={() => {
                dispatch({ type: SagaTypes.Stop });
                if (prof !== profession && expertMode) {
                  dispatch(changeProfession(prof));
                }
              }}
              variant={prof === profession ? 'contained' : 'text'}
              color="inherit"
              {...bindHover(popupState[index])}
            >
              <Profession name={prof} disableLink disableText className={classes.icon} />
            </Button>

            <Menu
              {...bindMenu(popupState[index])}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              slotProps={{
                paper: {
                  style: {
                    maxHeight: 'calc(100vh - 340px)',
                  },
                },
              }}
            >
              {data.templates.list
                .find((elem) => elem.class === prof)
                ?.builds?.map((elem) => (
                  <MenuItem
                    key={elem.name}
                    onClick={(e) => handleTemplateSelect(popupState[index], elem.name, prof)}
                  >
                    <Profession
                      name={elem.specialization}
                      disableLink
                      text={
                        // i18next-extract-mark-context-next-line {{buildTemplateName}}
                        t('buildTemplateName', { context: elem.name }) +
                        (elem.outdated ? t(' (Outdated)') : '')
                      }
                    />
                  </MenuItem>
                ))}
            </Menu>
          </React.Fragment>
        ))}
      </Box>

      {showSelectedTemplate && (selectedSpecialization || selectedTemplateName) && (
        <Box sx={{ flexGrow: 1 }}>
          <Typography>
            <Trans>Selected</Trans>:{' '}
          </Typography>
          {selectedTemplateName ? (
            <Profession
              name={selectedSpecialization}
              text={
                // i18next-extract-mark-context-next-line {{buildTemplateName}}
                t('buildTemplateName', { context: selectedTemplateName }) +
                (selectedTemplate?.outdated ? t(' (Outdated)') : '')
              }
              disableLink
            />
          ) : (
            <Profession name={selectedSpecialization} disableLink />
          )}
        </Box>
      )}

      {stickyRight()}
    </Toolbar>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ boxShadow: 4, ...(profession === '' ? { marginBottom: 0 } : { marginBottom: 2 }) }}
      color="inherit"
      elevation={0}
      enableColorOnDark
    >
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

export default React.memo(Navbar);
