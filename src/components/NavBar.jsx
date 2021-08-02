import {
  AppBar,
  Button,
  debounce,
  Drawer,
  FormControlLabel,
  IconButton,
  Switch,
  Toolbar,
  withStyles,
} from '@material-ui/core';
import { Profession } from 'gw2-ui';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import {
  changeControl,
  changeProfession,
  getControl,
  getProfession,
} from '../state/gearOptimizerSlice';
import { PROFESSIONS } from '../utils/gw2-data';
import { firstUppercase } from '../utils/usefulFunctions';

const styles = () => ({
  topNav: {},
  navProfession: {
    fontSize: '2rem',
  },
  stickRight: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  drawerContainer: {
    padding: '20px 30px',
  },
});

const Navbar = ({ classes }) => {
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const expertMode = useSelector(getControl('expertMode'));

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', debounce(setResponsiveness, 300));

    return () => {
      window.removeEventListener('resize', debounce(setResponsiveness, 300));
    };
  }, []);

  const stickyRight = () => {
    return (
      <>
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
          className={classes.stickRight}
          label="Expert"
        />
        <IconButton className={classes.githubIcon}>
          <GitHubIcon />
        </IconButton>
      </>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    const getDrawerChoices = () => {
      return PROFESSIONS.map((p) => (
        <div key={p.profession}>
          <Button
            onClick={() => dispatch(changeProfession(p.profession))}
            variant={p.profession === profession ? 'contained' : 'text'}
          >
            <Profession
              name={firstUppercase(p.profession)}
              disableLink
              className={classes.navProfession}
            />
          </Button>
        </div>
      ));
    };
    return (
      <Toolbar>
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

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        {stickyRight()}
      </Toolbar>
    );
  };

  const displayDesktop = () => (
    <Toolbar>
      {PROFESSIONS.map((p) => (
        <Button
          key={p.profession}
          onClick={() => dispatch(changeProfession(p.profession))}
          variant={p.profession === profession ? 'contained' : 'text'}
        >
          <Profession
            name={firstUppercase(p.profession)}
            disableLink
            disableText
            className={classes.navProfession}
          />
        </Button>
      ))}
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
