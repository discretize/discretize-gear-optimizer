import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
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

    display4: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    display3: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    display2: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    display1: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    headline: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
      textShadow: '1px 1px 1px #000',
    },
    title: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      color: '#fff',
    },
    subheading: {
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

export default createMuiTheme({
  ...theme,

  overrides: {
    MuiGrid: {
      /* item: {
        '& > *:last-child': {
          marginBottom: 0,
        },
      }, */
      'spacing-xs-8': {
        margin: `-${theme.spacing.unit * 0.5}px !important`,
      },
      'spacing-xs-16': {
        margin: `-${theme.spacing.unit * 1}px !important`,
      },
      'spacing-xs-24': {
        margin: `-${theme.spacing.unit * 1.5}px !important`,
      },
      'spacing-xs-32': {
        margin: `-${theme.spacing.unit * 2}px !important`,
      },
      'spacing-xs-40': {
        margin: `-${theme.spacing.unit * 2.5}px !important`,
      },
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
      display4: {
        [theme.breakpoints.down('xs')]: {
          fontSize: theme.typography.display3.fontSize,
          lineHeight: theme.typography.display3.lineHeight,
        },
      },
      display3: {
        [theme.breakpoints.down('xs')]: {
          fontSize: theme.typography.display2.fontSize,
          lineHeight: theme.typography.display2.lineHeight,
        },
      },
      display2: {
        [theme.breakpoints.down('xs')]: {
          fontSize: theme.typography.display1.fontSize,
          lineHeight: theme.typography.display1.lineHeight,
        },
      },
      display1: {
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
        marginBottom: theme.spacing.unit * 2,
      },
    },
    MuiTable: {
      root: {
        marginBottom: theme.spacing.unit * 2,
      },
    },
    MuiTableHead: {
      root: {
        [theme.breakpoints.down('sm')]: {
          display: 'block',
          width: 'auto',
        },
      },
    },
    MuiTableBody: {
      root: {
        [theme.breakpoints.down('sm')]: {
          display: 'block',
          width: 'auto',
        },
        '&> tr:last-child': {
          '&> th, td': {
            borderBottom: 'none',
          },
        },
      },
    },
    MuiTableRow: {
      root: {
        [theme.breakpoints.down('sm')]: {
          paddingTop: theme.spacing.unit,
          paddingBottom: theme.spacing.unit,
          display: 'block',
          width: 'auto',
          height: 'auto',
          '&:not(:last-child)': {
            borderBottom: `1px solid ${theme.palette.divider}`,
          },
        },
      },
      head: {
        [theme.breakpoints.down('sm')]: {
          height: 'auto',
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down('sm')]: {
          display: 'block',
          width: 'auto',
          borderBottom: 'none',
        },
        'th&': {
          fontWeight: 700,
        },
        '& > *:last-child': {
          marginBottom: 0,
        },
      },
      numeric: {
        [theme.breakpoints.down('sm')]: {
          textAlign: 'left',
          flexDirection: 'row',
        },
      },
    },
  },
});
