import { Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00cccc',
      light: '#64ffff',
      dark: '#009a9b',
    },
    themed: {
      main: '#00cccc',
      light: '#64ffff',
      dark: '#009a9b',
    },
    subtleThemed: {
      main: '#00cccc',
      light: '#64ffff',
      dark: '#066464',
    },
    unthemed: {
      main: '#009a9b',
      light: '#2f3136',
      dark: '#2f3136',
    },
    secondary: {
      main: '#ff6e40',
      light: '#FF8B66',
      dark: '#B24D2C',
    },
    background: {
      default: '#2f3136',
      embossed: '#2a2c31',
      paper: '#26292e',
    },
    text: {
      primary: '#ddd',
      secondary: '#b1b1b5',
    },
    divider: '#1e2124',
    star: '#FFDF00',
  },
  typography: {
    fontFamily: 'Muli',
    fontSize: 16,
    h1: {
      fontFamily: 'Raleway',
    },
    h2: {
      fontFamily: 'Raleway',
    },
    h3: {
      fontFamily: 'Raleway',
    },
    h4: {
      fontFamily: 'Raleway',
    },
    h5: {
      fontFamily: 'Raleway',
    },
    h6: {
      fontFamily: 'Raleway',
    },
  },
});

export default createTheme(theme, {
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          marginBottom: '-2px !important',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(2),
        },
      },
    },
    // MuiTableHead: {
    //   styleOverrides: {
    //     root: {
    //       [theme.breakpoints.down('md')]: {
    //         display: 'block',
    //         width: 'auto',
    //       },
    //     },
    //   },
    // },
    MuiTableBody: {
      styleOverrides: {
        root: {
          // [theme.breakpoints.down('md')]: {
          //   display: 'block',
          //   width: 'auto',
          // },
          '&> tr:last-child': {
            '&> th, td': {
              borderBottom: 'none',
            },
          },
        },
      },
    },
    // MuiTableRow: {
    //   styleOverrides: {
    //     root: {
    //       [theme.breakpoints.down('md')]: {
    //         paddingTop: theme.spacing(1),
    //         paddingBottom: theme.spacing(1),
    //         display: 'block',
    //         width: 'auto',
    //         height: 'auto',
    //         '&:not(:last-child)': {
    //           borderBottom: `1px solid ${theme.palette.divider}`,
    //         },
    //       },
    //     },
    //     head: {
    //       [theme.breakpoints.down('md')]: {
    //         height: 'auto',
    //         borderBottom: `1px solid ${theme.palette.divider}`,
    //       },
    //     },
    //   },
    // },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${theme.palette.divider}`,
          // [theme.breakpoints.down('md')]: {
          //   display: 'block',
          //   width: 'auto',
          //   borderBottom: 'none',
          //   padding: '4px 24px 4px 24px',
          // },
          'th&': {
            fontWeight: 700,
          },
          '& > *:last-child': {
            marginBottom: 0,
          },
        },
        head: {
          fontSize: '0.8571428571428571rem',
          color: theme.palette.text.secondary,
          lineHeight: 'inherit',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          fontWeight: 600,
          transition: theme.transitions.create(
            ['background-color', 'box-shadow', 'border', 'color'],
            {
              duration: theme.transitions.duration.short,
            },
          ),
          '&:hover': {
            color: 'white !important',
          },
        },
      },
    },
    MuiButtonBase: { defaultProps: { disableRipple: true } },
    MuiGridList: {
      styleOverrides: {
        root: {
          overflowY: 'initial',
        },
      },
    },
    MuiGridListTile: {
      styleOverrides: {
        tile: {
          overflow: 'initial',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          '& > hr': {
            marginBottom: 0,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: '11px',
          paddingBottom: '11px',
        },
        dense: {
          paddingTop: '8px',
          paddingBottom: '8px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: { background: theme.palette.background.paper },
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[1],
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(2),
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        PaperComponent: ({ children }) => (
          <Paper elevation={3} sx={{ background: theme.palette.background.paper }}>
            {children}
          </Paper>
        ),
      },
    },
  },
});
