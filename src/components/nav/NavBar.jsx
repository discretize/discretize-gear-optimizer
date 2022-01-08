import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
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
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { bindHover, bindMenu, usePopupState } from 'material-ui-popup-state/hooks';
import Menu from 'material-ui-popup-state/HoverMenu';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeExpertMode,
  changeProfession,
  getControl,
  getProfession,
  setBuildTemplate,
} from '../../state/slices/controlsSlice';
import { PROFESSIONS } from '../../utils/gw2-data';
import Profession from '../baseComponents/Profession';
import NavAccordion from './NavAccordion';

const Navbar = ({
  data,
  buffPresets,
  prioritiesPresets,
  distributionPresets,
  extrasPresets,
  traitPresets,
}) => {
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const expertMode = useSelector(getControl('expertMode'));
  const selectedSpecialization = useSelector(getControl('selectedSpecialization'));
  const selectedTemplateName = useSelector(getControl('selectedTemplate'));

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
                dispatch({ type: 'CANCEL' });
                dispatch(changeExpertMode(e.target.checked));
              }}
              name="checked"
              color="primary"
            />
          }
          label={t('Expert')}
        />
        <IconButton
          color="secondary"
          href="https://github.com/discretize/discretize-gear-optimizer/tree/staging"
          target="_blank"
          rel="noopener"
          size="large"
        >
          <GitHubIcon />
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
    dispatch({ type: 'CANCEL' });
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
                dispatch({ type: 'CANCEL' });
                if (expertMode) {
                  dispatch(changeProfession(prof.profession));
                }
              }}
              variant={prof.profession === profession ? 'contained' : 'text'}
              color="inherit"
              {...bindHover(popupState[index])}
            >
              <Profession
                name={prof.profession}
                disableLink
                disableText
                style={{
                  fontSize: '2rem',
                }}
              />
            </Button>

            <Menu
              {...bindMenu(popupState[index])}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
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
            />
          ) : (
            <Profession name={selectedSpecialization} />
          )}
        </Box>
      )}

      {stickyRight()}
    </Toolbar>
  );

  return (
    <AppBar
      position="sticky"
      sx={profession === '' ? { marginBottom: 0 } : { marginBottom: 2 }}
      color="inherit"
      elevation={0}
      enableColorOnDark
    >
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

export default React.memo(Navbar);
