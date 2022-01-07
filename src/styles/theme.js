import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00cccc',
      light: '#64ffff',
      dark: '#009a9b',
    },
    secondary: {
      main: '#ff6e40',
      light: '#FF8B66',
      dark: '#B24D2C',
    },
    background: {
      default: '#2f3136',
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
  components: {
    MuiTableBody: {
      styleOverrides: {
        root: {
          '&> tr:last-child': {
            '&> th, td': {
              borderBottom: 'none',
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid #1e2124`,
          'th&': {
            fontWeight: 700,
          },
          '& > *:last-child': {
            marginBottom: 0,
          },
        },
      },
    },
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
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
