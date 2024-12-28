import theme from './muiTheme';

export default {
  body: {
    cursor: `url('/images/cursors/default.png'), default`,
  },
  'a, button, input, .MuiMenuItem-root, .MuiInput-root, .MuiSelect-root, .MuiFormControlLabel-label, .MuiButtonBase-root, .noUi-handle, .MuiSlider-root, .MuiChip-root, .MuiSvgIcon-root, .MuiAutocomplete-option':
    {
      cursor: `url('/images/cursors/green.png'), pointer !important`,
    },

  '::selection': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },

  'code, pre, samp': {
    fontFamily: 'Fira Mono',
    lineHeight: 1,
    fontSize: '0.875rem',
  },

  'code, samp': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.embossed,
    padding: `${theme.spacing(0.25)} ${theme.spacing(0.75)}`,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },

  pre: {
    margin: `0 ${theme.spacing(2)} ${theme.spacing(2)}`,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    whiteSpace: 'pre',
    '& > code': {
      padding: theme.spacing(2),
      display: 'block',
      width: '100%',
      boxShadow: theme.shadows[2],
      wordWrap: 'normal',
      wordBreak: 'normal',
      whiteSpace: 'pre',
      overflowX: 'auto',
    },
  },

  blockquote: {
    borderLeft: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
    margin: `${theme.spacing(2)} ${theme.spacing(2)}`,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },

  '::-webkit-scrollbar': {
    width: theme.spacing(1),
    height: theme.spacing(1),
  },
  '::-webkit-scrollbar-track': {
    background: '#1e2124',
  },
  '::-webkit-scrollbar-thumb': {
    background: '#484b51',
    borderRadius: theme.shape.borderRadius,
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: '#b1b1b5',
  },
  '::-webkit-scrollbar-corner': {
    background: '#1e2124',
  },

  '#nprogress .bar': {
    zIndex: 1501,
    height: 3,
  },
};
