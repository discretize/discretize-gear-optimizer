import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
  { value: 'de', label: 'Deutsch' },
];

const LanguageSelection = () => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = i18n;

  return (
    <FormControl sx={{ minWidth: 150 }} size="small" variant="standard">
      <FormLabel id="filter-button-group">Language</FormLabel>

      <RadioGroup
        aria-labelledby="language-select-label"
        value={language}
        onChange={(e) => {
          changeLanguage(e.target.value);
        }}
        color="primary"
      >
        {LANGUAGES.map(({ value, label }) => (
          <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default LanguageSelection;
