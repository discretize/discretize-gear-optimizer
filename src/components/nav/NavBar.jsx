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
  withStyles,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import { Profession } from 'gw2-ui-bulk';
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
} from '../../state/gearOptimizerSlice';
import { PROFESSIONS } from '../../utils/gw2-data';
import { firstUppercase } from '../../utils/usefulFunctions';
import NavAccordion from './NavAccordion';

const styles = (theme) => ({
  topNav: {
    marginBottom: theme.spacing(2),
  },
  topNavNoMarge: {
    marginBottom: 0,
  },
  navProfession: {
    fontSize: '2rem',
  },
});

const Navbar = ({ classes, data, buffPresets, prioritiesPresets, distributionPresets }) => {
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const expertMode = useSelector(getControl('expertMode'));
  const selectedSpecialization = useSelector(getControl('selectedSpecialization'));
  const selectedTemplateName = useSelector(getControl('selectedTemplate'));

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
          label="Expert"
        />
        <IconButton
          className={classes.githubIcon}
          href="https://github.com/discretize/discretize-gear-optimizer/tree/react-recode"
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
            />
          </div>
        </SwipeableDrawer>

        {stickyRight()}
      </Toolbar>
    );
  };

  const handleTemplateSelect = (popup, elem, specialization) => {
    dispatch({ type: 'CANCEL' });
    dispatch(
      setBuildTemplate({
        build: elem,
        specialization: specialization,
        buffPreset: JSON.parse(buffPresets.find((pre) => pre.name === elem.boons).value),
        distributionPreset: JSON.parse(
          distributionPresets.find((pre) => pre.name === elem.distribution).value,
        ),
        prioritiesPreset: JSON.parse(
          prioritiesPresets.find((prio) => prio.name === elem.priority).value,
        ),
      }),
    );

    popup.close();
  };

  const popupState = [
    usePopupState({ variant: 'popover', popupId: 'demoMenu0' }),
    usePopupState({ variant: 'popover', popupId: 'demoMenu1' }),
    usePopupState({ variant: 'popover', popupId: 'demoMenu2' }),
    usePopupState({ variant: 'popover', popupId: 'demoMenu3' }),
    usePopupState({ variant: 'popover', popupId: 'demoMenu4' }),
    usePopupState({ variant: 'popover', popupId: 'demoMenu5' }),
    usePopupState({ variant: 'popover', popupId: 'demoMenu6' }),
    usePopupState({ variant: 'popover', popupId: 'demoMenu7' }),
    usePopupState({ variant: 'popover', popupId: 'demoMenu8' }),
  ];
  const displayDesktop = () => (
    <Toolbar>
      <Box flexGrow={1}>
        {PROFESSIONS.map((p, index) => (
          <React.Fragment key={p.profession}>
            <Button
              onMouseOver={(e) =>
                setState({
                  ...state,
                  hover: state.hover.map((item, i) => i === index),
                  anchor: e.currentTarget,
                })
              }
              onClick={() => {
                dispatch({ type: 'CANCEL' });
                if (expertMode) {
                  dispatch(changeProfession(p.profession));
                }
              }}
              variant={p.profession === profession ? 'contained' : 'text'}
              {...bindHover(popupState[index])}
            >
              <Profession
                name={firstUppercase(p.profession)}
                disableLink
                disableText
                className={classes.navProfession}
              />
            </Button>
            <Menu
              {...bindMenu(popupState[index])}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              {data
                .find((elem) => elem.class === p.profession.toLowerCase())
                .builds.map((elem) => (
                  <MenuItem
                    key={elem.name}
                    onClick={(e) =>
                      handleTemplateSelect(popupState[index], elem, elem.specialization)
                    }
                  >
                    <Profession
                      eliteSpecialization={elem.specialization}
                      disableLink
                      text={elem.name}
                    />
                  </MenuItem>
                ))}
            </Menu>
          </React.Fragment>
        ))}
      </Box>

      {(selectedSpecialization || selectedTemplateName) && (
        <Box flexGrow={1}>
          <Typography>Selected: </Typography>
          {selectedTemplateName ? (
            <Profession eliteSpecialization={selectedSpecialization} text={selectedTemplateName} />
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
      className={profession === '' ? classes.topNavNoMarge : classes.topNav}
      color="inherit"
    >
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

export default React.memo(withStyles(styles)(Navbar));
