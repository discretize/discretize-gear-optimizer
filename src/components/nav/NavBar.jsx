import { Profession, Tooltip } from '@discretize/gw2-ui-new';
import MenuIcon from '@mui/icons-material/Menu';
import ShareIcon from '@mui/icons-material/Share';
import {
  AppBar,
  Box,
  Button,
  debounce,
  IconButton,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import { bindHover, bindMenu, usePopupState } from 'material-ui-popup-state/es/hooks';
import Menu from 'material-ui-popup-state/es/HoverMenu';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { getBuildTemplateData, templateTransform } from '../../assets/presetdata/templateTransform';
import SagaTypes from '../../state/sagas/sagaTypes';
import {
  changeProfession,
  getProfession,
  getSelectedSpecialization,
  getSelectedTemplate,
  setBuildTemplate,
} from '../../state/slices/controlsSlice';
import { getExpertMode, getGameMode } from '../../state/slices/userSettings';
import data from '../../utils/data';
import { PROFESSIONS } from '../../utils/gw2-data';
import NavAccordion from './NavAccordion';
import NavSettings from './NavSettings';
import fractalImg from '../../assets/images/icons/fractals.png';
import raidImg from '../../assets/images/icons/raids.png';

const useStyles = makeStyles()((theme) => ({
  icon: {
    fontSize: '2rem',
  },
}));

const Navbar = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const expertMode = useSelector(getExpertMode);
  const gamemode = useSelector(getGameMode);
  const selectedSpecialization = useSelector(getSelectedSpecialization);
  const selectedTemplateName = useSelector(getSelectedTemplate);

  const { t } = useTranslation();

  const [state, setState] = useState({
    mobileView: typeof window !== 'undefined' ? window.innerWidth < 900 : false,
    drawerOpen: false,
    hover: [false, false, false, false, false, false, false, false, false],
    anchor: null,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      const mobileViewCurrent = window.innerWidth < 900;
      if (mobileViewCurrent !== mobileView) {
        setState((prevState) => ({ ...prevState, mobileView: mobileViewCurrent }));
      }
    };
    const debouncedResponsive = debounce(setResponsiveness, 300);

    window.addEventListener('resize', debouncedResponsive);

    return () => {
      window.removeEventListener('resize', debouncedResponsive);
    };
  }, [mobileView]);

  const stickyRight = () => {
    return (
      <Box display="flex" alignItems="center" gap={1}>
        <Tooltip content={`${t('Selected Game Mode')}: ${isFractals ? t('Fractals') : t('Raids')}`}>
          <img
            style={{ width: '40px' }}
            src={isFractals ? fractalImg : raidImg}
            alt={isFractals ? t('Fractal') : t('Raid')}
          />
        </Tooltip>

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

        <NavSettings />
      </Box>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Box flexGrow={1}>
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

  const isFractals = gamemode === 'fractals';

  const handleTemplateSelect = React.useCallback(
    // eslint-disable-next-line no-shadow
    (popup, selectedTemplate, profession) => {
      dispatch({ type: SagaTypes.Stop });
      try {
        const buildTemplateData = getBuildTemplateData({
          selectedTemplate,
          isFractals,
          profession,
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
      <Box flexGrow={1}>
        {PROFESSIONS.map((prof, index) => (
          <React.Fragment key={prof.profession}>
            <Button
              onClick={() => {
                dispatch({ type: SagaTypes.Stop });
                if (expertMode) {
                  dispatch(changeProfession(prof.profession));
                }
              }}
              variant={prof.profession === profession ? 'contained' : 'text'}
              color="inherit"
              {...bindHover(popupState[index])}
            >
              <Profession name={prof.profession} disableLink disableText className={classes.icon} />
            </Button>

            <Menu
              {...bindMenu(popupState[index])}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              PaperProps={{
                style: {
                  maxHeight: 'calc(100vh - 340px)',
                },
              }}
            >
              {data.templates.list
                .find((elem) => elem.class === prof.profession)
                ?.builds?.map((elem) => (
                  <MenuItem
                    key={elem.name}
                    onClick={(e) =>
                      handleTemplateSelect(popupState[index], elem.name, prof.profession)
                    }
                  >
                    <Profession
                      name={elem.specialization}
                      disableLink
                      // i18next-extract-mark-context-next-line {{buildTemplateName}}
                      text={t('buildTemplateName', { context: elem.name })}
                    />
                  </MenuItem>
                ))}
            </Menu>
          </React.Fragment>
        ))}
      </Box>

      {(selectedSpecialization || selectedTemplateName) && (
        <Box flexGrow={1}>
          <Typography>
            <Trans>Selected</Trans>:{' '}
          </Typography>
          {selectedTemplateName ? (
            <Profession
              name={selectedSpecialization}
              text={
                // i18next-extract-mark-context-next-line {{buildTemplateName}}
                t('buildTemplateName', { context: selectedTemplateName })
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
