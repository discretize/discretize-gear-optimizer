import { Profession } from '@discretize/gw2-ui-new';
import MenuIcon from '@mui/icons-material/Menu';
import ShareIcon from '@mui/icons-material/Share';
import {
  AppBar,
  Box,
  Button,
  debounce,
  FormControlLabel,
  IconButton,
  MenuItem,
  SwipeableDrawer,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { bindHover, bindMenu, usePopupState } from 'material-ui-popup-state/es/hooks';
import Menu from 'material-ui-popup-state/es/HoverMenu';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import SagaTypes from '../../state/sagas/sagaTypes';
import {
  changeExpertMode,
  changeProfession,
  getExpertMode,
  getProfession,
  getSelectedSpecialization,
  getSelectedTemplate,
  setBuildTemplate,
} from '../../state/slices/controlsSlice';
import { PROFESSIONS } from '../../utils/gw2-data';
import NavAccordion from './NavAccordion';

const useStyles = makeStyles()((theme) => ({
  icon: {
    fontSize: '2rem',
  },
}));

const Navbar = ({
  data,
  buffPresets,
  prioritiesPresets,
  distributionPresets,
  extrasPresets,
  traitPresets,
}) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const expertMode = useSelector(getExpertMode);
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
      <Box>
        <FormControlLabel
          control={
            <Switch
              checked={expertMode}
              onChange={(e) => {
                dispatch({ type: SagaTypes.Stop });
                dispatch(changeExpertMode(e.target.checked));
              }}
              name="checked"
              color="primary"
            />
          }
          label={t('Expert')}
        />
        <IconButton
          href="#share"
          size="large"
          onClick={() => {
            const elem = document.getElementById('#share');
            if (elem) elem.scrollIntoView();
          }}
        >
          <ShareIcon />
        </IconButton>
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
            <NavAccordion
              data={data}
              buffPresets={buffPresets}
              prioritiesPresets={prioritiesPresets}
              distributionPresets={distributionPresets}
              extrasPresets={extrasPresets}
              traitPresets={traitPresets}
            />
          </div>
        </SwipeableDrawer>

        {stickyRight()}
      </Toolbar>
    );
  };

  // eslint-disable-next-line no-shadow
  const handleTemplateSelect = (popup, build, specialization, profession) => {
    dispatch({ type: SagaTypes.Stop });
    dispatch(
      setBuildTemplate({
        build,
        specialization,
        profession,
        buffPreset: JSON.parse(buffPresets.find((pre) => pre.name === build.boons).value),
        distributionPreset: JSON.parse(
          distributionPresets.find((pre) => pre.name === build.distribution)?.value || 'null',
        ),
        prioritiesPreset: JSON.parse(
          prioritiesPresets.find((pre) => pre.name === build.priority)?.value,
        ),
        extrasPreset: JSON.parse(extrasPresets.find((pre) => pre.name === build.extras)?.value),
        traitsPreset: JSON.parse(traitPresets.find((pre) => pre.name === build.traits)?.traits),
        skillsPreset: JSON.parse(traitPresets.find((pre) => pre.name === build.traits)?.skills),
      }),
    );

    popup.close();
  };

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
              {data
                .find((elem) => elem.class === prof.profession)
                ?.builds?.map((elem) => (
                  <MenuItem
                    key={elem.name}
                    onClick={(e) =>
                      handleTemplateSelect(
                        popupState[index],
                        elem,
                        elem.specialization,
                        prof.profession,
                      )
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
            <Trans>Selected:</Trans>{' '}
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
