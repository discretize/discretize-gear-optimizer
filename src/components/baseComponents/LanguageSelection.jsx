import { Box } from '@mui/material';
import { Link as LangLink, useI18next } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import { makeStyles } from 'tss-react/mui';

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

const LanguageSelection = ({ location }) => {
  const { classes } = useStyles();
  const { originalPath, language } = useI18next();
  const targetPath = originalPath + location.search;
  return (
    <>
      <Box display="flex" flexDirection="row-reverse" m={1}>
        <Box>
          {language === 'zh' ? (
            <LangLink to={targetPath} language="en" className={classes.langLink}>
              English
            </LangLink>
          ) : (
            <LangLink to={targetPath} language="zh" className={classes.langLink}>
              中文
            </LangLink>
          )}
        </Box>
      </Box>
    </>
  );
};

export default LanguageSelection;
