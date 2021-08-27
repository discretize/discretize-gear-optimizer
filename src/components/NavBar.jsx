import {
  AppBar,
  Box,
  Button,
  debounce,
  Drawer,
  FormControlLabel,
  IconButton,
  MenuItem,
  SwipeableDrawer,
  Switch,
  Toolbar,
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
  changeBuff,
  changeControl,
  changePriority,
  changeProfession,
  changeState,
  getBuffs,
  getControl,
  getProfession,
  reset,
  setTemplate,
} from '../state/gearOptimizerSlice';
import { PROFESSIONS } from '../utils/gw2-data';
import { firstUppercase } from '../utils/usefulFunctions';
import NavAccordion from './nav/NavAccordion';

const styles = (theme) => ({
  topNav: {
    marginBottom: theme.spacing(2),
  },
  navProfession: {
    fontSize: '2rem',
  },
  drawerContainer: {},
});

const Navbar = ({ classes, data, buffPresets, prioritiesPresets }) => {
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const expertMode = useSelector(getControl('expertMode'));
  const buffs = useSelector(getBuffs);

  const [state, setState] = useState({
    mobileView: typeof window !== 'undefined' ? window.innerWidth < 900 : false,
    drawerOpen: false,
    hover: [false, false, false, false, false, false, false, false, false],
    anchor: null,
  });
  const { mobileView, drawerOpen } = state;

  const setResponsiveness = () => {
    const mobileViewCurrent = window.innerWidth < 900;
    if (mobileViewCurrent !== mobileView) {
      setState((prevState) => ({ ...prevState, mobileView: mobileViewCurrent }));
    }
  };
  const debouncedResponsive = debounce(setResponsiveness, 300);

  useEffect(() => {
    window.addEventListener('resize', debouncedResponsive);

    return () => {
      window.removeEventListener('resize', debouncedResponsive);
    };
  });

  const stickyRight = () => {
    return (
      <Box>
        <FormControlLabel
          control={
            <Switch
              checked={expertMode}
              onChange={(e) =>
                dispatch(changeControl({ key: 'expertMode', value: e.target.checked }))
              }
              name="checked"
              color="primary"
            />
          }
          label="Expert"
        />
        <IconButton
          className={classes.githubIcon}
          href="https://github.com/discretize/discretize-gear-optimizer"
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
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>
            <NavAccordion data={data} />
          </div>
        </SwipeableDrawer>

        {stickyRight()}
      </Toolbar>
    );
  };

  const handleTemplateSelect = (popup, elem, prof) => {
    dispatch(reset);
    const traitState = JSON.parse(elem.traits);

    // set all the buffs to disabled
    Object.keys(buffs).forEach((el) => dispatch(changeBuff({ key: el, value: false })));
    // apply the preset
    const buffState = JSON.parse(buffPresets.find((pre) => pre.name === elem.boons).value);
    Object.keys(buffState).forEach((key) => dispatch(changeBuff({ key, value: buffState[key] })));

    // change priorities
    const prioritiesState = JSON.parse(
      prioritiesPresets.find((prio) => prio.name === elem.priority).value,
    );
    Object.keys(prioritiesState).forEach((key) =>
      dispatch(changePriority({ key, value: prioritiesState[key] })),
    );

    dispatch(changeState({ ...traitState, profession: prof }));
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
                dispatch(changeProfession(p.profession));
                dispatch(reset());
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
                    onClick={(e) => handleTemplateSelect(popupState[index], elem, p.profession)}
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
      {stickyRight()}
    </Toolbar>
  );

  return (
    <AppBar position="sticky" className={classes.topNav} color="inherit">
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

export default withStyles(styles)(Navbar);
