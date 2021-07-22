import theme from './theme';

export default {
  '@global': {
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
      padding: `${theme.spacing.unit * 0.25}px ${theme.spacing.unit * 0.75}px`,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
    },

    pre: {
      margin: `0 ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
      },
      whiteSpace: 'pre',
      '& > code': {
        padding: theme.spacing.unit * 2,
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
      padding: theme.spacing.unit * 2,
      margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
      },
    },

    '::-webkit-scrollbar': {
      width: theme.spacing.unit,
      height: theme.spacing.unit,
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
  },
};
