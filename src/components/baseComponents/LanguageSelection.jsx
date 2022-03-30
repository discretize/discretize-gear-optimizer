import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
  { value: 'de', label: 'Deutsch' },
];

const LanguageSelection = () => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = i18n;

  const onChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <>
      <Box display="flex" flexDirection="row-reverse" m={1}>
        <FormControl sx={{ minWidth: 150 }} size="small" variant="standard">
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            onChange={onChange}
            value={language}
            label="Age"
          >
            {LANGUAGES.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default LanguageSelection;
