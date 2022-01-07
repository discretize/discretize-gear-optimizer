import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Link as LangLink, useI18next } from 'gatsby-plugin-react-i18next';
import * as React from 'react';

const useStyles = makeStyles()((theme) => ({
  langLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
}));

const LanguageSelection = () => {
  const classes = useStyles();
  const { originalPath, language } = useI18next();

  return (
    <>
      <Box display="flex" flexDirection="row-reverse" m={1}>
        <Box>
          {language === 'zh' ? (
            <LangLink to={originalPath} language="en" className={classes.langLink}>
              English
            </LangLink>
          ) : (
            <LangLink to={originalPath} language="zh" className={classes.langLink}>
              中文
            </LangLink>
          )}
        </Box>
      </Box>
    </>
  );
};

export default LanguageSelection;
