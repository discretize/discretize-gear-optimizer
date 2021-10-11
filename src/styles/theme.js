import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  name: 'default',

  palette: {
    type: 'dark',
    primary: {
      light: '#64ffff',
      main: '#00cccc',
      dark: '#009a9b',
    },

    text: {
      primary: '#ddd',
      secondary: '#b1b1b5',
    },

    divider: '#1e2124',

    background: {
      default: '#2f3136',
      embossed: '#2a2c31',
      paper: '#26292e',
    },
  },

  typography: {
    fontFamily: 'Muli',
    fontSize: 16,

    h1: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    h3: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    h5: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    h6: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
    },
    subtitle1: {
      fontFamily: 'Raleway',
      color: '#fff',
    },
  },

  shape: {
    borderRadius: 4,
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },

    MuiWithWidth: {
      initialWidth: 'xl',
    },
  },
});

export default createTheme({
  ...theme,

  overrides: {
    MuiGrid: {
      /* item: {
        '& > *:last-child': {
          marginBottom: 0,
        },
      }, */
      /*
      "spacing-xs-8": {
        margin: `-${theme.spacing(0.5)}px !important`
      },
      "spacing-xs-16": {
        margin: `-${theme.spacing(1)}px !important`
      },
      "spacing-xs-24": {
        margin: `-${theme.spacing(1.5)}px !important`
      },
      "spacing-xs-32": {
        margin: `-${theme.spacing(2)}px !important`
      },
      "spacing-xs-40": {
        margin: `-${theme.spacing(2.5)}px !important`
      }
      */
    },
    MuiSvgIcon: {
      root: {
        marginBottom: '-2px !important',
      },
    },
    MuiTypography: {
      paragraph: {
        textAlign: 'justify',
        hyphens: 'auto',
      },
      h1: {
        [theme.breakpoints.down('xs')]: {
          fontSize: theme.typography.h2.fontSize,
          lineHeight: theme.typography.h2.lineHeight,
        },
      },
      h2: {
        [theme.breakpoints.down('xs')]: {
          fontSize: theme.typography.h3.fontSize,
          lineHeight: theme.typography.h3.lineHeight,
        },
      },
      h3: {
        [theme.breakpoints.down('xs')]: {
          fontSize: theme.typography.h4.fontSize,
          lineHeight: theme.typography.h4.lineHeight,
        },
      },
      h4: {
        [theme.breakpoints.down('xs')]: {
          fontSize: '1.8125rem',
          lineHeight: '1.280025em',
        },
      },
    },
    MuiButton: {
      contained: {
        fontWeight: 600,
        transition: theme.transitions.create(
          ['background-color', 'box-shadow', 'border', 'color'],
          {
            duration: theme.transitions.duration.short,
          },
        ),
        '&:hover': {
          color: 'white',
        },
      },
    },
    MuiGridList: {
      root: {
        overflowY: 'initial',
      },
    },
    MuiGridListTile: {
      tile: {
        overflow: 'initial',
      },
    },
    MuiList: {
      root: {
        '& > hr': {
          marginBottom: 0,
        },
      },
    },
    MuiDivider: {
      root: {
        marginBottom: theme.spacing(2),
      },
    },
    MuiTable: {
      root: {
        marginBottom: theme.spacing(2),
      },
    },

    MuiTableBody: {
      root: {
        '&> tr:last-child': {
          '&> th, td': {
            borderBottom: 'none',
          },
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        'th&': {
          fontWeight: 700,
        },
        '& > *:last-child': {
          marginBottom: 0,
        },
      },
    },
  },
});
